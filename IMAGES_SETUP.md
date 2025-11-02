# Images and Assets Setup

This documentation site uses images and assets that should be sourced from [skydynamics.aero](https://skydynamics.aero).

## Required Images

### Logo
- **File**: `static/img/logo.svg`
- **Current**: Placeholder SVG
- **Action**: Replace with the actual Aero EBT logo from the SkyDynamics website
- **Recommended**: SVG format for scalability, or high-resolution PNG

### Favicon
- **File**: `static/img/favicon.ico`
- **Current**: Empty placeholder
- **Action**: Create or download favicon from SkyDynamics branding
- **Size**: 32x32 or 16x16 pixels

### Social Card Image
- **File**: `static/img/aero-ebt-social-card.jpg`
- **Current**: Empty placeholder
- **Action**: Create a social sharing image (1200x630px recommended)
- **Usage**: Displayed when sharing the documentation on social media
- **Content**: Should include Aero EBT branding and key messaging

## Additional Assets

You may want to add:
- Product screenshots for each product section
- Feature images in documentation pages
- Hero images for the landing page
- Icons for different products

## Sourcing Images

1. Visit [skydynamics.aero](https://skydynamics.aero)
2. Download appropriate images (ensure you have rights to use them)
3. Optimize images for web use:
   - Use appropriate formats (SVG for logos, WebP/PNG for photos)
   - Compress images to reduce file size
   - Ensure proper dimensions

## Image Optimization

Recommended tools:
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG images
- [Squoosh](https://squoosh.app/) - Image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimize SVG files

## Adding Images to Documentation

Once images are added to `static/img/`, reference them in Markdown:

```markdown
![Aero EBT Logo](/img/logo.svg)
```

Or in React/JSX:

```jsx
<img src="/img/logo.svg" alt="Aero EBT Logo" />
```

---

*Remember to respect copyright and licensing when using images from skydynamics.aero*

