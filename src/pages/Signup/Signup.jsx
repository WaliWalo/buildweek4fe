import React, { Component } from "react";
import SignupForm from "./SignupForm";
import img1 from "../../assets/images/001.jpg";
import img2 from "../../assets/images/002.jpg";
import img3 from "../../assets/images/003.jpg";
import img4 from "../../assets/images/004.jpg";
import img5 from "../../assets/images/005.jpg";
import style from "./signup.scss";

class Signup extends Component {
  render() {
    return (
      <div className="bg-auth">
        <div className="container bg-auth">
          <div className="row">
            <div className="col-md-10 col-md-offset-2">
              <div className="col-md-6 left-side">
                <div className="slider_img">
                  <ul className="this-list">
                    {/* <li>
                      <img src={img1} alt="image" />
                    </li>
                    <li>
                      <img src={img2} alt="image" />
                    </li>
                    <li>
                      <img src={img3} alt="image" />
                    </li>
                    <li>
                      <img src={img4} alt="image" />
                    </li>
                    <li>
                      <img src={img5} alt="image" />
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col md-5 right-side">
                <div id="form-signup">
                  <div className="login-frm">
                    <div className="title-inst2">
                      <span className="nj">Instagggram</span>
                    </div>
                    <div className="omni-auth o-auth">
                      <div className="bti btw">
                        <a href="#" className="btn-omni btn-block">
                          Login in with Facebook
                        </a>
                        <p className="or">OR</p>
                      </div>
                    </div>

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
                        <button
                          disabled=""
                          className="btn tb btn-block"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>

                    <div className="term">
                      <p className="fo">
                        By signing up, your agree to our{" "}
                        <strong>Terms &amp; Privacy Policy</strong>
                      </p>
                    </div>
                  </div>
                  <div className="sign_up_switch">
                    <p className="dont">
                      Have an account?{" "}
                      <span>
                        <a>Log In</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
