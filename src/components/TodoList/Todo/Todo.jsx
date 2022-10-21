import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";

const Todo = ({ text, id, done, setTodos }) => {
  const findId = (arr) => arr.findIndex((el) => el.id === id);

  const handleChange = (e) => {
    setTodos((todos) => {
      const todoId = findId(todos);

      return [
        ...todos.slice(0, todoId),
        { text: e.target.value, id, done },
        ...todos.slice(todoId + 1),
      ];
    })
  }

  const handleDone = () => {
    setTodos((todos) => {
      const todoId = findId(todos);

      return [
        ...todos.slice(0, todoId),
        { text, id, done: !done },
        ...todos.slice(todoId + 1),
      ];
    });
  };

  const handleDelete = () => {
    setTodos((todos) => {
      const todoId = findId(todos);

      return [...todos.slice(0, todoId), ...todos.slice(todoId + 1)];
    });
  };

  return (
    <li className={cn("todo", { done: done })}>
      <form  className="content">
        <input type="text" value={text} onChange={handleChange} />
      </form>
      <div className="actions">
        <button
          className="check-icon"
          onClick={handleDone}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="delete-icon" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Todo;
