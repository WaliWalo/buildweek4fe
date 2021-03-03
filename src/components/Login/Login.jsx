import React, { Component } from "react";
// import img1 from "../../assets/images/001.jpg";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="bg-auth">
        <div className="container bg-auth">
          <div className="row">
            <div className="col-md-10 col-md-offset-2">
              <div className="col-md-6 left-side">
                <div className="slider_img">
                  <div className="this_list">
                    <li>{/* <img src={img1} alt="" /> */}</li>
                  </div>
                </div>
              </div>
              <div className="col-md-5 right-side">
                <div id="form-login">
                  <div className="login-frm">
                    {/*<div className="title-inst"></div> */}
                    <div className="title-inst2">
                      <span className="nj">_Khilogram.</span>
                    </div>
                    <div>
                      <form className="lgn-form" onSubmit="">
                        <div className="form-group _this_mrg">
                          <input
                            value="id"
                            type="text"
                            name="identifier"
                            onChange=""
                            placeholder="Username or Email"
                            className="form-control"
                            autoComplete="off"
                          />
                          <span className="error-sign"></span>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            value="password"
                            name="password"
                            onChange=""
                            placeholder="Password"
                            className="form-control"
                          />
                          <span className="error-sign"></span>
                          <Link
                            to="/accounts/password/reset"
                            className="forgot"
                          >
                            Forgot?
                          </Link>
                        </div>
                        <div className="btn-login">
                          <button type="submit" className="btn tb btn-block">
                            Sign In
                          </button>
                        </div>
                      </form>
                      <div className="omni-auth">
                        <p className="or">OR</p>
                        <div className="bti">
                          <a href="#" className="btn-omni btn-block btn">
                            Log in with Facebook
                          </a>
                        </div>
                        <div className="err">
                          {/* {invalid && (
                            <div className="alert alert-danger">{invalid}</div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sign_up_switch">
                    <p className="donthave">
                      Don't have an account?{" "}
                      <span>
                        <a onClick="">Sign up</a>
                      </span>
                    </p>
                  </div>
                </div>
                s
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
