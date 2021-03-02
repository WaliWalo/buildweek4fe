import React, { Component } from "react";
import SignupForm from "./SignupForm";

class SignupPage extends Component {
  render() {
    return (
      <div className="bg-auth">
        <div className="container bg-auth">
          <div className="row">
            <div className="col-md-10 col-md-offset-2">
              <div className="col-md-6 left-side">
                <div className="slider_img">
                  <ul className="this-list">
                    <li>
                      <img
                        src="https://via.placeholder.com/300/09f/fff.png"
                        alt="image"
                      />
                    </li>
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
                          Login in with FB
                        </a>
                      </div>
                      <p className="or">OR</p>
                    </div>
                    <SignupForm />
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
export default SignupPage;
