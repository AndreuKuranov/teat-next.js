import { observer } from "mobx-react-lite";
import styles from '@components/TodoList.module.scss';
import todo from "@store/todo";
import TodoItem from "@components/TodoItem";

const TodoList = observer (() => {
  return (
    <div className={styles['todo-list']}>
      {todo.todos.map(t =>
        <TodoItem
          key={t.id}
          id={t.id}
          title={t.title}
          completed={t.completed}
          onChange={() => todo.completeTodo(t.id)}
          onClick={() => todo.removeTodo(t.id)}
        />
      )}
    </div>
  )
})

export default TodoList;