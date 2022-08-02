import { FC, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

const Todos: FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <TodoItem key={item.id} id ={item.id} text={item.text}/>
        ))}
      </ul>
    );
}

export default Todos;