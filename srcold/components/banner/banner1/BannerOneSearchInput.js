import React, { Component } from "react";
// import { FiSearch } from 'react-icons/fi'
// import SelectCountry from "../../common/SelectCountry";
import Select from "react-select";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  search,
  searchByCountry,
  search_res,
  get_cit,
  get_loc,
  get_cat,
} from "../../../store/action";
import { Link } from "react-router-dom";

// const categories = [
//     {
//         value: 0,
//         label: 'Select a category'
//     },
//     {
//         value: 1,
//         label: 'All Category'
//     },
//     {
//         value: 2,
//         label: 'Shops'
//     },
//     {
//         value: 3,
//         label: 'Hotels'
//     },
//     {
//         value: 4,
//         label: 'Foods & Restaurants'
//     },
//     {
//         value: 5,
//         label: 'Fitness'
//     },
//     {
//         value: 6,
//         label: 'Travel'
//     },
//     {
//         value: 7,
//         label: 'Salons'
//     },
//     {
//         value: 8,
//         label: 'Event'
//     },
//     {
//         value: 9,
//         label: 'Business'
//     },
//     {
//         value: 10,
//         label: 'Jobs'
//     }
// ]
// const cities = [
//     {
//         value: 0,
//         label: 'Select a category'
//     },
//     {
//         value: 1,
//         label: 'All City'
//     },
//     {
//         value: 2,
//         label: 'Barisal'
//     },
//     {
//         value: 3,
//         label: 'Chittagong'
//     },
//     {
//         value: 4,
//         label: 'Dhaka'
//     },
//     {
//         value: 5,
//         label: 'Mymensingh'
//     },
//     {
//         value: 6,
//         label: 'Rajshahi'
//     },
//     {
//         value: 7,
//         label: 'Sylhet'
//     },
//     {
//         value: 8,
//         label: 'Rangpur'
//     },

// ]
// const locations = [
//     {
//         value: 0,
//         label: 'Select a category'
//     },
//     {
//         value: 2,
//         label: 'Barisal'
//     },
//     {
//         value: 3,
//         label: 'Chittagong'
//     },
//     {
//         value: 4,
//         label: 'Dhaka'
//     },
//     {
//         value: 5,
//         label: 'Mymensingh'
//     },
//     {
//         value: 6,
//         label: 'Rajshahi'
//     },
//     {
//         value: 7,
//         label: 'Sylhet'
//     },
//     {
//         value: 8,
//         label: 'Rangpur'
//     },

//     {
//         value: 9,
//         label: 'Comilla'
//     },
//     {
//         value: 10,
//         label: 'Narayanganj'
//     },

//     {
//         value: 11,
//         label: 'Gazipur'
//     },
//     {
//         value: 12,
//         label: 'Khulna'
//     },

// ]

class BannerOneSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_city: null,
      selected_location: null,
      selectedCatOp: null,
      search_keyword: "",
      cities: [],
      locations: [],
      categories: [],
    };
  }

  value(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeCat = (ev) => {
    console.log(ev);
    this.setState({
      selectedCatOp: ev.label,
    });
  };

  handleChangeLoc = (ev) => {
    this.setState({ selected_location: ev.label });
  };
  search() {
    const { selectedCatOp, selected_city, selected_location } = this.state;
    const search_body = {
      city: selected_city,
      location: selected_location,
      category: selectedCatOp,
    };

    if (selectedCatOp === null) {
      alert("Please Select Category !");
      // this.props.actions.searchByCountry(search_body).then((res) => {
      //     if (res.data) {
      //         console.log(res.data);
      //         this.props.actions.search_res(res.data)
      //     }
      // }).catch(err => console.log(err))
    } 
    else {
      this.props.actions
        .search(search_body)
        .then((res) => {
          if (res.data) {
            this.props.actions.search_res(res.data);
          } else {
            this.props.actions.search_res(res);
          }
          this.props.history.push("/listing-grid");
        })
        .catch((err) => console.log(err));
    }
  }

  get_cit() {
    this.props.actions.get_loc().then((res) => {
      let array = res.data;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          new_arr.push(element);
        }
        this.setState({
          cities: new_arr,
        });
      }
    });
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

  handleChangeCit = (ev) => {
    this.setState({ selected_city: ev.label });
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
          selected_location: null,
        });
      }
    } else {
      this.setState({ locations: [] });
    }
  };
  componentDidMount() {
    this.get_cit();
    this.get_cat();
  }
  render() {
    const { cities, locations, categories } = this.state;
    return (
      <>
        <div className="main-search-input">
          <div className="main-search-input-item category">
            <Select
              value={this.selected_city}
              onChange={this.handleChangeCit.bind(this)}
              placeholder="Select a city"
              options={cities}
            />
          </div>
          <div className="main-search-input-item location">
            <Select
              value={this.selected_location}
              onChange={this.handleChangeLoc.bind(this)}
              placeholder="Select an area"
              options={locations}
            />
          </div>
          <div className="main-search-input-item category">
            <Select
              value={this.selectedCatOp}
              onChange={this.handleChangeCat.bind(this)}
              placeholder="Select a category"
              options={categories}
            />
          </div>

          <div className="main-search-input-btn">
            <button
              className="button theme-btn"
              style={{ padding: "inherit" }}
              onClick={this.search.bind(this)}
            >
              {" "}
              <Link to="/" style={{ color: "while" }}>
                <p className="button theme-btn"> Search</p>
              </Link>
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
        search,
        search_res,
        searchByCountry,
        get_cit,
        get_loc,
        get_cat,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerOneSearchInput);
