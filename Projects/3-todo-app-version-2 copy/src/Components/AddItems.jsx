function AddItems() {
  return (
    <div className="container addBtnLeft">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItems;