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
  store.add(
    new Item({
      title: 'Create a new app to track transactions',
      desc: 'Produce a Python app that can automatically track transactions.',
    }),
  );
  store.add(
    new Item({
      title: 'Monitor market prices',
      desc: 'Check if need market items go on sale.',
    }),
  );
  store.add(new Item({ title: 'Wash the dishes' }));

  registerRootStore(store);
  return store;
};

const appContext = createContext(createAppStore());
export default appContext;
