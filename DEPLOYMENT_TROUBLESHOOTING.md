# Deployment Troubleshooting Guide

## Issue: Changes pushed to main but not showing on website

If you've pushed changes to `main` and the pipeline runs, but changes don't appear on the live site, check these:

### 1. Check GitHub Actions Workflow Status

1. Go to your repository: `https://github.com/lidakis/AeroEBT_Documentation`
2. Click on the **Actions** tab
3. Check if the latest workflow run:
   - ✅ Completed successfully (green checkmark)
   - ❌ Failed (red X) - Click to see error details
   - 🟡 In progress (yellow circle)

**If it failed:**
- Click on the failed workflow
- Check the error logs
- Common issues:
  - Build errors (check the "Build website" step)
  - Permission errors (check repository settings)
  - Node version issues

### 2. Verify GitHub Pages Configuration

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/settings/pages`
2. Check:
   - **Source**: Should be set to **GitHub Actions** (if using workflow) or **Deploy from a branch** → `gh-pages` → `/ (root)`
   - **Custom domain**: If using `aeroebtdocs.skydynamics.aero`, make sure it's configured here

### 3. Check gh-pages Branch

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/tree/gh-pages`
2. Verify:
   - The branch exists
   - It has recent commits (should match your latest push)
   - It contains the `build/` directory with HTML files

**If gh-pages branch is missing or outdated:**
- The workflow might not be pushing correctly
- Check workflow logs for push errors

### 4. Clear Browser Cache

Sometimes changes are deployed but cached:
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely
- Try incognito/private browsing mode

### 5. Check Workflow Permissions

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/settings/actions`
2. Under **Workflow permissions**:
   - Select: **Read and write permissions**
   - Check: **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

### 6. Verify Docusaurus Configuration

Check `docusaurus.config.js`:

```javascript
// For custom domain (your current setup):
url: 'https://aeroebtdocs.skydynamics.aero',
baseUrl: '/',

// Make sure these match your actual domain
organizationName: 'lidakis',
projectName: 'AeroEBT_Documentation',
```

### 7. Check DNS/Custom Domain

If using custom domain `aeroebtdocs.skydynamics.aero`:
1. Verify DNS is pointing to GitHub Pages
2. Check if the CNAME file exists in `static/CNAME` with your domain
3. GitHub Pages settings should show the custom domain

### 8. Manual Deployment Test

Try deploying manually to verify:

```bash
# Build locally
yarn build

# Deploy manually
yarn deploy
```

This will push directly to `gh-pages` branch and bypass the workflow.

### 9. Check Workflow Logs for Specific Errors

Common workflow errors:

**Error: "Permission denied"**
- Solution: Update workflow permissions (see step 5)

**Error: "Build failed"**
- Check Node version compatibility
- Check for missing dependencies
- Review build logs for specific errors

**Error: "gh-pages branch not found"**
- The workflow might need to create the branch first
- Or use the new GitHub Pages deployment actions (see workflow file)

**Error: "No such file or directory: build"**
- Build step failed
- Check if `yarn build` completes successfully

### 10. Alternative: Use New GitHub Pages Deployment

The new workflow I created uses GitHub's official Pages deployment actions. This is more reliable than manually pushing to `gh-pages`.

**To use it:**
1. Commit and push the new workflow file: `.github/workflows/deploy.yml`
2. Go to repository Settings → Pages
3. Change Source to: **GitHub Actions**
4. The workflow will automatically deploy on next push to `main`

## Quick Checklist

- [ ] GitHub Actions workflow completed successfully
- [ ] GitHub Pages source is configured correctly
- [ ] `gh-pages` branch exists and has recent commits
- [ ] Workflow has write permissions
- [ ] Browser cache cleared
- [ ] Custom domain DNS configured (if applicable)
- [ ] Docusaurus config matches your setup

## Still Not Working?

1. Check the exact error in GitHub Actions logs
2. Verify the workflow file syntax is correct
3. Try manual deployment: `yarn deploy`
4. Check if there are multiple workflows conflicting
5. Verify you're looking at the correct URL



