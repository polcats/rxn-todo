import React, { useContext, useEffect } from 'react';
import 'mobx-react-lite/batchingForReactDom';
import { observer } from 'mobx-react-lite';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ToDoList, ToDoForm, ToDoDetail } from './src/screens/';
import { appContext } from './src/models/';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const appStore = useContext(appContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: 'To-do Items',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  appStore.createNew();
                  navigation.navigate('Form', { id: undefined });
                }}
              >
                <Text style={[styles.createButton, styles.headerButton]}>
                  Create
                </Text>
              </TouchableOpacity>
            ),
          })}
          component={ToDoList}
        />
        <Stack.Screen
          name="Form"
          options={({ route, navigation }) => ({
            title: 'To-do Item',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  console.log('TESTSTST');
                  if (appStore.isCurrentItemValid) {
                    navigation.pop();
                    return;
                  }

                  appStore.items.get(appStore.currentItem)?.toggleShowError();
                }}
              >
                <Text style={[styles.saveButton, styles.headerButton]}>
                  Save
                </Text>
              </TouchableOpacity>
            ),
          })}
          component={ToDoForm}
        />
        <Stack.Screen
          name="Detail"
          options={({ route, navigation }) => ({
            title: 'To-do Details',
            headerRight: () => (
              <TouchableOpacity
                onPress={(props) => {
                  // navigation.navigate('Form', {
                  //   id: navigation.,
                  // });
                  navigation.push('Form', { id: appStore.currentItem });
                  // navigation.
                }}
              >
                <Text style={[styles.editButton, styles.headerButton]}>
                  Edit
                </Text>
              </TouchableOpacity>
            ),
          })}
          component={ToDoDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(App);
const styles = StyleSheet.create({
  headerButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 15,
    padding: 8,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: 'skyblue',
  },
  createButton: {
    backgroundColor: 'skyblue',
  },
  saveButton: {
    backgroundColor: 'green',
  },
});
