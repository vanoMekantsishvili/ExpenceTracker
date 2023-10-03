import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { AllExpenses } from './screens/AllExpenses';
import { ManageExpense } from './screens/ManageExpense';
import { RecentExpense } from './screens/RecentExpense';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
  return (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpense}/>
    <BottomTabs.Screen name='AllExpenses' component={AllExpenses}/>
  </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview}/>
          <Stack.Screen name='ManageExpense' component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
