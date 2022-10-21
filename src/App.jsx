import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import NewTodoForm from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    setTodos(JSON.parse(savedTodos) ?? []);
    setLoading(true);
  }, []);

  useEffect(() => {
    if (loading) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, loading]);

  return (
    <>
      <Header />
      <div className="container">
        <TodoList
          title="Todo"
          todos={todos.filter((todo) => !todo.done)}
          setTodos={setTodos}
        />
        <NewTodoForm setTodos={setTodos} />
        <TodoList
          title="Done"
          todos={todos.filter((todo) => todo.done)}
          setTodos={setTodos}
          done
        />
      </div>
    </>
  );
};

export default App;
