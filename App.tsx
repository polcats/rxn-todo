import React from 'react';
import 'mobx-react-lite/batchingForReactDom';
import { observer } from 'mobx-react-lite';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ToDoList, ToDoEdit, ToDoDetail } from './src/screens/';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Todo',
            headerRight: () => (
              <TouchableOpacity>
                <Text style={styles.createButton}>Create</Text>
              </TouchableOpacity>
            ),
          }}
          component={ToDoList}
        />
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
  createButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 15,
  },
});
