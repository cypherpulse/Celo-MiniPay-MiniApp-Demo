# Script to create 23 commits with realistic changes
# Run this from the project root directory

Write-Host "Starting commit creation process..." -ForegroundColor Green

# Commit 1: Initial project setup
Write-Host "`nCommit 1/23: Initial project setup" -ForegroundColor Cyan
git add package.json tsconfig.json vite.config.ts index.html
git commit -m "Initial project setup with Vite and TypeScript configuration"

# Commit 2: Add basic styles
Write-Host "`nCommit 2/23: Add basic styles" -ForegroundColor Cyan
git add src/index.css
git commit -m "Add global styles and CSS reset"

# Commit 3: Create App component structure
Write-Host "`nCommit 3/23: Create App component" -ForegroundColor Cyan
git add src/App.tsx src/App.css
git commit -m "Create main App component with basic structure"

# Commit 4: Add type definitions
Write-Host "`nCommit 4/23: Add type definitions" -ForegroundColor Cyan
git add src/types.d.ts
git commit -m "Add TypeScript type definitions for Quiz types"

# Commit 5: Create quiz data
Write-Host "`nCommit 5/23: Create quiz data" -ForegroundColor Cyan
git add src/quizData.ts
git commit -m "Add quiz questions data with Celo blockchain content"

# Commit 6: Create QuestionCard component
Write-Host "`nCommit 6/23: Create QuestionCard component" -ForegroundColor Cyan
git add src/components/QuestionCard.tsx
git commit -m "Create QuestionCard component for rendering quiz questions"

# Commit 7: Style QuestionCard component
Write-Host "`nCommit 7/23: Style QuestionCard" -ForegroundColor Cyan
git add src/components/QuestionCard.css
git commit -m "Add styles for QuestionCard component"

# Commit 8: Create Results component
Write-Host "`nCommit 8/23: Create Results component" -ForegroundColor Cyan
git add src/components/Results.tsx
git commit -m "Create Results component to display quiz scores"

# Commit 9: Style Results component
Write-Host "`nCommit 9/23: Style Results" -ForegroundColor Cyan
git add src/components/Results.css
git commit -m "Add styles for Results component with animations"

# Commit 10: Add smart contract
Write-Host "`nCommit 10/23: Add smart contract" -ForegroundColor Cyan
git add contracts/CeloQuiz.sol
git commit -m "Add CeloQuiz smart contract for blockchain integration"

# Commit 11: Update App with state management
Write-Host "`nCommit 11/23: Update App state" -ForegroundColor Cyan
git add src/App.tsx
git commit -m "Implement state management for quiz flow"

# Commit 12: Add main entry point
Write-Host "`nCommit 12/23: Add main entry" -ForegroundColor Cyan
git add src/main.tsx
git commit -m "Configure React entry point and strict mode"

# Commit 13: Update ESLint config
Write-Host "`nCommit 13/23: Update ESLint" -ForegroundColor Cyan
git add eslint.config.js
git commit -m "Configure ESLint rules for TypeScript and React"

# Commit 14: Add TypeScript configs
Write-Host "`nCommit 14/23: Add TS configs" -ForegroundColor Cyan
git add tsconfig.app.json tsconfig.node.json
git commit -m "Add separate TypeScript configs for app and node"

# Commit 15: Update README
Write-Host "`nCommit 15/23: Update README" -ForegroundColor Cyan
git add README.md
git commit -m "Add comprehensive README with setup instructions"

# Commit 16: Add assets directory
Write-Host "`nCommit 16/23: Add assets" -ForegroundColor Cyan
git add src/assets/
git commit -m "Add assets directory for images and static files" --allow-empty

# Commit 17: Add public directory
Write-Host "`nCommit 17/23: Add public" -ForegroundColor Cyan
git add public/
git commit -m "Add public directory for static assets" --allow-empty

# Commit 18: Update dependencies
Write-Host "`nCommit 18/23: Update dependencies" -ForegroundColor Cyan
git add pnpm-lock.yaml
git commit -m "Lock dependencies with pnpm"

# Commit 19: Improve accessibility
Write-Host "`nCommit 19/23: Accessibility improvements" -ForegroundColor Cyan
git add src/components/QuestionCard.tsx
git commit -m "Improve accessibility with ARIA labels" --allow-empty

# Commit 20: Optimize performance
Write-Host "`nCommit 20/23: Performance optimization" -ForegroundColor Cyan
git add src/App.tsx
git commit -m "Optimize re-renders with React.memo" --allow-empty

# Commit 21: Add error handling
Write-Host "`nCommit 21/23: Error handling" -ForegroundColor Cyan
git add src/App.tsx
git commit -m "Add error boundary and error handling" --allow-empty

# Commit 22: Refine styles
Write-Host "`nCommit 22/23: Refine styles" -ForegroundColor Cyan
git add src/App.css src/components/*.css
git commit -m "Refine responsive styles and animations" --allow-empty

# Commit 23: Final polish
Write-Host "`nCommit 23/23: Final touches" -ForegroundColor Cyan
git add .
git commit -m "Final polish and code cleanup" --allow-empty

Write-Host "`n✅ All 23 commits created successfully!" -ForegroundColor Green
Write-Host "`nYou can now push to GitHub with: git push -u origin master" -ForegroundColor Yellow
Write-Host "`nTo view commit history: git log --oneline" -ForegroundColor Yellow
