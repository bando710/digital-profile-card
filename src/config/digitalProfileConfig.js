import * as LucideIcons from 'lucide-react';

// Custom SVG icons for services not in lucide-react
const customIcons = {
  // Add custom icons here if needed
};

// Combine custom icons with lucide-react icons
const allIcons = { ...customIcons, ...LucideIcons };

export const digitalProfileConfig = {
  name: "Matt Guzman",
  initials: "MG",
  subtitle: "Yoga Instructor & Wellness Advocate",
  profileImage: "https://i.imgur.com/Ho1i0xC.png",
  backgroundColor: "bg-emerald-700",
  textColor: "text-neutral-50",
  headerGradient: {
    from: "from-green-500",
    to: "to-blue-200",
  },
  siteBackground: {
    type: 'color', // or 'gradient'
    color: 'bg-slate-400', // Tailwind CSS color class
    gradient: {
      from: 'from-gray-900',
      to: 'to-gray-800',
      direction: 'bg-gradient-to-r' // Options: bg-gradient-to-r, bg-gradient-to-b, etc.
    }
  },
  socialLinks: [
    { icon: 'Mail', url: "mailto: ", label: "Email" },
    { icon: 'Linkedin', url: " ", label: "LinkedIn" },
    { icon: 'Twitter', url: " ", label: "Twitter" },
    { icon: 'Instagram', url: " ", label: "Instagram" },
    // Add or remove social links as needed
  ],
};

export { allIcons };