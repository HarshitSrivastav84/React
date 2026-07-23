import AppName from "./Components/AppName";
import AddItems from "./Components/AddItems";
import TodoItems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react"

function App() {

  // const initialTodoItems = [{
  //   name: 'Buy milk',
  //   dueDate: '28/06/2026',
  // },
  // {
  //   name: 'Go to college',
  //   dueDate: '28/06/2026',
  // },
  // {
  //   name: 'Like this video',
  //   dueDate: '29/06/2026',
  // },
  // ];

  let [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // itemName = 
    // itemDueDate = 

    const newItem = [...todoItems,
    { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newItem)
  }

  const handleDeleteItem = (todoItemName) => {
    const newToDoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newToDoItems);
  }

  return <center className='todo-container'>
    <AppName />
    <AddItems onNewItem={handleNewItem}></AddItems>
    {todoItems.length <= 0 && <WelcomeMessage todoItems={todoItems}></WelcomeMessage>}
    <TodoItems
      todoItems={todoItems}
      onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
}

export default App;