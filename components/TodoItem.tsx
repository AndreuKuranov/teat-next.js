import styles from '@components/TodoItem.module.scss';
import MyButton from './iu/MyButton/MyButton';
import { FC } from 'react';
import { ITodo } from '../types/types';

export interface TodoItemProps extends ITodo {
  onChange: () => void;
  onClick: () => void;
}

const TodoItem: FC<TodoItemProps> = ({title, completed, onChange, onClick}) => {
  return (
    <div className={styles['todo-item']}>
      <input type='checkbox' checked={completed} onChange={onChange}/>
      <div>{title}</div>
      <MyButton onClick={onClick}>
        x
      </MyButton>
    </div>
  )
}

export default TodoItem;