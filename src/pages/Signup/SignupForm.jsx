import React, { Component } from "react";
import style from "./signup.scss";

export default class SignupForm extends Component {
  render() {
    return (
      <form className="lgn-form" onSubmit="">
        <div className="form-group _this_mrg">
          <input
            value="username"
            onBlur=""
            onChange=""
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            autoComplete="off"
          />
          <span className="error-sign"></span>
        </div>
        <div className="form-group _this_mrg">
          <input
            value="fullname"
            onChange=""
            type="text"
            name="fullname"
            placeholder="Fullname"
            className="form-control"
            autoComplete="off"
          />
          <span className="error-sign"></span>
        </div>
        <div className="form-group _this_mrg">
          <input
            value="email"
            onBlur=""
            onChange=""
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            autoComplete="off"
          />
          <span className="error-sign"></span>
        </div>
        <div className="form-group">
          <input
            value="password"
            onChange=""
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            autoComplete="off"
          />
          <span className="error-sign"></span>
        </div>
        <div className="btn-login">
          <button disabled="" className="btn tb btn-block" type="submit">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}
