import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Button,
} from 'react-native';
import { appContext } from '../models';
import { RootStackProp } from '../screens/';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import Item from '../models/Item';

type TodoFormProps = {
  item?: Item;
  navigation: RootStackProp;
};

const ToDoForm: React.FC<TodoFormProps> = ({ item, navigation }) => {
  const appStore = useContext(appContext);

  const itemToModify = item === undefined ? new Item({}) : item;

  const [date, setDate] = useState(
    item === undefined ? new Date() : new Date(itemToModify.dueDate),
  );
  const [showDatePicker, setVisibility] = useState(false);

  const showPicker = () => {
    setVisibility(true);
  };

  const onChange = (event: any, newDate: any) => {
    const selectedDate = newDate || date;
    setVisibility(false);
    setDate(selectedDate);
  };

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

        <TouchableOpacity onPress={showPicker}>
          <Text>Due Date</Text>
          <Text>{`${date}`}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
});

export default observer(ToDoForm);
