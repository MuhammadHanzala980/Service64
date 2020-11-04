import React, { Component } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
// import GeneralInfo from "../../components/addlisting/GeneralInfo";
import { BsPencilSquare, BsQuestion, BsPencil } from "react-icons/bs";
import AddLocation from "../../components/addlisting/AddLocation";
// import AddFullDetails from "../../components/addlisting/AddFullDetails";
// import Amenities from "../../components/addlisting/Amenities";
// import OpeningHours from "../../components/addlisting/OpeningHours";
// import AddPrice from "../../components/addlisting/AddPrice";
import Select from "react-select";
import { FiPhone } from "react-icons/fi";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add_listing, get_cat } from "../../store/action";
import { Spinner } from "react-bootstrap";

class AddListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbimg: require("../../assets/images/bread-bg.jpg"),
      title: "General Information",
      saller_name: "",
      description: "",
      category: "",
      city: "",
      location: "",
      phone_number: "",
      saller_img: "",
      // user_id: '',
      is_logedin: false,
      categories: [],
      password: "",
      confirmpwd: "",
    };
  }
  componentDidMount() {
    this.get_cat();
    // const current_user = JSON.parse(localStorage.getItem('__current_user__'))
    // if (current_user !== null) {
    //     this.setState({
    //         user_id: current_user._id,
    //         is_logedin: true,

    //     })
    // }
    // else {
    //     this.setState({
    //         is_logedin: false,
    //     })
    // }
  }
  get_cat() {
    this.props.actions.get_cat().then((res) => {
      let array = res.data;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          new_arr.push(element);
        }
        this.setState({
          categories: new_arr,
        });
      }
    });
  }

  componentWillReceiveProps(prop) {
    const event = prop.event;
    if (event) {
      if (event.type === "city") {
        this.setState({ city: event.city });
      } else if (event.type === "state") {
        this.setState({ location: event.location });
      }
    }

    if (prop.saller_img) {
      this.setState({
        saller_img: prop.saller_img,
      });
    }
  }

  submit_listing() {
    const {
      saller_name,
      description,
      category,
      city,
      location,
      phone_number,
      saller_img,
      password,
      confirmpwd,
    } = this.state;

    if (saller_name.length < 1) {
      this.setState({
        message_err: "Saller Name required",
      });
    } else if (password.length < 8) {
      this.setState({
        message_err: "Your password must be at least 8 characters long !",
      });
    } else if (confirmpwd !== password) {
      this.setState({
        message_err: "Password does not match",
      });
    } else if (description.length < 10 || description.length > 600) {
      this.setState({
        message_err:
          "An effective overview needs to be at least 100 to 300 characters",
      });
    } else if (category === " ") {
      this.setState({
        message_err: "Please select category !",
      });
    } else if (saller_img === "") {
      this.setState({
        message_err: "Please upload a picture !",
      });
    } else if (city === "") {
      this.setState({
        message_err: "Please your City !",
      });
    } else if (location === "") {
      this.setState({
        message_err: "Please Inter your Location !",
      });
    } else if (phone_number.length < 11) {
      this.setState({
        message_err: "Phone Nuber lenght must be 11 !",
      });
    } else {
      const saller = {
        saller_name: saller_name,
        description: description,
        user_type: "Seller",
        category: category,
        city: city,
        location: location,
        phone_number: phone_number,
        saller_img: saller_img,
        password: confirmpwd,
      };
      this.setState({
        is_logedin: true,
      });
      this.props.actions
        .add_listing(saller)
        .then((res) => {
          if (res.message) {
            this.setState({
              message_err: res.message,
            });
          }
          console.log(res);
          this.props.history.push("/listing-grid");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  value(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChangeCat = (val) => {
    console.log(val.label);
    this.setState({ category: val.label });
  };
  render() {
    const { is_logedin, categories } = this.state;

    return (
      <main className="add-listing">
        {/* Header */}
        {/* <GeneralHeader /> */}

        {/* <Breadcrumb CurrentPgTitle="Add Listing" MenuPgTitle="Listings" img={this.state.breadcrumbimg} /> */}

        {is_logedin && (
          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              height: "400px",
            }}
          >
            <span>
              <Spinner animation="grow" id="loder" />
            </span>
          </div>
        )}
        {!is_logedin && (
          <section className="add-listing-area padding-top-40px padding-bottom-100px">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 mx-auto">
                  <div className="billing-form-item">
                    <div className="billing-title-wrap">
                      <h3 className="widget-title pb-0">{this.state.title}</h3>
                      <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                      <div className="contact-form-action">
                        <form method="post">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">
                                  Saller Name
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsPencilSquare />
                                  </span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="saller_name"
                                    value={this.state.saller_name}
                                    onChange={this.value.bind(this)}
                                    placeholder="Enter your Name"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">Password</label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsPencilSquare />
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
                                <label className="label-text">
                                  Confirm Password
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsPencilSquare />
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
                              <div className="input-box">
                                <label className="label-text">
                                  Description
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsPencil />
                                  </span>
                                  <textarea
                                    className="message-control form-control"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.value.bind(this)}
                                    placeholder="Write your listing description"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">Category</label>
                                <div className="form-group mb-0">
                                  <Select
                                    value={this.category}
                                    onChange={this.handleChangeCat.bind(this)}
                                    placeholder="Select a Category"
                                    options={categories}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <PhotoUploader />
                  <AddLocation />
                  <div className="billing-form-item">
                    <div className="billing-title-wrap">
                      <h3 className="widget-title pb-0">Contact Details</h3>
                      <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                      <div className="contact-form-action">
                        <form method="post">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">
                                  Phone Number
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <FiPhone />
                                  </span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="phone_number"
                                    value={this.state.phone_number}
                                    onChange={this.value.bind(this)}
                                    placeholder="Number"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {this.state.message_err && (
                    <div className="alert alert-danger">
                      {this.state.message_err}
                    </div>
                  )}

                  <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                    <div className="billing-content p-0">
                      {/* <div className="custom-checkbox d-block mr-0">
                                                <input type="checkbox" id="privacy" />
                                                <label htmlFor="privacy">I Agree to Dirto's <Link to="#" className="color-text">Privacy Policy</Link></label>
                                            </div>
                                            <div className="custom-checkbox d-block mr-0">
                                                <input type="checkbox" id="terms" />
                                                <label htmlFor="terms">I Agree to Dirto's <Link to="#" className="color-text">Terms of Services</Link>
                                                </label>
                                            </div> */}
                      <div className="btn-box mt-4">
                        <button
                          type="submit"
                          className="theme-btn border-0"
                          onClick={this.submit_listing.bind(this)}
                        >
                          submit listing
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Newsletter */}
        {/* <NewsLetter /> */}

        {/* Footer */}
        {/* <Footer /> */}

        {/* <ScrollTopBtn /> */}
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    item: state,
    event: state.val,
    ope_hrs: state.ope_hrs,
    saller_img: state.upload_img,
    amenities: state.get_amenities,
  };
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        add_listing,
        get_cat,
      },
      dispatchEvent
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
