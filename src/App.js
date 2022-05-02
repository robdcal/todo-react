import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rob's Todo List</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
