# Digital Profile Card

This project creates an interactive, customizable digital profile card using React and Tailwind CSS. It features a modern design with a gradient header, profile image or initials, and customizable social media links.

## Features

- Gradient header with customizable colors
- Profile image support (falls back to initials if no image is provided)
- Customizable name, subtitle, and social media links
- Responsive design that looks great on all devices
- Interactive hover effects on social media icons

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/digital-profile-card.git
   cd digital-profile-card
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customizing Your Profile Card

All customizations are done in the `src/config/digitalProfileConfig.js` file. Here's how to customize each aspect of your profile card:

### Basic Information

```javascript
export const digitalProfileConfig = {
  name: "Your Name",
  initials: "YN",
  subtitle: "Your Title or Tagline",
  // ...
};
```

- `name`: Your full name
- `initials`: Your initials (displayed if no profile image is set)
- `subtitle`: Your job title, tagline, or any short description

### Profile Image

```javascript
export const digitalProfileConfig = {
  // ...
  profileImage: "https://example.com/path/to/your/image.jpg",
  // ...
};
```

Uncomment and set the `profileImage` to use a profile picture. If not set, the card will display your initials.

### Colors

```javascript
export const digitalProfileConfig = {
  // ...
  backgroundColor: "bg-white",
  textColor: "text-gray-800",
  headerGradient: {
    from: "from-blue-500",
    to: "to-purple-500",
  },
  // ...
};
```

- `backgroundColor`: The background color of the card [(Tailwind CSS class)](https://tailwindcss.com/docs/background-color)
- `textColor`: The color of the text on the card [(Tailwind CSS class)](https://tailwindcss.com/docs/text-color)
- `headerGradient`: The gradient colors for the header | Use the [link](https://tailwindcss.com/docs/background-color) for `backgroundColor`
  - `from`: The starting color of the gradient
  - `to`: The ending color of the gradient

### Social Links

```javascript
export const digitalProfileConfig = {
  // ...
  socialLinks: [
    { icon: 'Mail', url: "mailto:you@example.com", label: "Email" },
    { icon: 'Linkedin', url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: 'Github', url: "https://github.com/yourusername", label: "GitHub" },
    // Add more social links as needed
  ],
  // ...
};
```

Each social link object contains:
- `icon`: The name of the icon (from Lucide React icons)
- `url`: The URL to your profile on that platform
- `label`: A label for the icon (used for accessibility)

## Available Icons

This project uses Lucide React icons. You can find a list of available icons in the [Lucide documentation](https://lucide.dev/icons/).

## Adding Custom Icons

To add a custom icon not included in Lucide React:

1. Open `src/config/digitalProfileConfig.js`
2. Add your custom SVG icon to the `customIcons` object:

```javascript
const customIcons = {
  MyCustomIcon: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      {/* Your SVG path here */}
    </svg>
  ),
  // Add more custom icons as needed
};
```

3. Use your custom icon in the `socialLinks` array:

```javascript
socialLinks: [
  // ...
  { icon: 'MyCustomIcon', url: "https://example.com", label: "My Custom Link" },
],
```

## Building for Production

To build the app for production, run:

```
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

You can deploy this app to any static site hosting service. Some popular options include:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

Follow the deployment instructions for your chosen platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
