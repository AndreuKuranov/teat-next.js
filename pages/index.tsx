import Count from "@components/Count";
import MyButton from "@components/iu/MyButton/MyButton";
import MainContainer from "@components/MainContainer";
import TodoList from "@components/TodoList";
import todo from "@store/todo";
import { ITodo } from "../types/types";
import { observer } from "mobx-react-lite";
import TodoItem from "@components/TodoItem";
import List from "@components/List";

const Index = observer (() => {
  return (
    <MainContainer description='Главная'>
      <div>
        <h1>Главная страница</h1>
      </div>

      <Count />

      <MyButton onClick={() => todo.fetchTodos()}>
        fetch todos
      </MyButton>
      <br/>
      {/* <TodoList /> */}
      <List 
        items={todo.todos}
        renderItem={(t: ITodo) => <TodoItem 
          key={t.id}
          id={t.id}
          title={t.title}
          completed={t.completed}
          onChange={() => todo.completeTodo(t.id)}
          onClick={() => todo.removeTodo(t.id)} 
        />}
      />
    </MainContainer>
  )
})

export default Index;