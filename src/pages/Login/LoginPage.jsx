import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";

class LoginPage extends Component {
  state = {
    email: "",
    pw: ""
  };

  handleChange = e => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();

      // Successfully signed up - show main page
      this.props.history.push("/");
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };
  render() {
    return (
      <>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.pw}
            name="pw"
            onChange={this.handleChange}
          />
          <button className="login-btn">Log In</button>
          &nbsp;&nbsp;&nbsp;
        <Link to="/">Cancel</Link>
        </form>
      </>
    );
  }
}

export default LoginPage;
