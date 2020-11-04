import React, { Component } from 'react';
import { add_cit, del_cit, edt_cit, get_loc } from '../../store/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddCities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: '',
            message_err: '',
            cities_arr: [],
            edit: false,
            _id: '',
        }
    }



    add_cit() {
        const category_title = { label: this.state.cities }
        if (this.state.cities.length < 1) {
            this.setState({ message_err: 'Please Inter City Name !' })
        }
        else {
            this.setState({
                cities: ''
            })
            this.props.actions.add_cit(category_title).then((res) => {
                const response = res.data
                this.get_loc()
                if (response.message) {
                    this.setState({ message_err: '' })
                }
            }).catch(err => console.log(err))
        }
    }

    get_loc() {
        this.props.actions.get_loc().then((res) => {
            this.setState({
                cities_arr: res.data
            })
        })
    }

    del_cit(_id) {
        this.props.actions.del_cit({ _id: _id }).then((res) => {
            this.get_loc()
        })
    }

    edt_cit() {
        this.props.actions.edt_cit({ _id: this.state._id, label: this.state.cities }).then((res) => {
            this.get_loc()
            this.setState({
                edit: false,
                cities: '',
            })
        })
    }

    edt_cit_data(item) {
        this.setState({
            edit: true,
            cities: item.label,
            _id: item._id,
        })
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
        const { cities_arr, edit } = this.state
        return (
            <>
                {this.state.message_err && <div className="alert alert-danger" >{this.state.message_err}</div>}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-search-input">
                            <div className="main-search-input-item ">
                                <div className="contact-form-action">
                                    <div className='form-group mb-0'>
                                        <input value={this.state.cities} name='cities' onChange={this.value.bind(this)} className="form-control" type="text" placeholder="Inter City" />
                                    </div>
                                </div>
                            </div>
                            <div className="main-search-input-btn">
                                {!edit && <button className="theme-btn border-0" type="button" onClick={this.add_cit.bind(this)} >Add City</button>} {edit && <button className="theme-btn border-0" type="button" onClick={this.edt_cit.bind(this)} >Update City</button>}
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-group">
                    {cities_arr.map((item, i) => {
                        return (
                            <div key={i} className="list-group-item shadow-sm p-3 mb-2 bg-white rounded" >
                                <div className="shadow-2px margin-5px row">
                                    <span className="col-lg-8 text-left">
                                        <span className='btn font-weight-bold' >{item.label}</span>
                                    </span>
                                    <span className="col-lg-4 text-right">
                                        <span className="btn delete-btn" onClick={this.del_cit.bind(this, item)} >Delete</span>
                                        <span className="btn edit-btn" onClick={this.edt_cit_data.bind(this, item, i)} >Edit</span>
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
            add_cit,
            del_cit,
            edt_cit,
            get_loc
        }, dispatchEvent),
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.search_res
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCities)