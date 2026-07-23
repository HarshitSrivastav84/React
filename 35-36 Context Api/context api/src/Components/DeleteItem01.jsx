function DeleteItem01() {
  
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          {ToDo}
        </div>
        <div class="col-4">
          {Date}
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteItem01;