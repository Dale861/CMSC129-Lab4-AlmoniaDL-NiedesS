# Expense Tracker - CMSC 129 Lab 4

## Live URL
*[To be added after deployment]*

## App Description
A simple expense tracking application that allows users to manage their personal finances. Users can add new expenses with descriptions, amounts, categories, and dates. The app displays a list of all expenses and shows total spending. All data is stored locally in the browser's localStorage.

## User Stories

1. **Add New Expense**
   > As a user, I want to add a new expense with description, amount, category, and date, so that I can track my spending accurately.

2. **View All Expenses**
   > As a user, I want to see a list of all my expenses sorted by date, so that I can review my spending history.

3. **Delete an Expense**
   > As a user, I want to delete an expense I no longer need, so that my records stay accurate and relevant.

## Tech Stack
- **Frontend:** React 18 with JavaScript
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** Browser localStorage
- **Testing:**
  - Unit: Jest + React Testing Library
  - Integration: Jest + React Testing Library
  - E2E: Playwright
- **CI/CD:** GitHub Actions

## Testing Strategy

### Unit Tests (3+ tests)
Testing isolated business logic functions:
- `validateExpense()` - validates expense fields (amount positive, description not empty)
- `calculateTotal()` - sums expense amounts
- `filterByCategory()` - filters expenses by category

These are pure functions with no dependencies on React, HTTP, or browser APIs.

### Integration Tests (2+ tests)
Testing React components working together:
- Creating an expense updates both the list and total
- Deleting an expense removes it from storage and UI

These tests use React Testing Library to render components and simulate user interactions.

### System/E2E Tests (3 tests - one per user story)
Complete user journeys in a real browser:
- User Story 1: Complete flow of adding an expense
- User Story 2: Viewing and verifying expense list
- User Story 3: Deleting an expense and confirming removal

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/CMSC129-Lab4-LastNameFI.git
cd CMSC129-Lab4-LastNameFI

# Install dependencies
npm install

# Run the development server
npm start

# Run unit and integration tests
npm test

# Run E2E tests
npm run test:e2e

# Run tests with coverage
npm run coverage