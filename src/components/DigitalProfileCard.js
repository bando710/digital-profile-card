import React, { useState, useCallback, useMemo } from 'react';
import { digitalProfileConfig, allIcons } from '../config/digitalProfileConfig';

const ProfileImage = React.memo(({ profileImage, initials, backgroundColor }) => {
  if (profileImage) {
    return <img src={profileImage} alt={initials} className="w-16 h-16 rounded-full object-cover" />;
  }
  return (
    <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center`}>
      <div className={`text-${backgroundColor.split('-')[1]} text-2xl font-bold`}>
        {initials}
      </div>
    </div>
  );
});

const SocialIcon = React.memo(({ icon, url, label, textColor }) => {
  const IconComponent = allIcons[icon];
  if (!IconComponent) return null;
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={label}>
      <IconComponent className={textColor} size={24} />
    </a>
  );
});

const DigitalProfileCard = () => {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x: x / rect.width, y: y / rect.height });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0.5, y: 0.5 });
  }, []);

  const cardStyle = useMemo(() => ({
    transform: `perspective(1000px) rotateY(${(position.x - 0.5) * 10}deg) rotateX(${(0.5 - position.y) * 10}deg)`,
    transition: 'transform 0.1s',
  }), [position]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div 
        className={`w-full max-w-sm ${digitalProfileConfig.backgroundColor} rounded-xl shadow-xl overflow-hidden cursor-pointer`}
        style={cardStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
          <ProfileImage
            profileImage={digitalProfileConfig.profileImage}
            initials={digitalProfileConfig.initials}
            backgroundColor={digitalProfileConfig.backgroundColor}
          />
          <div className="text-center">
            <h2 className={`${digitalProfileConfig.textColor} text-2xl font-bold`}>{digitalProfileConfig.name}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {digitalProfileConfig.socialLinks.map((link, index) => (
              <SocialIcon
                key={index}
                icon={link.icon}
                url={link.url}
                label={link.label}
                textColor={digitalProfileConfig.textColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DigitalProfileCard);