import React from 'react';
import { digitalProfileConfig, allIcons } from '../config/digitalProfileConfig';

const ProfileImage = React.memo(({ profileImage, initials, backgroundColor }) => {
  if (profileImage) {
    return <img src={profileImage} alt={initials} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg" />;
  }
  return (
    <div className={`w-20 h-20 ${backgroundColor} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
      <div className="text-white text-3xl font-bold">
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
        hover:shadow-md focus:shadow-md
        rounded-full p-2 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
      `}
    >
      <IconComponent size={24} />
    </a>
  );
});

const DigitalProfileCard = () => {
  const { 
    name, 
    subtitle, 
    backgroundColor, 
    textColor, 
    headerGradient 
  } = digitalProfileConfig;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div 
        className={`w-full max-w-sm ${backgroundColor} rounded-2xl shadow-2xl overflow-hidden`}
      >
        <div className="relative">
          <div className={`h-24 bg-gradient-to-r ${headerGradient.from} ${headerGradient.to}`}></div>
          <div className="absolute -bottom-10 inset-x-0 flex justify-center">
            <ProfileImage
              profileImage={digitalProfileConfig.profileImage}
              initials={digitalProfileConfig.initials}
              backgroundColor={digitalProfileConfig.backgroundColor}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-12 pb-6 px-4 space-y-4">
          <div className="text-center">
            <h2 className={`${textColor} text-2xl font-bold`}>{name}</h2>
            {subtitle && <p className={`${textColor} text-opacity-80 text-sm mt-1`}>{subtitle}</p>}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {digitalProfileConfig.socialLinks.map((link, index) => (
              <SocialIcon
                key={index}
                icon={link.icon}
                url={link.url}
                label={link.label}
                textColor={textColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DigitalProfileCard);