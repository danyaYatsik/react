import * as uuid from "uuid";

export class Todo {
    constructor(title, completed) {
        this.id = uuid();
        this.title = title;
        this.completed = completed;
    }

}