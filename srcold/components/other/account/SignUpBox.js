import React, { Component } from "react";
import SignInOptions from "./SignInOptions";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { user_signup } from "../../../store/action";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Spinner } from "react-bootstrap";

class SignUpBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      fullName: "",
      email: "",
      password: "",
      confirmpwd: "",
      phone_number: "",
      message_err: "",
      validatedEmail: false,
      user_type: "Buyer",
      loading: false,
    };
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      this.setState({ validatedEmail: true });
    }
  }
  value(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      this.validateEmail(e.target.value);
    }
  }
  signup() {
    const {
      fullName,
      email,
      password,
      confirmpwd,
      validatedEmail,
      phone_number,
      user_type,
    } = this.state;
    if (fullName.length < 1) {
      this.setState({
        message_err: "Please Inter full name !",
      });
    } else if (phone_number.length < 10) {
      this.setState({
        message_err: "Please inter valide Phone number !",
      });
    } else if (!validatedEmail) {
      this.setState({
        message_err: "Please inter valide email !",
      });
    } else if (password.length < 8) {
      this.setState({
        message_err: "Your password must be at least 8 characters long !",
      });
    } else if (confirmpwd !== password) {
      this.setState({
        message_err: "Password does not match",
      });
    } else {
      const userdata = {
        fullName,
        email,
        password,
        confirmpwd,
        phone_number,
        user_type,
      };
      this.setState({
        loading: true,
      });

      this.props.actions.user_signup(userdata)
        .then((res) => {
          if (res.data.user !== undefined) {
            localStorage.setItem(
              "__current_user__",
              JSON.stringify(res.data.user)
            );
            this.props.history.push("/");
          } else {
            this.setState({
              message_err: res.data.message,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }
  selecte_type = (val) => {
    console.log(val.type);
    this.setState({ user_type: val.type });
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <div className="billing-form-item mb-0">
          {loading ? (
            <div style={{ textAlign: "center", width: "100%" }}>
              <span>
                <Spinner animation="grow" id="loder" />
              </span>
            </div>
          ) : (
            <div>
              <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                <h3 className="widget-title font-size-28 pb-0">
                  {this.props.title}
                </h3>
                {/* <p className="font-size-16 font-weight-medium">
                            {this.props.subtitle}
                        </p> */}
              </div>
              <div className="billing-content">
                <div className="contact-form-action">
                  <div className="row">
                    {/* <SignInOptions /> */}

                    {/* <div className="col-lg-12">
                                    <div className="account-assist mt-4 mb-4 text-center">
                                        <p className="account__desc">or</p>
                                    </div>
                                </div> */}

                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Full name</label>
                        <div className="form-group">
                          <span className="form-icon">
                            <AiOutlineUser />
                          </span>
                          <input
                            value={this.state.fullName}
                            name="fullName"
                            onChange={this.value.bind(this)}
                            className="form-control"
                            type="text"
                            placeholder="Full name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Phone Number</label>
                        <div className="form-group">
                          <span className="form-icon">
                            <FaRegEnvelope />
                          </span>
                          <input
                            value={this.state.phone_number}
                            name="phone_number"
                            onChange={this.value.bind(this)}
                            onChange={this.value.bind(this)}
                            className="form-control"
                            type="text"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Email</label>
                        <div className="form-group">
                          <span className="form-icon">
                            <FaRegEnvelope />
                          </span>
                          <input
                            value={this.state.email}
                            name="email"
                            onChange={this.value.bind(this)}
                            className="form-control"
                            type="email"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Password</label>
                        <div className="form-group">
                          <span className="form-icon">
                            <FiLock />
                          </span>
                          <input
                            value={this.state.password}
                            name="password"
                            onChange={this.value.bind(this)}
                            className="form-control"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Confirm Password</label>
                        <div className="form-group">
                          <span className="form-icon">
                            <FiLock />
                          </span>
                          <input
                            className="form-control"
                            value={this.state.confirmpwd}
                            name="confirmpwd"
                            onChange={this.value.bind(this)}
                            className="form-control"
                            type="password"
                            placeholder="Confirm password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      {this.state.message_err && (
                        <div className="alert alert-danger">
                          {this.state.message_err}
                        </div>
                      )}
                      {/* <div className="form-group">
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="chb13" />
                                            <label htmlFor="chb13">I Agree to Dirto's <Link to="#" className="color-text">Privacy Policy</Link></label>
                                        </div>
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="chb14" />
                                            <label htmlFor="chb14">I Agree to Dirto's <Link to="#" className="color-text">Terms of Services</Link></label>
                                        </div>
                                    </div> */}
                    </div>
                    <div className="col-lg-12">
                      <div className="btn-box margin-top-20px margin-bottom-20px">
                        <button
                          className="theme-btn border-0"
                          type="button"
                          onClick={this.signup.bind(this)}
                        >
                          Register account
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <p className="font-weight-medium">
                        Already have an account?{" "}
                        <Link to="/login" className="color-text">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        user_signup,
      },
      dispatchEvent
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    item: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpBox);
