import { validateExpense, calculateTotal, filterByCategory } from '../../utils/expenseValidation';

describe('Expense Validation Unit Tests', () => {
  
  test('TEST 1: validateExpense returns error for empty description', () => {
    const invalidExpense = {
      description: '',
      amount: 100,
      category: 'Food',
      date: '2024-01-01'
    };
    
    const result = validateExpense(invalidExpense);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Description is required');
  });
  
  test('TEST 2: validateExpense returns error for negative amount', () => {
    const invalidExpense = {
      description: 'Lunch',
      amount: -50,
      category: 'Food',
      date: '2024-01-01'
    };
    
    const result = validateExpense(invalidExpense);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Amount must be greater than 0');
  });
  
  test('TEST 3: validateExpense passes for valid expense', () => {
    const validExpense = {
      description: 'Lunch',
      amount: 15.50,
      category: 'Food',
      date: '2024-01-01'
    };
    
    const result = validateExpense(validExpense);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
  
  test('TEST 4: calculateTotal sums all expense amounts correctly', () => {
    const expenses = [
      { id: '1', description: 'Lunch', amount: 15.50, category: 'Food', date: '2024-01-01' },
      { id: '2', description: 'Coffee', amount: 4.50, category: 'Beverage', date: '2024-01-01' },
      { id: '3', description: 'Dinner', amount: 25.00, category: 'Food', date: '2024-01-01' }
    ];
    
    const total = calculateTotal(expenses);
    expect(total).toBe(45.00);
  });
  
  test('TEST 5: filterByCategory returns only expenses from specified category', () => {
    const expenses = [
      { id: '1', description: 'Lunch', amount: 15.50, category: 'Food', date: '2024-01-01' },
      { id: '2', description: 'Coffee', amount: 4.50, category: 'Beverage', date: '2024-01-01' },
      { id: '3', description: 'Dinner', amount: 25.00, category: 'Food', date: '2024-01-01' }
    ];
    
    const foodExpenses = filterByCategory(expenses, 'Food');
    expect(foodExpenses).toHaveLength(2);
    expect(foodExpenses[0].category).toBe('Food');
    expect(foodExpenses[1].category).toBe('Food');
  });
});