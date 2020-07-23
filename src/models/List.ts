import { createContext } from 'react';
import {
  model,
  Model,
  modelAction,
  prop,
  prop_mapObject,
  registerRootStore,
} from 'mobx-keystone';
import Item from './Item';

@model('todoApp/ToDoList')
class ToDoList extends Model({
  items: prop_mapObject<Map<string, Item>>(),
}) {
  @modelAction
  add = (item: Item) => {
    this.items.set(item.id, item);
  };

  @modelAction
  delete = (id: string) => {
    this.items.delete(id);
  };
}

const createAppStore = (): ToDoList => {
  const store = new ToDoList({
    items: new Map(),
  });

  // Add dummy data
  store.add(new Item({ text: 'Create a new app to track transactions' }));
  store.add(new Item({ text: 'Monitor market prices' }));
  store.add(new Item({ text: 'Wash the dishes' }));

  registerRootStore(store);
  return store;
};

const appContext = createContext(createAppStore());
export default appContext;
