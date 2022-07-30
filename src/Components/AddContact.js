import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All field are fillable");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });

    // this.props.history.push("/");
    // console.log(this.props.history);
  };

  // reDirect = () => {
  //   return <Link to={"/"}></Link>;
  // };
  render() {
    return (
      <div className="container my-4 p-5 bg-info w-50 rounded">
        <Form onSubmit={this.add}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={this.state.name}
              type="text"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={this.state.email}
              type="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
