import {observable, action, decorate} from "mobx";

class TodoModel {
    store;
    id;
    title;
    completed;
    constructor(store,id,title,completed){
        this.store = store;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    toggle(){
        this.completed = !this.completed
    }
}

decorate(TodoModel,{
   title:observable,
   completed:observable,
   toggle:action
});

export default TodoModel;