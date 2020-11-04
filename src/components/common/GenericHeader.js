import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { BsGrid, BsListUl } from "react-icons/bs";
import Select from "react-select";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  get_loc,
  get_cat,
  val,
  searchByCity,
  searchByCategory,
  searchByLocation,
  search_res,
  moveto,
  search,
} from "../../store/action";

class GenericHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleChangeCat = (ev) => {
    const { location, selected_city } = this.state;
    const dt = {
      loading_control: true,
      listing_type: "category_listing",
      category: ev.label,
      city: selected_city,
      location: location,
    };
    this.props.actions.moveto(dt);
    this.setState({ category: ev.label });
    const search_body = {
      category: ev.label,
      city: selected_city,
      location: location,
    };
    this.props.actions
      .search(search_body)
      .then((res) => {
        if (res.data) {
          this.props.actions.search_res(res.data);
        } else {
          this.props.actions.search_res(res);
        }
        // this.props.history.push('/listing-grid')
      })
      .catch((err) => console.log(err));
  };

  sortByCity = (ev) => {
    const dt = {
      loading_control: true,
      listing_type: "city_listing",
      city: ev.label
    };
    this.props.actions.moveto(dt);
    this.setState({ selected_city: ev });
    const search_body = {
      city: ev.label,
    };
    this.props.actions
      .searchByCity(search_body)
      .then((res) => {
        if (res.data) {
          this.props.actions.search_res(res.data);
        } else {
          this.props.actions.search_res(res);
        }
      })
      .catch((err) => console.log(err));
  };

  handleChangeCit = (ev) => {
    this.sortByCity(ev);
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

  //   handleChangeLoc = (ev) => {
  handleChangeLoc = (ev) => {
    const dt = {
      loading_control: true,
      listing_type: "area_listing",
      location: ev.label,
      city: this.state.selected_city,

    };
    this.props.actions.moveto(dt);
    this.setState({ loading: true, location: ev.label });
    const search_body = {
      location: ev.label,
      city: this.state.selected_city,
    };
    this.props.actions
      .searchByLocation(search_body)
      .then((res) => {
        if (res.data) {
          this.props.actions.search_res(res.data);
        } else {
          this.props.actions.search_res(res);
        }
        // this.props.history.push("/listing-grid");
      })
      .catch((err) => console.log(err));
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
    // this.get_cit()
  }
  render() {
    const { categories, cities, locations } = this.state;
    return (
      <>
        <div className="generic-header sorting-option margin-bottom-30px">
          <div className="short-option mr-1 col-lg-4 max-auto">
            <Select
              value={this.selected_city}
              onChange={this.handleChangeCit.bind(this)}
              placeholder="Sort by City"
              options={cities}
            />
          </div>

          <div className="short-option mr-1 col-lg-4 max-auto">
            <Select
              value={this.selected_location}
              onChange={this.handleChangeLoc.bind(this)}
              placeholder="Sort by Area"
              options={locations}
            />
          </div>

          <div className="short-option mr-1 col-lg-4 max-auto">
            <Select
              value={this.category}
              onChange={this.handleChangeCat.bind(this)}
              placeholder="Sort by Category"
              options={categories}
            />
          </div>
          {/* <ul className="generic-nav">
                        {this.state.navs.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path} className={item.active ? 'active' : ' '}>
                                        <span className="d-inline-block">
                                            {item.icon}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul> */}
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        val,
        get_loc,
        get_cat,
        searchByCity,
        searchByCategory,
        search_res,
        searchByLocation,
        moveto,
        search,
      },
      dispatchEvent
    ),
  };
};
export default connect(null, mapDispatchToProps)(GenericHeader);
