import { useState } from 'react';
import './css/TodoInput.css';

let nextId = 0;

export default function TodoInput() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setList([...list, { id: nextId++, name: item, done: false }]);
        }}
      >
        <label>
          <h1>Enter Item here</h1>
          <br />
          <input
            className="textInput"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <input
          type="submit"
          className="submit"
        />
      </form>
      <ul>
        {list.map((lists) => (
          <li key={lists.id}>
            {lists.name}
            <input
              className="checkbox"
              type="checkbox"
              onClick={() => setList(list.filter((l) => l.id !== lists.id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
