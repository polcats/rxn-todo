import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { appContext, Item } from '../models/';
import { ItemDisplay } from '../components/';
import { HomeStackProp } from './NavTypes';

const ToDoList: React.FC<HomeStackProp> = ({ navigation }) => {
  const store = useContext(appContext);
  return (
    <FlatList
      data={Array.from(store.items)}
      renderItem={({ item }) => {
        return <ItemDisplay item={item[1]} navigation={navigation} />;
      }}
      keyExtractor={(item) => item[1].id}
    />
  );
};

export default observer(ToDoList);
