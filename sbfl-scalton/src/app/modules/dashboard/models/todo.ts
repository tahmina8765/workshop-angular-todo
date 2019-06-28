import { TodoModel } from './todo.model';


export class Todo implements TodoModel {
    title: string;
    description?: string;
    status?: boolean;

    constructor(title: string) {
        this.title = title;
    }
}
