import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { appContext, Item } from '../models/index';

const ToDoList: React.FC = () => {
  const store = useContext(appContext);
  return (
    <FlatList
      data={Array.from(store.items)}
      renderItem={({ item }) => {
        return <Text>{item[1].text}</Text>;
      }}
      keyExtractor={(item) => item[1].id}
    />
  );
};

export default observer(ToDoList);
