import { useContext } from 'react';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/getFormattedDate';

export const RecentExpense = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const dataSevenDaysAgo = getDateMinusDays(today, 7);

    return expense.date > dataSevenDaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No registered expenses found!"
    />
  );
};
