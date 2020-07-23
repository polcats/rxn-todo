import React from 'react';
import 'mobx-react-lite/batchingForReactDom';
import { observer } from 'mobx-react-lite';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ToDoList, ToDoEdit, ToDoDetail } from './src/screens/';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="To-do List" component={ToDoList} />
        <Stack.Screen name="Details" component={ToDoEdit} />
        <Stack.Screen name="Edit" component={ToDoDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
