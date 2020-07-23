import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../models/index';

const ToDoList: React.FC = () => {
  return <Text>To do list...</Text>;
};

export default observer(ToDoList);
