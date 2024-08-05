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
  // profileImage: "https://example.com/path/to/your/image.jpg",
  backgroundColor: "bg-teal-300",
  textColor: "text-gray-800",
  headerGradient: {
    from: "from-blue-500",
    to: "to-purple-500",
  },
  siteBackground: {
    type: 'color', // or 'gradient'
    color: 'bg-amber-500', // Tailwind CSS color class
    gradient: {
      from: 'from-gray-900',
      to: 'to-gray-800',
      direction: 'bg-gradient-to-r' // Options: bg-gradient-to-r, bg-gradient-to-b, etc.
    }
  },
  socialLinks: [
    { icon: 'Mail', url: "mailto: ", label: "Email" },
    { icon: 'Linkedin', url: " ", label: "LinkedIn" },
    { icon: 'Github', url: " ", label: "GitHub" },
    { icon: 'Twitter', url: " ", label: "Twitter" },
    { icon: 'Instagram', url: " ", label: "Instagram" },
    // Add or remove social links as needed
  ],
};

export { allIcons };