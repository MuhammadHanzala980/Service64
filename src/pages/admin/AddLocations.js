import React, { Component } from 'react';
import { add_loc, get_loc, del_loc, edt_loc, get_cit, vl } from '../../store/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from "react-select";

class AddLocations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            index: '',
            Locations: '',
            cities: [],
            message_err: '',
            edit: false,
            locations_arr: [],
            selected_city: null,
        }
    }

    add_loc() {
        const { locations_arr, Locations } = this.state
        const location_title = {
            label: this.state.selected_city.label,
            locations: { label: this.state.Locations }
        }
        if (this.state.Locations.length < 1) {
            this.setState({ message_err: 'Please Inter Location !' })
        }
        else {
            const is_index = ((index) => {
                return index.label === Locations
            })
            const index = locations_arr.findIndex(is_index)
            if (index === -1) {
                this.props.actions.add_loc(location_title).then((res) => {
                    this.get_loc()
                    this.handleChangeCit(this.state.selected_city)
                    locations_arr.push({ label: this.state.Locations })
                    const response = res.data
                    this.setState({ message_err: '' })
                    if (response.message) {
                        this.setState({ message_err: response.message })
                    }
                }).catch(err => console.log(err))
            }

            else {
                this.setState({ message_err: "Location already exist !" })
            }
        }
    }

    get_loc() {
        this.props.actions.get_loc().then((res) => {
            let array = res.data
            let new_arr = []
            if (array.length > 0) {
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    element.value = i
                    new_arr.push(element)
                }
                this.setState({
                    cities: new_arr,
                })
            }
        })
    }

    del_loc(item) {
        const { selected_city, locations_arr } = this.state
        const _id = selected_city._id
        var index = locations_arr.indexOf(item);
        locations_arr.splice(index, 1)
        this.setState({
            locations_arr: locations_arr
        })
        this.props.actions.del_loc({
            _id: _id,
            locations: locations_arr
        }).then((res) => {
            this.get_loc()
        })
    }

    edt_loc() {
        const { index, Locations, locations_arr, selected_city } = this.state
        const _id = selected_city._id

        locations_arr[index] = { label: Locations }
        this.setState({
            locations_arr: locations_arr
        })
        this.props.actions.edt_loc({
            _id: _id,
            locations: locations_arr
        }).then((res) => {
            console.log(res);
            this.get_loc()
            this.setState({
                edit: false,
                Locations: '',
            })
        })
    }

    edt_loc_data(item, i) {
        this.setState({
            edit: true,
            Locations: item.label,
            _id: item._id,
            index: i
        })
    }

    handleChangeCit = (ev) => {
        console.log(ev);
        this.setState({ selected_city: ev });
        if (ev.locations !== null) {
            this.setState({
                locations_arr: ev.locations
            })
        }
        else {
            this.setState({ locations_arr: [] })
        }
    }

    componentDidMount() {
        this.get_loc()
    }

    value(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { locations_arr, edit, cities, selected_city } = this.state
        return (
            <>
                {this.state.message_err && <div className="alert alert-danger" >{this.state.message_err}</div>}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-search-input">
                            <div className="main-search-input-item category">
                                <Select
                                    value={this.selected_city}
                                    onChange={this.handleChangeCit.bind(this)}
                                    placeholder="Select a City"
                                    options={cities}
                                />
                            </div>
                            <div className="main-search-input-item ">
                                <div className="contact-form-action">
                                    <div className='form-group mb-0'>
                                        <input value={this.state.Locations} name='Locations' onChange={this.value.bind(this)} className="form-control" type="text" placeholder="Inter Location" />
                                    </div>
                                </div>
                            </div>
                            <div className="main-search-input-btn">
                                {!edit && <button className="button theme-btn" type="button" onClick={this.add_loc.bind(this)} >Add Location</button>} {edit && <button className="button theme-btn" type="button" onClick={this.edt_loc.bind(this)} >Update Location</button>}
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-group">
                    {locations_arr.map((item, i) => {
                        return (
                            <div key={i} className="list-group-item shadow-sm p-3 mb-2 bg-white rounded" >
                                <div className="shadow-2px margin-5px row">
                                    <span className="col-lg-8">
                                        <span className='btn col-lg-3 text-left font-weight-bold' >{item.label}</span>
                                        <span className='btn col-lg-2 font-weight-bold' >{selected_city.label}</span>
                                    </span>
                                    <span className="col-lg-4 text-right">
                                        <span className="btn delete-btn" onClick={this.del_loc.bind(this, item)} >Delete</span>
                                        <span className="btn edit-btn" onClick={this.edt_loc_data.bind(this, item, i)} >Edit</span>
                                    </span>
                                </div>
                            </div>
                        )
                    })}

                </ul>
            </>
        )
    }
}


const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            add_loc,
            get_loc,
            del_loc,
            edt_loc,
            get_cit
        }, dispatchEvent),
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.search_res
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLocations)