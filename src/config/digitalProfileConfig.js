import * as LucideIcons from 'lucide-react';

// Custom SVG icons for services not in lucide-react
const customIcons = {
  // Add custom icons here if needed
};

// Combine custom icons with lucide-react icons
const allIcons = { ...customIcons, ...LucideIcons };

export const digitalProfileConfig = {
  name: "John Doe",
  initials: "JD",
  subtitle: "Web Developer",
  // profileImage: " ", Image goes here
  backgroundColor: "bg-indigo-700",
  textColor: "text-neutral-50",
  headerGradient: {
    from: "from-cyan-400",
    to: "to-blue-300",
  },
  siteBackground: {
    type: 'color', // or 'gradient'
    color: 'bg-purple-800', // Tailwind CSS color class
    gradient: {
      from: 'from-gray-900',
      to: 'to-gray-800',
      direction: 'bg-gradient-to-r' // Options: bg-gradient-to-r, bg-gradient-to-b, etc.
    }
  },
  socialLinks: [
    { icon: 'Mail', url: "mailto: ", label: "Email" },
    { icon: 'Linkedin', url: " ", label: "LinkedIn" },
    { icon: 'Github', url: " ", label: "Github" },
    { icon: 'Twitter', url: " ", label: "Twitter" },
    { icon: 'Instagram', url: " ", label: "Instagram" },
    // Add or remove social links as needed
  ],
};

export { allIcons };