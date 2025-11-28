# Why gh-pages Branch Isn't Updated - Explanation

## The Issue

You're using GitHub's **new Pages deployment method** (with `actions/deploy-pages@v4`), which:
- ✅ Deploys directly from workflow artifacts
- ✅ Does NOT create or update a `gh-pages` branch
- ✅ Works with "GitHub Actions" as the source in Pages settings

This is why you don't see a `gh-pages` branch being updated.

## Two Deployment Methods

### Method 1: New GitHub Pages (No gh-pages branch) - Current Setup

**Workflow**: `.github/workflows/deploy.yml`

**How it works:**
- Builds the site
- Uploads artifacts
- Deploys directly to Pages (no branch created)
- Configure Pages source as: **GitHub Actions**

**Pros:**
- Modern, recommended by GitHub
- Cleaner (no extra branch)
- Faster deployment

**Cons:**
- No `gh-pages` branch to inspect
- Can't manually edit deployed files

### Method 2: Branch-Based Deployment (Creates gh-pages branch)

**Workflow**: `.github/workflows/deploy-gh-pages-branch.yml`

**How it works:**
- Builds the site
- Pushes to `gh-pages` branch
- GitHub Pages serves from that branch
- Configure Pages source as: **Deploy from a branch** → `gh-pages` → `/ (root)`

**Pros:**
- Creates visible `gh-pages` branch
- Can inspect what's deployed
- Can manually edit if needed

**Cons:**
- Extra branch in repository
- Slightly more complex

## How to Switch to Branch-Based Deployment

If you want to see the `gh-pages` branch being updated:

### Step 1: Use the Branch-Based Workflow

1. **Disable or remove the current workflow** (optional, or keep both):
   - You can rename `.github/workflows/deploy.yml` to `deploy.yml.backup`
   - Or just use the new one

2. **The new workflow is already created**: `.github/workflows/deploy-gh-pages-branch.yml`

### Step 2: Commit and Push

```bash
git add .github/workflows/deploy-gh-pages-branch.yml
git commit -m "Add branch-based GitHub Pages deployment"
git push origin main
```

### Step 3: Configure GitHub Pages

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/settings/pages`
2. Under **Source**, change to:
   - **Deploy from a branch** (not "GitHub Actions")
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
3. Click **Save**

### Step 4: Enable Permissions

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/settings/actions`
2. Under **Workflow permissions**:
   - Select: **Read and write permissions**
3. Click **Save**

### Step 5: Trigger the Workflow

The workflow will run automatically on next push to `main`, or:
1. Go to Actions tab
2. Click "Deploy to GitHub Pages (gh-pages branch)"
3. Click "Run workflow"

## After Switching

Once the workflow runs:
- ✅ You'll see a `gh-pages` branch created/updated
- ✅ You can view it at: `https://github.com/lidakis/AeroEBT_Documentation/tree/gh-pages`
- ✅ The branch will contain your built site files
- ✅ Future pushes to `main` will automatically update `gh-pages`

## Which Method Should You Use?

**Use Branch-Based (gh-pages branch) if:**
- You want to see what's deployed
- You want to inspect the built files
- You prefer the traditional approach
- You need to manually edit deployed files

**Use New Method (no branch) if:**
- You want the modern, recommended approach
- You don't need to see the deployed files
- You prefer a cleaner repository

## Current Status Check

To see which method you're currently using:

1. Go to: `https://github.com/lidakis/AeroEBT_Documentation/settings/pages`
2. Check the **Source** setting:
   - **"GitHub Actions"** = New method (no gh-pages branch)
   - **"Deploy from a branch"** = Branch method (creates gh-pages)

## Troubleshooting

### Workflow runs but gh-pages branch not created

- Check workflow permissions (Step 4 above)
- Check workflow logs for errors
- Make sure you're using `deploy-gh-pages-branch.yml` workflow

### Changes not showing after switching

- Wait 1-2 minutes for GitHub to process
- Clear browser cache
- Verify Pages source is set correctly

