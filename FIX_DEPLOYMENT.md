# Fix: Changes Not Showing on Live Site

## The Problem

Your `gh-pages` branch is outdated. The `pages-build-deployment` workflow builds from `main` (which has your changes), but if GitHub Pages is configured to serve from the `gh-pages` branch, it's showing old content.

## Solution: Update gh-pages Branch

### Option 1: Manual Deploy (Quickest)

Run this command to build and push to gh-pages:

```bash
yarn deploy
```

This will:
1. Build your site
2. Push the built files to the `gh-pages` branch
3. Update the live site

### Option 2: Check GitHub Pages Configuration

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/settings/pages`
2. Check the **Source** setting:
   - If it says **"Deploy from a branch"** → `gh-pages` → This needs to be updated (use Option 1)
   - If it says **"GitHub Actions"** → The workflow should deploy automatically

### Option 3: Switch to GitHub Actions Deployment

If you want automatic deployments without managing gh-pages branch:

1. Use the workflow: `.github/workflows/deploy.yml` (already updated to Node 20)
2. Change Pages source to: **GitHub Actions**
3. The workflow will deploy automatically on every push

## Why This Happened

- Your changes are in `main` branch ✅
- The `gh-pages` branch has old content ❌
- GitHub Pages serves from `gh-pages`, so it shows old content
- The `pages-build-deployment` workflow builds from `main`, but doesn't update `gh-pages` automatically

## After Fixing

Once `gh-pages` is updated:
- Your changes will appear on the live site
- Future deployments will keep it in sync

