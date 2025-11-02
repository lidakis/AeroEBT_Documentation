# Aero EBT Documentation

Comprehensive documentation for Aero EBT and its suite of products: EBT Instructor, EBT Scenario Builder, and Wingman.

## Built With

- [Docusaurus 3.9.2](https://docusaurus.io/) - Modern static website generator
- Algolia DocSearch - Free search for documentation

## Products

### 🎯 Aero EBT
The core platform for Evidence-Based Training management and analytics.

### 👨‍🏫 EBT Instructor
Comprehensive instructor tools for managing and delivering EBT training sessions.

### 📋 EBT Scenario Builder
Create and customize training scenarios tailored to your training needs.

### 🛡️ Wingman
Advanced flight safety and monitoring companion for real-time decision support.

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- yarn (package manager)

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Start the development server:
```bash
yarn start
```

The site will be available at `http://localhost:3000`

### Build

To create a production build:

```bash
yarn build
```

The static files will be generated in the `build` directory.

### Serve

To preview the production build locally:

```bash
yarn serve
```

## Documentation Structure

```
docs/
├── intro.md                    # Welcome page
├── aero-ebt/                   # Aero EBT documentation
│   ├── intro.md
│   ├── getting-started.md
│   ├── features.md
│   └── user-guide.md
├── ebt-instructor/             # EBT Instructor documentation
│   ├── intro.md
│   ├── getting-started.md
│   ├── features.md
│   └── user-guide.md
├── ebt-scenario-builder/       # EBT Scenario Builder documentation
│   ├── intro.md
│   ├── getting-started.md
│   ├── features.md
│   └── user-guide.md
└── wingman/                    # Wingman documentation
    ├── intro.md
    ├── getting-started.md
    ├── features.md
    └── user-guide.md
```

## Algolia DocSearch Setup

This documentation site is configured to use Algolia DocSearch (free tier for dev docs).

### Applying for DocSearch

1. Visit [Algolia DocSearch Application](https://docsearch.algolia.com/apply/)
2. Fill out the application form with your documentation site URL
3. Wait for approval (usually within 1-2 business days)
4. Once approved, you'll receive:
   - `appId`: Your Algolia application ID
   - `apiKey`: Your public search API key
   - `indexName`: Your index name

### Configuring DocSearch

After receiving your credentials, update `docusaurus.config.js`:

```javascript
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY',
  indexName: 'YOUR_INDEX_NAME',
  contextualSearch: true,
},
```

Replace the placeholder values with your actual credentials from Algolia.

## Customization

### Branding

- Update logo: Replace `static/img/logo.svg`
- Update favicon: Replace `static/img/favicon.ico`
- Customize colors: Edit `src/css/custom.css`

### Landing Page

- Customize homepage: Edit `src/pages/index.js`
- Update styles: Edit `src/pages/index.module.css`

### Sidebar

- Configure navigation: Edit `sidebars.js`

## Deployment

### GitHub Pages

1. Update `docusaurus.config.js` with your repository details
2. Run `yarn deploy` (requires GitHub Actions or manual deployment)

### Netlify

1. Connect your repository to Netlify
2. Set build command: `yarn build`
3. Set publish directory: `build`

### Vercel

1. Import your repository to Vercel
2. Framework preset: Docusaurus
3. Deploy automatically

## Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Algolia DocSearch Documentation](https://docsearch.algolia.com/docs/)
- [SkyDynamics Website](https://skydynamics.aero)

## License

Copyright © SkyDynamics. All rights reserved.

---

*Built with ❤️ using Docusaurus*

