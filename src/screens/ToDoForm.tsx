import React, { useContext, useState, useEffect, SyntheticEvent } from 'react';
import { observer } from 'mobx-react-lite';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { appContext } from '../models';
import { FormStackProp } from '../screens/';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import Item from '../models/Item';

const ToDoForm: React.FC<FormStackProp> = ({ navigation }) => {
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

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (!appStore.isCurrentItemValid) {
          appStore.delete(appStore.currentItem);
          appStore.setCurrentItem('');
        }
      };
    }, []),
  );

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
            onChangeText={(text) => {
              item?.setTitle(text);
            }}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={styles.inputText}
            placeholder="To do description"
            value={item?.desc}
            onChangeText={(text) => {
              item?.setDesc(text);
            }}
          />
        </View>

        <TouchableOpacity onPress={showPicker} style={styles.inputView}>
          {item?.showError && !item.validDate && (
            <Text style={styles.inputError}>Invalid due date</Text>
          )}
          <Text style={styles.inputLabel}>Due Date</Text>
          <Text style={styles.inputText}>{`${new Date(
            date,
          ).toDateString()}`}</Text>
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
