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
import { v4 as uuidv4 } from 'uuid';

@model('todoApp/ToDoList')
class ToDoList extends Model({
  items: prop_mapObject<Map<string, Item>>(),
}) {
  @modelAction
  add = () => {
    const id = uuidv4();
    this.items.set(id, new Item({ id: id }));
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

  registerRootStore(store);
  return store;
};

const appContext = createContext(createAppStore());
export default appContext;
