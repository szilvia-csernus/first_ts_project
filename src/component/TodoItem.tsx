import { FC, useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoItem.module.css";

const TodoItem: FC<Todo> = (props) => {
    const todosCtx = useContext(TodosContext);
  return (
    <li className={classes.item} onClick={() => todosCtx.removeTodo(props.id)}>
      {props.text}
    </li>
  );
};

export default TodoItem;
