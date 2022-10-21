import Todo from "./Todo/Todo";

const TodoList = ({ title, todos, setTodos, done }) => {
  const placeholder = done ? "Vous n'avez pas encore de todos terminés" : "Ajoutez des todos ! ⬇️";

  return (
    <div className="todo-list">
      <h2>{title}</h2>
      {todos.length > 0 ? (
      <ul className="todos">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} setTodos={setTodos} />
        ))}
      </ul>

      ) : (
        <p className="placeholder">{placeholder}</p>
      )}
    </div>
  );
};

export default TodoList;
