function DeleteItem01() {
  let ToDo = 'Buy milk';
  let Date = '26/06/2026';
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