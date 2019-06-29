import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TodoModel } from '../../models/todo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  collectionName: string = 'tasks'
  private taskCollection: AngularFirestoreCollection<TodoModel>;
  private importantTaskCollection: AngularFirestoreCollection<TodoModel>;

  allTasks: Observable<TodoModel[]>;
  importantTasks: Observable<TodoModel[]>;
  plannedTasks: Observable<TodoModel[]>;
  todaysTasks: Observable<TodoModel[]>;

  constructor(private afs: AngularFirestore) {
    this.taskCollection = afs.collection<TodoModel>(this.collectionName);
    this.importantTaskCollection = afs.collection<TodoModel>(this.collectionName, ref => ref.where('isImportant', '==', true));
    // this.items = this.itemsCollection.valueChanges();
  }

  public getAllTask(taskType) {
    switch (taskType) {
      case 'important':
        return this.importantTaskCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as TodoModel;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        break;
      default:
        return this.afs.collection<TodoModel>(this.collectionName, ref => ref.orderBy('status', 'asc')).snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as TodoModel;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        break;
    }

  }

  public getImportantTask() {

  }

  public update(id: string, task: TodoModel) {
    delete task.id;
    const data = { ...task };
    this.afs.collection(this.collectionName).doc<TodoModel>(id).update(data);
  }

  public insert(task: TodoModel) {
    const data = { ...task };
    this.taskCollection.add(data);
  }
}
