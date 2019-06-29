import { TodoModel } from './todo.model';


export class Todo implements TodoModel {

    title: string;
    status?: boolean;
    createdDate?: Date;

    constructor(obj: any) {
        this.title = obj.title;
        this.status = obj.status? obj.status: false;
        this.createdDate = new Date();
    }
}
