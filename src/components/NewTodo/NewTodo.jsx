import { useId } from "react";
import { useState } from "react";

const NewTodoForm = ({ setTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((todos) => [
      ...todos,
      {
        text,
        id: Date.now(),
        done: false,
      },
    ]);

    setText("");
  };

  return (
    <form className="new-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="text"
        value={text}
        onChange={handleChange}
      />
      <input type="submit" className="send" value="Créer un nouveau Todo" />
    </form>
  );
};

export default NewTodoForm;
