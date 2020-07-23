import React, { useContext, useState, SyntheticEvent } from 'react';
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
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import Item from '../models/Item';

type TodoFormProps = {
  key?: string;
  invalidTitle: boolean;
  invalidDate: boolean;
  navigation: RootStackProp;
};

const ToDoForm: React.FC<TodoFormProps> = ({
  key,
  invalidTitle,
  invalidDate,
  navigation,
}) => {
  const appStore = useContext(appContext);
  const item = appStore.items.get(appStore.currentItem);
  const date = !item?.dueDate ? new Date() : new Date(item.dueDate);
  const [showDatePicker, setVisibility] = useState(false);

  const showPicker = () => {
    setVisibility(true);
  };

  const onChange = (
    event: SyntheticEvent<{ timestamp: number }>,
    newDate?: Date,
  ) => {
    const selectedDate = newDate || date;
    setVisibility(false);
    item?.setDueDate(selectedDate.toDateString());
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Title</Text>
          {item?.showError && !item.validLabel && (
            <Text style={styles.inputError}>Invalid title</Text>
          )}
          <TextInput
            style={styles.inputText}
            placeholder="To do title"
            value={item?.title}
            onChangeText={(text) => item?.setTitle(text)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput style={styles.inputText} placeholder="To do description">
            {item?.desc}
          </TextInput>
        </View>

        <TouchableOpacity onPress={showPicker} style={styles.inputView}>
          {item?.showError && !item.validDate && (
            <Text style={styles.inputError}>Invalid due date</Text>
          )}
          <Text style={styles.inputLabel}>Due Date</Text>
          <Text style={styles.inputText}>{`${date}`}</Text>
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
    flexDirection: 'column',
    alignContent: 'flex-start',
    padding: 10,
    backgroundColor: '#eee',
  },
  inputView: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  inputLabel: {
    fontSize: 20,
  },
  inputText: {
    fontSize: 15,
    color: '#555',
  },
  inputError: {
    color: 'red',
  },
});

export default observer(ToDoForm);
