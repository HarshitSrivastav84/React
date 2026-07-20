function ToDoItem({ToDoName, ToDoDate}) {
  // let ToDo = 'Buy milk';
  // let Date = '26/06/2026';

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          {ToDoName}
        </div>
        <div className="col-4">
          {ToDoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;