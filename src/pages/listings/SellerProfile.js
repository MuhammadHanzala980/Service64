import React, { Component } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingDetailsBreadcrumb from "./ListingDetailsBreadcrumb";
// import ListingDetailsSidebar from "../../components/sidebars/ListingDetailsSidebar";
import ListingDetailsGallery from "../../components/sliders/ListingDetailsGallery";
// import { BsCheckCircle } from "react-icons/bs";
// import { AiOutlinePlayCircle } from "react-icons/ai";
// import ModalVideo from "react-modal-video";
// import { Link } from "react-router-dom";
// import GeneralMap from "../../components/contact/GeneralMap";
import ContactInfo from "../../components/contact/ContactInfo";
// import CustomerFeedback from "../../components/sidebars/widgets/CustomerFeedback";
// import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
// import ReviewFields from "../../components/contact/ReviewFields";
// import PlaceOne from "../../components/places/PlaceOne";
// import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
// import { connect } from "react-redux";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import pic from "../../components/sliders/image.png";
class SellerProfile extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      descTitle: "Category",
      desc:
        "Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      featureTitle: "Features",
      videoTitle: "Video",
      title: "Saller Name",
      videoImg: require("../../assets/images/img22.jpg"),
      buttonText: "Watch Video",
      mapTitle: "Location",
      peopleViewtitle: "People Also Viewed",
      seller_img: pic,

      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  componentDidMount() {
    const details = JSON.parse(localStorage.getItem("__current_user__"));
    if (details !== undefined) {
      this.setState({
        desc: details.description,
        title: details.fullname,
        descTitle: details.category,
        seller_img: details.seller_img,
      });
    }
  }

  render() {
    const { amenities } = this.state;
    return (
      <main className="listing-details">
        {/* Header */}
        <GeneralHeader />

        {/* Breadcrumb */}
        <ListingDetailsBreadcrumb />

        <section className="single-listing-area margin-bottom-40px">
          <div className="container">
            <div className="justify-content-center row col-lg-12">
              <div className="col-lg-11">
                <div className="single-listing-wrap">
                  <div className="col-lg-12">
                    <div className="listing-description">
                      <div className="section-heading mt-4 row ">
                        <div className="col-lg-8 row padding-0">
                          <div className="col-lg-5">
                            <div
                              className="gallery-carousel padding-top-0px"
                              margin={10}
                            >
                              <div
                                className="gallery-item"
                                style={{
                                  maxWidth: "220px",
                                  maxHeight: "220px",
                                  overflow: "hidden",
                                }}
                              >
                                <img
                                  src={this.state.seller_img}
                                  alt="gallery"
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-6"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              marginRight: "4px",
                            }}
                          >
                            <h2 className="single-profile-name">
                              {this.state.title}
                            </h2>
                            <h3 className="single-profile-category">
                              {this.state.descTitle}
                            </h3>
                            {/* <ReviewFields /> */}

                            <div className="rating-rating">
                              {this.state.ratings.map((rating, index) => {
                                return <span key={index}>{rating}</span>;
                              })}
                              <span
                                className="rating-count"
                                style={{
                                  fontSize: "14px",
                                  paddingTop: "5px",
                                  fontWeight: "bold",
                                }}
                              >
                                4.8 (16 Reviews){" "}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className="listing-description col-lg-4"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <ContactInfo />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="single-listing-wrap">
                  <div className="col-lg-12 padding-0">
                    <div className="listing-description ">
                      <div className="section-heading profile-description mt-0 shadow-sm mb-2 bg-light rounded">
                        <div
                          style={{
                            boxShadow: "0px 1px 5px -3px",
                          }}
                        >
                          <h2>Description</h2>
                        </div>
                        <p className="sec__desc font-size-14 text-justify">
                          {this.state.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  

                  <div className="col-lg-12 padding-0">
                    <div className="listing-description ">
                      <div className="section-heading profile-description mt-4 shadow-sm mb-2 bg-light rounded">
                        <div
                          style={{
                            boxShadow: "0px 1px 5px -3px",
                          }}
                        >
                          <h2>Work Exprience</h2>
                        </div>
                        <p className="sec__desc font-size-14 text-justify">
                          {this.state.desc}
                        </p>
                      </div>
                    </div>
                  </div>




                </div>
              </div>

              <div className="col-lg-4  padding-0">
                <div className="">
                  <div className="section-heading profile-description mt-0 shadow-sm mb-2 bg-light rounded">
                    <div
                      style={{
                        boxShadow: "0px 1px 5px -3px",
                      }}
                    >
                      <h2>Work Hours</h2>
                    </div>
                    <p className="sec__desc font-size-16 text-justify">
                      <h6> Sunday - Thus: 9AM - 7AM </h6>
                    </p>
                  </div>
                </div>

                <div className="">
                  <div className="section-heading profile-description mt-0 shadow-sm mb-2 bg-light rounded">
                   
                   
                   
                    <div
                      style={{
                        boxShadow: "0px 1px 5px -3px",
                      }}
                    >
                      <h2>Gallery</h2>
                    </div>


                    <div
                      className="row justify-content-center"
                      style={{ padding: "25px" }}
                    >
                      <div className="col-lg-6 padding-0">
                        <img
                          src={pic}
                          width="100%"
                          alt="pic"
                          style={{ padding: "5px" }}
                        />
                      </div>
                      <div className="col-lg-6 padding-0">
                        <img
                          src={pic}
                          width="100%"
                          alt="pic"
                          style={{ padding: "5px" }}
                        />
                      </div>
                      <div className="col-lg-6 padding-0">
                        <img
                          src={pic}
                          width="100%"
                          alt="pic"
                          style={{ padding: "5px" }}
                        />
                      </div>
                      <div className="col-lg-6 padding-0">
                        <img
                          src={pic}
                          width="100%"
                          alt="pic"
                          style={{ padding: "5px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

export default SellerProfile;
