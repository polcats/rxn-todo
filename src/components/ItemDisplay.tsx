import React, { useContext } from 'react';
import {
  Alert,
  Button,
  CheckBox,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { appContext } from '../models';
import { RootStackProp } from '../screens/';
import Item from '../models/Item';

type TodoItemProps = {
  item: Item;
  navigation: RootStackProp;
};

const ItemDisplay: React.FC<TodoItemProps> = ({ item, navigation }) => {
  const appStore = useContext(appContext);

  return (
    <View style={styles.itemView}>
      <CheckBox
        style={styles.checkbox}
        value={item.isDone}
        onValueChange={() => {
          item.toggleCheck();
        }}
      />

      <TouchableOpacity
        style={styles.itemText}
        onPress={() => {
          // navigation.navigate('Detail', { id: item.id });
        }}
      >
        <Text numberOfLines={1} style={styles.itemTitle}>
          {item.title}
        </Text>
        {!!item.desc && (
          <Text numberOfLines={1} style={styles.itemDesc}>
            {item.desc}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 5,
  },
  checkbox: {
    flex: 1,
    marginLeft: 10,
  },
  itemText: {
    flex: 9,
    flexDirection: 'column',
    padding: 5,
  },
  itemTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 22,
  },
  itemDesc: {
    flex: 1,
    color: '#555',
    fontSize: 15,
  },
});

export default observer(ItemDisplay);
