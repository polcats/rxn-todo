import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { appContext } from '../models';
import { RootStackProp } from '../screens/';
import { TextInput } from 'react-native-gesture-handler';
import Item from '../models/Item';

type TodoFormProps = {
  item?: Item;
  navigation: RootStackProp;
};

const ToDoForm: React.FC<TodoFormProps> = ({ item, navigation }) => {
  const appStore = useContext(appContext);
  const itemToModify = item === undefined ? new Item({}) : item;

  return (
    <>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View>
          <Text>Title</Text>
          <TextInput placeholder="To do title">{itemToModify.title}</TextInput>
        </View>

        <View>
          <Text>Description</Text>
          <TextInput placeholder="To do description">
            {itemToModify.desc}
          </TextInput>
        </View>

        <View>
          <Text>Due Date</Text>
          <TextInput placeholder="To do title"></TextInput>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
});

export default observer(ToDoForm);
