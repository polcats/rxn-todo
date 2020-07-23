import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, Text, View } from 'react-native';
import { appContext } from '../models/';
import { RootStackProp, DetailStackProp } from '../screens/';
import { ItemDisplay } from '../components/';
import Item from '../models/Item';

const ToDoDetail: React.FC<DetailStackProp> = ({ route, navigation }) => {
  const appStore = useContext(appContext);
  appStore.setCurrentItem(route.params.id);
  const item = appStore.items.get(route.params.id);

  return <Text>kek {item?.title}</Text>;
};

export default observer(ToDoDetail);
