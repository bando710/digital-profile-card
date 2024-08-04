import React from 'react';
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
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      title={label}
      className={`
        ${textColor} hover:text-opacity-80 
        transform transition-all duration-200 ease-in-out 
        hover:scale-110 focus:scale-110 
        hover:shadow-lg focus:shadow-lg
        rounded-full p-2 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
      `}
    >
      <IconComponent size={24} />
    </a>
  );
});

const DigitalProfileCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div 
        className={`w-full max-w-sm ${digitalProfileConfig.backgroundColor} rounded-xl shadow-xl overflow-hidden`}
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