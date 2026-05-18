// GREEN implementation - minimum code to pass tests
export const validateExpense = (expense) => {
  const errors = [];
  
  // Check description
  if (!expense.description || expense.description.trim() === '') {
    errors.push('Description is required');
  }
  
  // Check amount
  if (typeof expense.amount !== 'number' || expense.amount <= 0) {
    errors.push('Amount must be greater than 0');
  }
  
  // Check category
  if (!expense.category || expense.category.trim() === '') {
    errors.push('Category is required');
  }
  
  // Check date
  if (!expense.date) {
    errors.push('Date is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
};

export const calculateTotal = (expenses) => {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total = total + expenses[i].amount;
  }
  return total;
};

export const filterByCategory = (expenses, category) => {
  const filtered = [];
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].category === category) {
      filtered.push(expenses[i]);
    }
  }
  return filtered;
};