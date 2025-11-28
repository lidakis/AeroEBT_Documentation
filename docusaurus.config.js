// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion.

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aero EBT Documentation',
  tagline: 'Comprehensive documentation for Aero EBT and its products',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aeroebtdocs.skydynamics.aero',
  // Set the /<baseUrl>/ pathname under which your site is served.
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'lidakis',
  projectName: 'AeroEBT_Documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Removed editUrl to hide the "Edit this page" GitHub links.
          // Versioning configuration
          lastVersion: '0.21.1',
          versions: {
            '0.21.1': {
              label: '0.21.1',
            },
            current: {
              label: 'Next',
              path: 'next',
            },
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: 'img/aero-ebt-social-card.jpg',
      navbar: {
        title: 'Aero EBT',
        logo: {
          alt: 'SkyDynamics Logo',
          src: 'img/skydynamics-logo-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
            className: 'navbar-item--with-icon navbar-item--docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            className: 'navbar-item--with-icon navbar-item--versions',
            dropdownLabel: 'Versions',
          },
          {
            href: 'https://skydynamics.aero',
            label: 'SkyDynamics',
            position: 'right',
            className: 'navbar-item--with-icon navbar-item--skydynamics',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Aero EBT',
                to: '/docs/aero-ebt/intro',
              },
              {
                label: 'EBT Instructor',
                to: '/docs/ebt-instructor/intro',
              },
              {
                label: 'EBT Scenario Builder',
                to: '/docs/ebt-scenario-builder/intro',
              },
              {
                label: 'Wingman',
                to: '/docs/wingman/intro',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'SkyDynamics',
                href: 'https://skydynamics.aero',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Use',
                to: '/docs/terms-of-use',
              },
              {
                label: 'Disclaimer',
                to: '/docs/disclaimer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SkyDynamics.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // Algolia DocSearch configuration
      // TODO: Uncomment and add your credentials after applying for DocSearch
      // See ALGOLIA_SETUP.md for instructions
      // After applying for DocSearch at https://docsearch.algolia.com/apply/, you'll receive these credentials
      /*
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the search should be used
        // externalUrlRegex: 'external\\.com|domain\\.com',
      },
      */
    }),
};

module.exports = config;

