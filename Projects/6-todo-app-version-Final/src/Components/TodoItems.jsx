import ToDoItem from "./ToDoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
    return (
        <div className='items-container'>
            {todoItems.map((item) => (
                <ToDoItem
                    key={item.name}
                    ToDoDate={item.dueDate}
                    ToDoName={item.name}
                    onDeleteClick={onDeleteClick}>
                </ToDoItem>))}

            {/* <ToDoItem ToDoDate='28/06/2026' ToDoName='Go to college'></ToDoItem> */}
            {/* <DeleteItem01 /> */}
        </div>
    );
};

export default TodoItems;