import AppName from "./Components/AppName";
import AddItems from "./Components/AddItems";
import DeleteItem01 from "./Components/DeleteItem01";
import DeleteItem02 from "./Components/DeleteItem02";
import "./App.css";

function App() {
  return <center className='todo-container'>
    <AppName />
    <AddItems></AddItems>
    <div className='items-container'>
    <DeleteItem01 />
    <DeleteItem02 />
    </div>
  </center>
}

export default App;