import { model, Model, modelAction, prop } from 'mobx-keystone';
import { computed } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

@model('todoApp/Item')
class Item extends Model({
  id: prop<string>(() => uuidv4()),
  isToModify: prop<boolean>(true),
  isDone: prop<boolean>(false),
  title: prop<string>(''),
  desc: prop<string>(''),
  dueDate: prop<string>(''),
  doneDate: prop<string>(''),
}) {
  @modelAction
  toggleCheck = () => {
    this.isDone = !this.isDone;
  };

  @modelAction
  toggleModify = () => {
    this.isToModify = !this.isToModify;
  };

  @modelAction
  setTitle = (title: string) => {
    this.title = title;
  };

  @modelAction
  setDesc = (desc: string) => {
    this.desc = desc;
  };
}

export default Item;
