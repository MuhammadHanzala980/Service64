import React, { Component } from "react";
import {
  IoIosCheckmarkCircle,
  //   IoIosLink,
  IoMdStar,
  IoMdStarHalf,
} from "react-icons/io";
import { GiChickenOven } from "react-icons/gi";
import { RiHotelBedLine, RiPlaneLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
// import Button from "../../components/common/Button";
// import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { BsExclamationTriangle } from "react-icons/bs";
import { BsGrid, BsListUl } from "react-icons/bs";
import Select from "react-select";

// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import {
  get_listing,
  listing_details,
  searchByCity,
  searchByCategory,
  searchByLocation,
  search,
  get_loc,
  get_cat,
  val,
  recommendedCityCategory,
} from "../../store/action";
import { bindActionCreators } from "redux";

class PlaceGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          bedge: "New Open",
          title: "Favorite Place Food Bank",
          titleIcon: <IoIosCheckmarkCircle />,
          titleUrl: "/listing-details",
          stitle: "Bishop Avenue, New York",
          image: require("../../assets/images/img25.jpg"),
          cardType: "Restaurant",
          cardTypeIcon: <GiChickenOven />,
          author: require("../../assets/images/small-team1.jpg"),
          authorUrl: "#",
          number: "(492) 492-4828",
          website: "www.mysitelink.com",
          date: "Posted 1 month ago",
          view: "204",
          ratings: [
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStarHalf />,
            <IoMdStar className="last-star" />,
          ],
          ratingNum: "4.5",
        },
        {
          bedge: "Closed",
          title: "beach blue boardwalk",
          titleIcon: "",
          titleUrl: "/listing-details",
          stitle: "Bishop Avenue, New York",
          image: require("../../assets/images/img26.jpg"),
          cardType: "Travel",
          cardTypeIcon: <RiPlaneLine />,
          author: require("../../assets/images/small-team2.jpg"),
          authorUrl: "#",
          number: "(492) 492-4828",
          website: "www.mysitelink.com",
          date: "Posted 1 month ago",
          view: "248",
          ratings: [
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStarHalf />,
            <IoMdStar className="last-star" />,
          ],
          ratingNum: "4.6",
        },
        {
          bedge: "New Open",
          title: "Hotel Govendor",
          titleIcon: <IoIosCheckmarkCircle />,
          titleUrl: "/listing-details",
          stitle: "Bishop Avenue, New York",
          image: require("../../assets/images/img27.jpg"),
          cardType: "Hotel",
          cardTypeIcon: <RiHotelBedLine />,
          author: require("../../assets/images/small-team3.jpg"),
          authorUrl: "#",
          number: "(492) 492-4828",
          website: "www.mysitelink.com",
          date: "Posted 1 month ago",
          view: "248",
          ratings: [
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStarHalf />,
            <IoMdStar className="last-star" />,
          ],
          ratingNum: "4.6",
        },
        {
          bedge: "New Open",
          title: "Favorite Place Food Bank",
          titleIcon: <IoIosCheckmarkCircle />,
          titleUrl: "/listing-details",
          stitle: "Bishop Avenue, New York",
          image: require("../../assets/images/img28.jpg"),
          cardType: "Restaurant",
          cardTypeIcon: <GiChickenOven />,
          author: require("../../assets/images/small-team1.jpg"),
          authorUrl: "#",
          number: "(492) 492-4828",
          website: "www.mysitelink.com",
          date: "Posted 1 month ago",
          view: "204",
          ratings: [
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStarHalf />,
            <IoMdStar className="last-star" />,
          ],
          ratingNum: "4.5",
        },
        {
          bedge: "Closed",
          title: "beach blue boardwalk",
          titleIcon: "",
          titleUrl: "/listing-details",
          stitle: "Bishop Avenue, New York",
          image: require("../../assets/images/img29.jpg"),
          cardType: "Travel",
          cardTypeIcon: <RiPlaneLine />,
          author: require("../../assets/images/small-team2.jpg"),
          authorUrl: "#",
          number: "(492) 492-4828",
          website: "www.mysitelink.com",
          date: "Posted 1 month ago",
          view: "248",
          ratings: [
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStarHalf />,
            <IoMdStar className="last-star" />,
          ],
          ratingNum: "4.6",
        },
        {
          bedge: "New Open",
          title: "Hotel Govendor",
          titleIcon: <IoIosCheckmarkCircle />,
          titleUrl: "/listing-details",
          stitle: "Bishop Avenue, New York",
          image: require("../../assets/images/img30.jpg"),
          cardType: "Hotel",
          cardTypeIcon: <RiHotelBedLine />,
          author: require("../../assets/images/small-team3.jpg"),
          authorUrl: "#",
          number: "(492) 492-4828",
          website: "www.mysitelink.com",
          date: "Posted 1 month ago",
          view: "248",
          ratings: [
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStar />,
            <IoMdStarHalf />,
            <IoMdStar className="last-star" />,
          ],
          ratingNum: "4.6",
        },
      ],
      all_listing: [],
      item: [],
      loading: true,
      search_res_emty: false,
      default_listing: false,
      city_listing: false,
      area_listing: false,
      category_listing: false,
      recomnd_listing: false,
      location_listing: false,
      selectedCatOp: null,
      title: "Showing 1 to 6 of 30 entries",
      navs: [
        {
          path: "/listing-list",
          icon: <BsListUl />,
          active: false,
        },
        {
          path: "/listing-grid",
          icon: <BsGrid />,
          active: true,
        },
      ],
      categories: [],
      cities: [],
      locations: [],
      selected_city: null,
      location: null,
      category: null,

      city_placeholder: 'Sort By City...',
      location_placeholder: 'Sort By Location...',
      category_placeholder: 'Sort By Category...',
      recommended: null
    };
  }

  handleChangeCat = (ev) => {
    const { location, selected_city } = this.state;
    this.setState({
      category: ev.label,
      category_placeholder: ev.label,
      loading: true,
    });
    const search_body = {
      category: ev.label,
      city: selected_city,
      location: location,
    };
    this.props.actions.search(search_body).then((res) => {
      if (res.data) {
        this.setState({
          item: res.data,
          loading: false,
          default_listing: false,
          city_listing: false,
          area_listing: false,
          category_listing: true,
          recomnd_listing: false,
          search_res_emty: false,
        })
      } else {
        const body = {
          category: ev.label,
          city: selected_city,
          location: location,
        }
        this.recommended_listing(body)
        this.setState({
          search_res_emty: res.message,
        })
      }
    })
      .catch((err) => console.log(err));
  };

  sortByCity = (ev) => {
    this.setState({
      loading: true,
      city_listing: true,
      selected_city: ev,
      location_placeholder: 'Sort By Location ...',
    })
    const search_body = {
      city: ev.label,
    };
    this.props.actions
      .searchByCity(search_body).then((res) => {
        if (res.data) {
          this.setState({
            item: res.data,
            loading: false,
            default_listing: false,
            city_listing: true,
            search_res_emty: false,
          })
        }
        else {
          this.get_listing()
          this.setState({
            search_res_emty: res.message
          })
        }
      })
      .catch((err) => console.log(err));
  };

  handleChangeCit = (ev) => {
    this.sortByCity(ev)
    this.setState({ selected_city: ev.label, });
    if (ev.locations !== null) {
      let array = ev.locations;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          new_arr.push(element);
        }
        this.setState({
          locations: new_arr,
          location: null,
        });
      }
    } else {
      this.setState({ locations: [] });
    }
  };



  handleChangeLoc = (ev) => {
    this.setState({
      area_listing: true,
      location: ev.label,
      loading: true,
      location_placeholder: ev.label,
    });
    const search_body = {
      location: ev.label,
      city: this.state.selected_city,
    };
    this.searchByLocation(search_body)
  };

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

  get_loc() {
    this.props.actions.get_loc().then((res) => {
      let array = res.data;
      let new_arr = [];
      let loc_arr = [];
      // let concat = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          const loc_ele = array[i].locations;
          element.value = i;
          new_arr.push(element);
          loc_arr.push(loc_ele);
        }
        // for (let j = 0; j < loc_arr.length; j++) {
        //     const element = loc_arr[j];
        //     for (var k in element) {
        //         concat.push(element[k])
        //     }
        // }
        // for (let v = 0; v < concat.length; v++) {
        //     const element = concat[v];
        //     element.value = v;
        // }
        this.setState({
          // locations: concat,
          cities: new_arr,
        });
      }
    });
  }

  componentDidMount() {
    this.get_cat();
    this.get_loc();

    let elements = this.props.moveto
    if (elements !== undefined) {
      this.setState({
        location: elements.location,
        selected_city: elements.city,
        category: elements.category,

        location_placeholder: elements.location,
        city_placeholder: elements.city,
        category_placeholder: elements.category,
      })
    }

    let search_res = this.props.item;
    if (search_res !== undefined) {
      if (search_res.data === null) {
        const body = {
          city: elements.city,
          category: elements.category,
        }
        console.log(body);
        this.recommended_listing(body)
        this.setState({
          search_res_emty: search_res.message,

        });
      }
      else {
        this.setState({
          item: search_res,
          loading: false,
          city_listing: false,
          area_listing: false,
          category_listing: true,
          default_listing: false,
        });
      }
    }
    else {
      this.get_listing()
    }
  }
  recommended_listing(body) {
    this.props.actions.recommendedCityCategory(body).then((res) => {
      if (res.data) {
        this.setState({
          item: res.data,
          default_listing: false,
          recomnd_listing: true,
          loading: false,
          city_listing: false,
          area_listing: false,
          category_listing: false,
        });
      }
      else {
        
        const search_body = {
          city: this.state.selected_city,
          location: this.state.location
        }

        this.props.actions
          .searchByLocation(search_body).then((res) => {
            if (res.data) {
              this.setState({
                item: res.data,
                loading: false,
                default_listing: false,
                city_listing: false,
                area_listing: true,
              })
            }
            else {
              const body = {
                city: this.state.selected_city,
              }
              this.props.actions
                .searchByCity(body).then((res) => {
                  if (res.data) {
                    this.setState({
                      item: res.data,
                      loading: false,
                      default_listing: false,
                      city_listing: true,
                    })
                  }
                  else {
                    this.get_listing()
                  }
                })
                .catch((err) => console.log(err));
              this.setState({
                search_res_emty: res.message
              })
            }
          })
          .catch((err) => console.log(err));
      }
    });
  }

  get_listing() {
    this.props.actions.get_listing().then((res) => {
      console.log(res.data);
      this.setState({
        item: res.data,
        loading: false,
        default_listing: true,
        city_listing: false,
        area_listing: false,
        category_listing: false,
      });
    });
  }

  searchByLocation(search_body) {
    this.props.actions
      .searchByLocation(search_body).then((res) => {
        if (res.data) {
          this.setState({
            item: res.data,
            loading: false,
            default_listing: false,
            city_listing: false,
            area_listing: true,
            search_res_emty: false,
          })
        }
        else {
          const body = {
            city: this.state.selected_city,
          }
          this.props.actions
            .searchByCity(body).then((res) => {
              if (res.data) {
                this.setState({
                  item: res.data,
                  loading: false,
                  default_listing: false,
                  city_listing: true,
                })
              }
              else {
                this.get_listing()
              }
            })
            .catch((err) => console.log(err));
          this.setState({
            search_res_emty: res.message
          })
        }
      })
      .catch((err) => console.log(err));
  }



  get_more_listing() {
    const next = { skip: this.state.item.length };

    if (this.state.default_listing == true) {
      this.props.actions.get_listing(next).then((res) => {
        const more_data = res.data;
        more_data.map((i) => {
          this.state.item.push(i);
          this.setState({
            item: this.state.item,
            loading: false,
          });
        });
      });
    }
    else if (this.state.city_listing == true) {
      const body = {
        city: this.state.selected_city,
        skip: this.state.item.length,
      };
      this.props.actions.searchByCity(body).then((res) => {
        const more_data = res.data;
        if (more_data !== undefined) {
          more_data.map((i) => {
            this.state.item.push(i);
            this.setState({
              item: this.state.item,
              loading: false,
            });
          });
        }
      });
    }
    else if (this.state.area_listing == true) {
      const body = {
        location: this.state.location,
        city: this.state.selected_city,
        skip: this.state.item.length,
      };

      this.props.actions.searchByLocation(body).then((res) => {
        const more_data = res.data;
        if (more_data !== undefined) {
          more_data.map((i) => {
            this.state.item.push(i);
            this.setState({
              item: this.state.item,
              loading: false,
            });
          });
        }
      });
    }
    else if (this.state.category_listing == true) {
      const body = {
        location: this.state.location,
        city: this.state.selected_city,
        category: this.state.category,
        skip: this.state.item.length,
      };

      this.props.actions.search(body).then((res) => {
        const more_data = res.data;
        if (more_data !== null) {
          more_data.map((i) => {
            this.state.item.push(i);
            this.setState({
              item: this.state.item,
              loading: false,
            });
          });
        }
      });
    }
    else if (this.state.recomnd_listing == true) {
      const body = {
        city: this.state.selected_city,
        category: this.state.category,
        skip: this.state.item.length,
        recommended: this.state.recommended
      };

      this.props.actions.recommendedCityCategory(body).then((res) => {
        const more_data = res.data;
        if (more_data !== undefined) {
          more_data.map((i) => {
            this.state.item.push(i);
            this.setState({
              item: this.state.item,
              loading: false,
            });
          });
        }
      });
    }
  }

  get_listing_detailes(details) {
    this.props.actions.listing_details(details);
    const history = this.props.history;
    history.push("/profile");
  }

  render() {
    const { item, loading, search_res_emty, categories, cities, locations } = this.state;
    return (
      <>
        <div className="col-lg-12">
          {/* <GenericHeader /> */}
          <div className="generic-header sorting-option margin-bottom-30px">
            <div className="short-option mr-1 col-lg-4 max-auto">
              <Select
                value={this.selected_city}
                onChange={this.handleChangeCit.bind(this)}
                placeholder={this.state.city_placeholder}
                options={cities}
              />
            </div>

            <div className="short-option mr-1 col-lg-4 max-auto">
              <Select
                value={this.state.location}
                onChange={this.handleChangeLoc.bind(this)}
                placeholder={this.state.location_placeholder}
                options={locations}
              />
            </div>

            <div className="short-option mr-1 col-lg-4 max-auto">
              <Select
                value={this.state.category}
                onChange={this.handleChangeCat.bind(this)}
                placeholder={this.state.category_placeholder}
                options={categories}
              />
            </div>
          </div>

        </div>

        {search_res_emty && (
          <div
            style={{ textAlign: "center", width: "100%", margin: "50px 0px" }}
          >
            {" "}
            <h2>
              {search_res_emty} <BsExclamationTriangle />{" "}
            </h2>{" "}
          </div>
        )}
        <br />
        {loading ? (
          <div style={{ textAlign: "center", width: "100%" }}>
            <span>
              <Spinner animation="grow" id="loder" />
            </span>
          </div>
        ) : (
            <>
              {item.map((items, index) => {
                return (
                  <div className="col-lg-4 column-td-6" key={index}>
                    <div className="card-item">
                      <div
                        onClick={this.get_listing_detailes.bind(this, items)}
                        className="card-image-wrap"
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="card-image"
                          style={{ overflow: "hidden" }}
                        >
                          <img
                            src={items.seller_img}
                            className="card__img"
                            alt="Profile-Photo"
                          />
                        </div>
                      </div>
                      <div className="card-content-wrap">
                        <div className="card-content">
                          <div
                            onClick={this.get_listing_detailes.bind(this, items)}
                            style={{ cursor: "pointer" }}
                          >
                            <h4 className="card-title">
                              {items.fullname}
                              <i> {this.state.items[0].titleIcon}</i>
                            </h4>

                            <h5 className="card-meta">
                              Category: {items.category}
                            </h5>

                            <p className="card-sub">
                              Location: {items.location + ", " + items.city}
                            </p>
                          </div>
                          {/* <a href={this.state.items[0].authorUrl} className="author-img">
                                                        <img src={this.state.items[0].author} alt="author-img" />
                                                    </a> */}
                          <ul className="info-list padding-top-20px">
                            {/* <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={this.state.items[0].websiteUrl}>
                                                            {this.state.items[0].website}
                                                        </a>
                                                        </li> */}
                            {/* <li>
                                                            <span className="la d-inline-block"><FaRegCalendarCheck /></span> {this.state.items[0].date}
                                                        </li> */}
                            <li className="info-list">
                              {items.description.slice(0, 120)} .....
                            {/* <p className="card-text">{}</p> */}
                            </li>
                          </ul>
                        </div>
                        <div className="rating-row">
                          <div className="rating-rating">
                            {this.state.items[0].ratings.map((rating, index) => {
                              return <span key={index}>{rating}</span>;
                            })}
                            <span className="rating-count">
                              {this.state.items[0].ratingNum}
                            </span>
                          </div>
                          <div className="listing-info">
                            <ul>
                              <li>
                                <span className="info__count">
                                  <AiOutlineEye />
                                </span>{" "}
                                {this.state.items[0].view}
                              </li>
                              <li>
                                <span
                                  className="info__save"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Bookmark"
                                >
                                  <FiHeart />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        <div className="col-lg-12">
          <div className="button-shared mt-4 text-center">
            <button
              className="theme-btn border-0"
              onClick={this.get_more_listing.bind(this)}
            >
              {/* <span className="la">
                          <FiRefreshCw />
                        </span> */}
              Load More Listings
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        get_listing,
        listing_details,
        searchByCity,
        searchByCategory,
        searchByLocation,
        search,
        get_loc,
        get_cat,
        val,
        recommendedCityCategory,
      },
      dispatchEvent
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    item: state.search_res,
    loading_control: state.loading_control,
    moveto: state.moveto,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceGrid);
