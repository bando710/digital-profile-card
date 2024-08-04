# Digital Profile Card

This project creates an interactive, customizable digital profile card using React and Tailwind CSS. It features a 3D rotation effect on hover and supports various social media icons.

## Features

- 3D rotation effect on hover
- Customizable colors and profile information
- Support for profile image or initials
- Flexible social media icon system
- Optimized for performance

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Customizing Your Profile

Edit the `src/config/digitalProfileConfig.js` file to customize your profile:

- Update `name` and `initials`
- Set `profileImage` if you want to use an image
- Customize `backgroundColor` and `textColor`
- Add or remove `socialLinks` as needed

## Available Social Icons

The project supports all icons from the `lucide-react` library, plus custom SVG icons. Check the `digitalProfileConfig.js` file for usage examples.

## Performance Considerations

This project is optimized for performance:

- Uses React.memo for component memoization
- Implements useCallback for event handlers
- Uses useMemo for complex calculations
- Extracts reusable components for better performance and readability

## Building and Deploying

1. Build the project:
   ```
   npm run build
   ```
2. Deploy the `build` folder to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).