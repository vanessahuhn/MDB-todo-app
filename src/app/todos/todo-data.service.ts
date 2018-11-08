import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {



  // Placeholder for todo's
  // this is an Array of Todos items
  todos: Todo[] = [];

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  //this variable keep id of the last todo
  lastId = 0;

  constructor() { }

  // Simulate POST /todos
  // First function allow us add new Todo to the Array of Todos and increments lastId
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      this.lastId = this.todos.length;
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
    .filter(todo => todo.id !== id);
    let newId = 0;
    for (let todo of this.todos){
      todo.id = ++newId;
    }
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}):  Todo | any {
    const todo = this.getTodoById(id) ;
    if (!todo) {
      return this;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number):  Todo | any {
    return this.todos
    .filter(todo => todo.id === id)
    .pop();
  }

  // Simulate GET /todos/:category
  getTodoByCategory(id: number): Todo[] {
    return this.todos
    .filter(todo => todo.category === id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
