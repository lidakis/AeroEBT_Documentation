# Quick Start Guide

Get your Aero EBT documentation site up and running in minutes!

## Prerequisites

- Node.js 18.0 or higher ([Download](https://nodejs.org/))
- Yarn package manager ([Install Yarn](https://yarnpkg.com/getting-started/install))

## Installation Steps

### 1. Install Dependencies

```bash
yarn install
```

This will install all required Docusaurus dependencies and packages.

### 2. Start Development Server

```bash
yarn start
```

This command starts a local development server and opens your browser at `http://localhost:3000`.

The site automatically reloads when you make changes to the documentation.

### 3. Build for Production

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 4. Preview Production Build

```bash
yarn serve
```

Serves the production build locally at `http://localhost:3000`.

## Next Steps

### 1. Customize Branding

- Replace logo: `static/img/logo.svg`
- Add favicon: `static/img/favicon.ico`
- Update social card: `static/img/aero-ebt-social-card.jpg`

See [IMAGES_SETUP.md](./IMAGES_SETUP.md) for detailed instructions.

### 2. Set Up Algolia Search

Follow the guide in [ALGOLIA_SETUP.md](./ALGOLIA_SETUP.md) to enable free Algolia DocSearch.

### 3. Add Content

Start editing documentation files in the `docs/` directory. The structure is:

```
docs/
├── intro.md                    # Welcome page
├── aero-ebt/                   # Aero EBT docs
├── ebt-instructor/             # EBT Instructor docs
├── ebt-scenario-builder/       # Scenario Builder docs
└── wingman/                    # Wingman docs
```

### 4. Customize Landing Page

Edit `src/pages/index.js` to customize the homepage with content from [skydynamics.aero](https://skydynamics.aero).

### 5. Configure Sidebar

Update `sidebars.js` to modify the navigation structure.

## Common Commands

```bash
# Development
yarn start              # Start dev server
yarn build              # Build for production
yarn serve              # Preview production build

# Content
yarn write-heading-ids  # Add heading IDs to markdown files
yarn clear              # Clear Docusaurus cache

# Utilities
yarn swizzle            # Copy theme components for customization
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, Docusaurus will prompt you to use a different port.

### Build Errors

Clear the cache and rebuild:
```bash
yarn clear
yarn build
```

### Dependency Issues

Remove `node_modules` and reinstall:
```bash
rm -rf node_modules
yarn install
```

## Deployment

Once ready, deploy to:
- **GitHub Pages**: Use `yarn deploy` (configure in `docusaurus.config.js`)
- **Netlify**: Connect repository, set build command: `yarn build`
- **Vercel**: Import repository, framework: Docusaurus

See the [README.md](./README.md) for detailed deployment instructions.

## Need Help?

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [SkyDynamics Website](https://skydynamics.aero)
- Check [README.md](./README.md) for more information

---

*Happy documenting! 🚀*





