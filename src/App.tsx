import React, { useState } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  //const todos = [{ id: 1, text: "Finish the course" }];

  const addTodo = (text: string) => {
    setTodos(prev => {
      return [...prev, { id: Math.random().toString(), text }];
    });
  };

  const deleteTodo = (todoId: string) => {
    setTodos(prev => {
      return prev.filter((todo: Todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
