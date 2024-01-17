// components/CategoryForm.tsx
import React, { Component, ChangeEvent, FormEvent } from "react";

interface CategoryFormProps {
  labelvalue?: string;
  message?: string;
  closeCategory: () => void;
  onSubmit: (data: any) => void; // Adjust the type based on your form data structure
  categories: any[]; // Adjust the type based on your actual data structure
}

interface CategoryFormState {
  category: {
    displayName: string;
    sequence: string;
    title: string;
    show: boolean;
    _id?: string;
  };
  msg: string;
}

const labelStyle = {
  fontSize: "small",
};

export default class CategoryForm extends Component<CategoryFormProps, CategoryFormState> {
  constructor(props: CategoryFormProps) {
    super(props);
    this.state = {
      category: {
        displayName: "",
        sequence: "",
        title: "",
        show: false,
      },
      msg: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps: CategoryFormProps) {
    this.setState({ category: nextProps.category });
  }

  handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      category: {
        ...this.state.category,
        [name]: value,
      },
    });
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;

    let title = this.state.category.title;
    let sequence = this.state.category.sequence;

    if (name === "sequence") {
      sequence = value;
    }

    if (name === "displayName") {
      if (title === "todo" || title === "inprogress" || title === "completed") {
        title = title;
      } else {
        title = value.toLowerCase().split(" ").join("");
      }
    }

    this.setState({
      category: {
        ...this.state.category,
        [name]: value,
        title: title,
        sequence: sequence,
      },
      msg: "",
    });
  }

  onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.category);
    // You may want to handle the response and update the state accordingly
  }

  render() {
    const { displayName, sequence, show } = this.state.category;

    return (
      <div style={{ marginTop: "10px" }}>
        <span onClick={this.props.closeCategory} className="float-right mr-3">
          <i className="fas fa-times close"></i>
        </span>
        <h4 className="sub-title ml-3"> Add Category</h4>
        <hr />

        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label style={labelStyle}>Category</label>
                  <span style={{ color: "red" }}>*</span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=" "
                    id="txtDisplayName"
                    name="displayName"
                    onChange={this.handleInputChange}
                    value={displayName}
                    autoComplete="off"
                  />
                  {this.state.msg ? <span>{this.state.msg}</span> : ""}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label style={labelStyle}>Sequence</label>
                  <span style={{ color: "red" }}>*</span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=" "
                    id="txtSequence"
                    name="sequence"
                    onChange={this.handleInputChange}
                    value={sequence}
                    autoComplete="off"
                  />
                  {this.state.msg ? <span>{this.state.msg}</span> : ""}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label style={labelStyle}>Show</label>
                  <span style={{ color: "red" }}>*</span> &nbsp;
                  <input
                    type="checkbox"
                    placeholder=" "
                    id="txtShow"
                    onChange={this.handleCheckbox}
                    name="show"
                    checked={show}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
