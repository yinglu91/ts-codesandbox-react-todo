import React, { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
