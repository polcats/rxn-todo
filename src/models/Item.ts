import { model, Model, modelAction, prop } from 'mobx-keystone';
import { computed, observable } from 'mobx';
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
  @observable
  showError = false;

  @modelAction
  toggleShowError = () => {
    this.showError = !this.showError;
  };

  @computed
  get validLabel() {
    return this.title.trim().length !== 0;
  }

  @computed
  get validDate() {
    return this.dueDate === ''
      ? false
      : new Date(this.dueDate) >= new Date(new Date().toDateString());
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
  setTitle = (title: string) => {
    this.title = title;
  };

  @modelAction
  setDesc = (desc: string) => {
    this.desc = desc;
  };

  @modelAction
  setDueDate = (date: string) => {
    this.dueDate = date;
  };
}

export default Item;
