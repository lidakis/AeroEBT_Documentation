# Algolia DocSearch Setup Guide

This guide will help you set up free Algolia DocSearch for your Aero EBT documentation.

## Overview

Algolia DocSearch is a free service provided by Algolia for open-source projects and technical documentation. It provides fast, relevant search results automatically indexed from your documentation.

## Eligibility

DocSearch is free for:
- Open-source projects
- Technical documentation sites
- Blogs and community sites
- Developer documentation

## Application Process

### Step 1: Prepare Your Documentation Site

Before applying, ensure:
- ✅ Your documentation site is publicly accessible
- ✅ The site has substantial content (not just a landing page)
- ✅ You have a stable URL (or use a service like GitHub Pages, Netlify, Vercel)
- ✅ The site is well-structured with clear navigation

### Step 2: Apply for DocSearch

1. Visit the [DocSearch Application Page](https://docsearch.algolia.com/apply/)
2. Fill out the application form with the following information:

   **Basic Information:**
   - Your name
   - Email address
   - Documentation site URL: `https://docs.skydynamics.aero` (or your actual URL)
   - GitHub repository (if applicable)

   **Additional Details:**
   - Site description: "Aero EBT Documentation - Comprehensive documentation for Aero EBT and its products"
   - Type: Technical Documentation
   - Expected traffic: Select appropriate range
   - Content language: English

3. Submit the application

### Step 3: Wait for Approval

- Approval typically takes 1-2 business days
- You'll receive an email with your DocSearch credentials
- If rejected, you'll receive feedback on how to improve your application

## Configuration

### Step 1: Receive Credentials

After approval, you'll receive:
- `appId`: Your Algolia application ID (e.g., `ABC123XYZ`)
- `apiKey`: Your public search API key (safe to commit)
- `indexName`: Your search index name (e.g., `aero-ebt-docs`)

### Step 2: Update Docusaurus Config

1. Open `docusaurus.config.js`
2. Find the `algolia` section in `themeConfig`
3. Replace the placeholder values:

```javascript
themeConfig: {
  // ... other config
  algolia: {
    // Replace these with your actual credentials
    appId: 'YOUR_APP_ID',              // e.g., 'ABC123XYZ'
    apiKey: 'YOUR_SEARCH_API_KEY',     // e.g., 'a1b2c3d4e5f6g7h8i9j0'
    indexName: 'YOUR_INDEX_NAME',      // e.g., 'aero-ebt-docs'
    contextualSearch: true,            // Enable contextual search
  },
},
```

### Step 3: Test Search

1. Start your development server: `yarn start`
2. Look for the search icon in the navbar
3. Type a query and verify search results appear
4. Ensure results are relevant and properly formatted

## Alternative: Self-Hosted Search

If you prefer not to use Algolia DocSearch or if you're not eligible, you can use:

### Option 1: Docusaurus Search (Local)

Use `@easyops-cn/docusaurus-search-local` for local search without external services:

```bash
yarn add @easyops-cn/docusaurus-search-local
```

Then update `docusaurus.config.js`:

```javascript
plugins: [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      language: ["en"],
    },
  ],
],
```

### Option 2: Pagefind

Use Pagefind for static search:

```bash
yarn add pagefind
```

## Troubleshooting

### Search Not Appearing

- Verify credentials are correct
- Check that the site is publicly accessible
- Ensure Algolia has crawled your site (may take a few hours after approval)

### Search Results Not Relevant

- Contact Algolia support to adjust the crawler configuration
- Check your documentation structure is clear
- Ensure proper heading hierarchy in your docs

### Application Rejected

Common reasons for rejection:
- Site not publicly accessible
- Insufficient content
- Site not primarily documentation
- Broken links or navigation

Fix issues and reapply.

## Maintenance

- Algolia automatically crawls and indexes your site periodically
- You don't need to manually update the search index
- If content changes significantly, you can request a re-crawl through Algolia support

## Support

- [Algolia DocSearch Documentation](https://docsearch.algolia.com/docs/)
- [DocSearch Support](https://github.com/algolia/docsearch-configs)
- [Docusaurus Search Documentation](https://docusaurus.io/docs/search)

---

*Once configured, search will be available automatically in your documentation site!*

