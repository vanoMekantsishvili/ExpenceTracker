import { FlatList } from 'react-native';
import { ExpenseItem } from './ExpensesItem';

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

export const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};
