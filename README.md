# Digital Profile Card

This project creates an interactive, customizable digital profile card using React and Tailwind CSS. It features a modern design with a gradient header, profile image or initials, and customizable social media links.

## Features

- Gradient header with customizable colors
- Profile image support (falls back to initials if no image is provided)
- Customizable name, subtitle, and social media links
- Responsive design that looks great on all devices
- Interactive hover effects on social media icons
- Built with React and Tailwind CSS for easy customization
- Customizable site background

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

All customizations are done in the `src/config/digitalProfileConfig.js` file.

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
- `headerGradient`: The gradient colors for the header
  - `from`: The starting color of the gradient
  - `to`: The ending color of the gradient

### Site Background

You can customize the background of the entire site:

```javascript
export const digitalProfileConfig = {
  // ... other config options ...
  siteBackground: {
    type: 'color', // or 'gradient'
    color: 'bg-gray-900', // Tailwind CSS color class
    gradient: {
      from: 'from-gray-900',
      to: 'to-gray-800',
      direction: 'bg-gradient-to-r' // Options: bg-gradient-to-r, bg-gradient-to-b, etc.
    }
  },
};
```

- For a solid color background, set `type` to `'color'` and specify the `color` using a Tailwind CSS class.
- For a gradient background, set `type` to `'gradient'` and configure the `gradient` object.
  - `from`: Starting color class
  - `to`: Ending color class
  - `direction`: Gradient direction (e.g., `'bg-gradient-to-r'` for right, `'bg-gradient-to-b'` for bottom)

## Social Links and Icons

This project uses Lucide React for icons, which provides a wide range of consistent and beautifully designed icons, including many popular social media platforms.

### Available Social Media Icons

Lucide React includes icons for many popular social media platforms. Here are some commonly used ones:

- Github
- Linkedin
- Twitter
- Facebook
- Instagram
- Youtube
- Twitch
- Dribbble
- Figma
- Codepen

### Using Social Icons

To use these icons in your Digital Profile Card, update the `socialLinks` array in your `src/config/digitalProfileConfig.js` file:

```javascript
export const digitalProfileConfig = {
  // ...other config options
  socialLinks: [
    { icon: 'Github', url: "https://github.com/yourusername", label: "GitHub" },
    { icon: 'Linkedin', url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: 'Twitter', url: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: 'Instagram', url: "https://instagram.com/yourusername", label: "Instagram" },
    // Add more social links as needed
  ],
};
```

The `icon` property should match the name of the Lucide icon you want to use.

### Additional Icons

For a full list of available icons, visit the [Lucide Icons Gallery](https://lucide.dev/icons/). You can use any of these icons in your social links or elsewhere in your Digital Profile Card.

If you need an icon for a platform that's not included in Lucide React, consider using a generic icon (like `Link` or `ExternalLink`) and relying on the `label` property to specify the platform.

## Changing the Site Title

To change the title of your site (the text that appears in the browser tab):

1. Open the `public/index.html` file.
2. Look for the `<title>` tag in the `<head>` section.
3. Replace the content between the `<title>` tags with your desired site title.

For example:

```html
<title>John Doe's Digital Profile</title>
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
