import { makeAutoObservable } from 'mobx';
import { ITodo } from '../types/types';
import axios from 'axios';

class Todo {
  todos: ITodo[] = [
    {id: 105324, title: "task 1", completed: false},
    {id: 234578, title: "task 2", completed: false},
    {id: 334532, title: "task 3", completed: false},
  ];

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }

  async fetchTodos() {
    const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos`, {
      params: {
        _limit: 10,
        _page: 1,
      },
    })
    this.todos = [...this.todos, ...response.data]

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.todos = [...this.todos, ...json]
    //   })
  }
}

export default new Todo();