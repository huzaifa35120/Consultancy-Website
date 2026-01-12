# How to Push to GitHub

## Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Name your repository (e.g., `target-home-solutions`)
3. **Don't** check "Initialize with README"
4. Click "Create repository"

## Step 2: Run these commands in your terminal

```bash
# Navigate to your project directory
cd '/Users/huzaifafaizan/Documents/REACT WEBSITES/Consulting Website/target-home-solutions'

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Target Home Solutions website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Quick Copy-Paste Version

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name:

```bash
cd '/Users/huzaifafaizan/Documents/REACT WEBSITES/Consulting Website/target-home-solutions'
git init
git add .
git commit -m "Initial commit: Target Home Solutions website"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## If you need to authenticate:
- GitHub may ask for your username and password
- For password, use a **Personal Access Token** (not your GitHub password)
- Create one at: https://github.com/settings/tokens
- Select scopes: `repo` (full control of private repositories)

## Future updates:
After making changes, use:
```bash
git add .
git commit -m "Your commit message"
git push
```
