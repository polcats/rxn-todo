import { model, Model, modelAction, prop } from 'mobx-keystone';
import { computed } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

@model('todoApp/Item')
class Item extends Model({
  id: prop<string>(() => uuidv4()),
  isToModify: prop<boolean>(true),
  isDone: prop<boolean>(false),
  text: prop<string>(''),
  dueDate: prop<string>(''),
  doneDate: prop<string>(''),
}) {
  @computed
  get validText() {
    return this.text.trim().length !== 0;
  }

  @modelAction
  toggleCheck = () => {
    this.isDone = !this.isDone;
  };

  @modelAction
  toggleModify = () => {
    this.isToModify = !this.isToModify;
  };

  @modelAction
  setText = (text: string) => {
    this.text = text;
  };
}

export default Item;
