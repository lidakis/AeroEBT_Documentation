# How to Run the GitHub Actions Workflow

## Step 1: Commit and Push the Workflow File

The workflow file is already created at `.github/workflows/deploy.yml`. You need to commit and push it:

```bash
# Make sure you're on main branch
git checkout main

# Add the workflow file
git add .github/workflows/deploy.yml

# Commit it
git commit -m "Add GitHub Actions deployment workflow"

# Push to GitHub
git push origin main
```

## Step 2: Configure GitHub Pages to Use GitHub Actions

After pushing, configure GitHub Pages:

1. Go to your repository: `https://github.com/lidakis/AeroEBT_Documentation`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch** → Change to → **GitHub Actions**
5. Click **Save**

**Important**: If you see "GitHub Actions" grayed out, you may need to:
- First push the workflow file (Step 1)
- Or wait a few minutes for GitHub to detect it

## Step 3: Enable Workflow Permissions

1. Still in **Settings**, click **Actions** → **General**
2. Scroll down to **Workflow permissions**
3. Select: **Read and write permissions**
4. Check: **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

## Step 4: The Workflow Will Run Automatically

Once configured, the workflow will run automatically:
- ✅ **On every push to `main` branch** - This is the default trigger
- ✅ **Manually** - You can also trigger it manually from the Actions tab

## How to Trigger Manually (Optional)

If you want to run it without pushing code:

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/actions`
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button (top right)
4. Select branch: `main`
5. Click **Run workflow**

## How to Check if It's Running

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/actions`
2. You'll see workflow runs listed
3. Click on a run to see:
   - Build progress
   - Deployment status
   - Any errors

## What Happens When It Runs

The workflow will:
1. ✅ Checkout your code
2. ✅ Install Node.js and dependencies
3. ✅ Build your Docusaurus site (`yarn build`)
4. ✅ Upload the build artifacts
5. ✅ Deploy to GitHub Pages

## After First Run

Once the workflow completes successfully:
- Your site will be live at your configured URL
- Future pushes to `main` will automatically deploy
- You can see deployment status in the Actions tab

## Troubleshooting

### Workflow doesn't appear in Actions tab
- Make sure you pushed the `.github/workflows/deploy.yml` file
- Check that the file is in the `main` branch

### "GitHub Actions" option not available in Pages settings
- Make sure the workflow file is committed and pushed
- Wait a few minutes for GitHub to detect it
- Try refreshing the page

### Workflow fails
- Check the Actions tab for error details
- Common issues:
  - Missing dependencies
  - Build errors
  - Permission issues (check Step 3)

### Changes still not showing
- Wait 1-2 minutes after deployment completes
- Clear browser cache
- Check the deployment URL in the workflow run



