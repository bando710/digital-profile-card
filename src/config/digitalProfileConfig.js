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
  socialLinks: [
    { icon: 'Mail', url: "mailto:john@example.com", label: "Email" },
    { icon: 'Linkedin', url: "https://linkedin.com/in/johndoe", label: "LinkedIn" },
    { icon: 'Github', url: "https://github.com/johndoe", label: "GitHub" },
    { icon: 'Twitter', url: "https://twitter.com/johndoe", label: "Twitter" },
    { icon: 'Instagram', url: "https://instagram.com/johndoe", label: "Instagram" },
    // Add or remove social links as needed
  ],
};

export { allIcons };