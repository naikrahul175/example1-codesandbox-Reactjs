import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    //  console.log(input);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => handleChange(e)} value={input} />
      <button type="button" onClick={() => setTodo([...todo, input])}>
        Add
      </button>

      {todo.length
        ? todo.map((item, index) => {
            return <div key={index}>{item}</div>;
          })
        : ""}
    </div>
  );
}
