import AppName from "./Components/AppName";
import AddItems from "./Components/AddItems";
import TodoItems from "./Components/ToDoItems";
import "./App.css";

function App() {

  const todoItems = [{
    name: 'Buy milk',
    dueDate: '28/06/2026',
  },
  {
    name: 'Go to college',
    dueDate: '28/06/2026',
  },
  {
    name: 'Like this video',
    dueDate: '29/06/2026',
  },
  {
    name: 'Like this video',
    dueDate: '29/06/2026',
  },
  ];
  
  return <center className='todo-container'>
    <AppName />
    <AddItems></AddItems>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
}

export default App;