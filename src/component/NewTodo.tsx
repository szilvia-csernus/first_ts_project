import { FC, FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = inputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        } 

        todosCtx.addTodo(enteredText)

    }
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={inputRef}/>
        <button>Add Todo</button>
      </form>
    );
    
}

export default NewTodo