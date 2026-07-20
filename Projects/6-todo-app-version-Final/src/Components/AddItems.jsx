// import { useState, useRef } from "react";
import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";


function AddItems({ onNewItem }) {

  // const [todoName, setTodoName] = useState('');
  // const [todoDueDate, setDueDate] = useState('');
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  //   const handleNameChange = (event) => {
  //     //   setTodoName(event.target.value)
  //     //   noOfUpdates.current += 1;
  //     // }
  //     // const handleDateChange = (event) => {
  //     //   setDueDate(event.target.value)
  //     //   console.log(`No. of updates are ${noOfUpdates.current}`);
  //     // }
  // }

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = dueDateElement.current.value;
    // console.log(todoName, todoDueDate);
    // If user click on add btn without entering any value then it will not add any item in the list

    // Then also one delete btn appear
    if (todoName === "" || todoDueDate === "") {
      return;
    } else {
      onNewItem(todoName, todoDueDate);
      // setDueDate("");
      // setTodoName("");
      todoNameElement.current.value = '';
      dueDateElement.current.value = '';
    }
  }

  return (
    <div className="container addBtnLeft">
      <form className="row kg-row"
        onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter ToDo here"
            // value={todoName}
          // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={todoDueDate}
          // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            // onSubmit={handleAddButtonClicked}
            className="btn btn-success kg-button"
          // onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}


export default AddItems;