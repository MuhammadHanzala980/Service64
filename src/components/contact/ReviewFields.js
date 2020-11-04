import React, { Component } from "react";
import { MdStar } from "react-icons/md";
// import { AiOutlineUser } from "react-icons/ai";
// import { FaRegEnvelope } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
// import PhotoUploader2 from "../addlisting/PhotoUploader2";

class ReviewFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Add a Review",
      rating: null,
      current_user: null,
      message: "",
      subtitle:
        "Your email address will not be published. Required fields are marked *",
    };
  }

  componentDidMount() {
    const current_user = JSON.parse(localStorage.getItem("__current_user__"));
    if (current_user !== null) {
      this.setState({
        current_user: current_user,
      });
    }
    console.log(this.props.details, ">>>>>>>>>>>>>>>", current_user);
  }
  handleChangeValue(ev) {
    console.log(ev.target.value);
    this.setState({
      rating: ev.target.value,
    });
  }

  value(ev) {
    console.log(ev.target.value);
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  submitReview() {
    if (this.state.rating === null) {
      console.log("this.");
    } else if (this.state.message.lenght < 30) {
      console.log("message");
    } else {
      const review = {
        rating: this.state.rating,
        message: this.state.message,
        buyer_Id: this.state.current_user._id,
        _id: this.props.details._id,
      };
      console.log(review);
    }
  }

  render() {
    return (
      <>
        <div className="add-review-listing padding-top-50px" id="review">
          <h2 className="widget-title">{this.state.title}</h2>
          <div className="title-shape"></div>
          <div className="section-heading padding-top-20px">
            <p className="sec__desc font-size-16">{this.state.subtitle}</p>
          </div>
          <ul className="rating-list padding-top-20px">
            <li>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <label className="review-label">
                <input
                  type="radio"
                  name="review-radio"
                  onChange={this.handleChangeValue.bind(this)}
                  value={1}
                />
                <span className="review-mark"></span>
              </label>
            </li>
            <li>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <label className="review-label">
                <input
                  type="radio"
                  name="review-radio"
                  onChange={this.handleChangeValue.bind(this)}
                  value={2}
                />
                <span className="review-mark"></span>
              </label>
            </li>
            <li>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <label className="review-label">
                <input
                  type="radio"
                  name="review-radio"
                  onChange={this.handleChangeValue.bind(this)}
                  value={3}
                />
                <span className="review-mark"></span>
              </label>
            </li>
            <li>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <label className="review-label">
                <input
                  type="radio"
                  name="review-radio"
                  onChange={this.handleChangeValue.bind(this)}
                  value={4}
                />
                <span className="review-mark"></span>
              </label>
            </li>
            <li>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <span className="la d-inline-block">
                <MdStar />
              </span>
              <label className="review-label">
                <input
                  type="radio"
                  name="review-radio"
                  onChange={this.handleChangeValue.bind(this)}
                  value={5}
                />
                <span className="review-mark"></span>
              </label>
            </li>
          </ul>
          <div className="contact-form-action mt-5">
            <form>
              <div className="row">
                {/* <div className="col-lg-6"> 
                                    <div className="input-box">
                                        <label className="label-text">Name</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><AiOutlineUser /></span>
                                            <input className="form-control" type="text" name="name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                </div> */}
                {/* <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Email</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><FaRegEnvelope /></span>
                                            <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div> */}
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Review</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <BsPencil />
                      </span>
                      <textarea
                        className="message-control form-control"
                        name="message"
                        value={this.state.message}
                        placeholder="Write Message"
                        onChange={this.value.bind(this)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="upload-btn-box">
                    <form
                      action="#"
                      method="post"
                      encType="multipart/form-data"
                    >
                      {/* <PhotoUploader2 /> */}

                      <button
                        className="theme-btn border-0 margin-top-20px"
                        type="button"
                        onClick={this.submitReview.bind(this)}
                      >
                        Submit review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
/* First tell me why you have used this in the responsive device*/
export default ReviewFields;
