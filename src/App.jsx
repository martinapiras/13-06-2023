import { todoList } from "./mocks/todos";
import ListItem from "./components/ListItem/ListItem";
import "./App.css";

function App() {
  return (
    <>
      <h1>To-do list</h1>
      <ul className="list">
        {todoList.map((todo) => (
          <ListItem data={todo} key={todo.id}></ListItem>
        ))}
      </ul>
    </>
  );
}

export default App;
