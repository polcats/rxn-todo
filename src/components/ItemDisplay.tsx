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

type ItemDisplayProps = {
  item: Item;
  navigation: RootStackProp;
};

const ItemDisplay: React.FC<ItemDisplayProps> = ({ item, navigation }) => {
  const navigate = () => {
    navigation.navigate('Detail', { id: item.id });
  };

  return (
    <View style={styles.itemView}>
      <CheckBox
        style={styles.checkbox}
        value={item.isDone}
        onValueChange={() => {
          item.toggleCheck();
        }}
      />

      <TouchableOpacity style={styles.itemText} onPress={navigate}>
        <Text numberOfLines={1} style={styles.itemTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.itemDesc}>
          {new Date(item.dueDate).toDateString()}
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
    borderRadius: 5,
    marginBottom: 20,
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
    fontSize: 20,
  },
  itemDesc: {
    flex: 1,
    color: '#555',
    fontSize: 15,
  },
});

export default observer(ItemDisplay);
