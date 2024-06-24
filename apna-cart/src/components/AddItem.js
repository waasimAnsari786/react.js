import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pName: "",
      pPrice: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <form
          className="row my-5"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addItemFunc(this.state.pName , Number(this.state.pPrice));
          }}
        >
          <div className="mb-3 col-4">
            <label
              htmlFor="product-name"
              className="form-label"
              name="product-name"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="product-name"
              placeholder="Product Name"
              onChange={(e) => {
                this.setState({ pName: e.currentTarget.value });
              }}
              value={this.state.pName}
            />
          </div>

          <div className="mb-3 col-4">
            <label
              htmlFor="product-price"
              className="form-label"
              name="product-price"
            >
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="product-price"
              placeholder="Product Price"
              onChange={(e) => {
                this.setState({ pPrice: e.currentTarget.value });
              }}
              value={this.state.pPrice}
            />
          </div>

          <button type="submit" className="btn btn-primary col-4">
            Add
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddItem;
