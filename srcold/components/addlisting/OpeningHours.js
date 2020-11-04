import React, { Component } from 'react';
import Select from "react-select";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ope_hrs } from '../../store/action';

const shortby = [
    {
        value: 2,
        label: '1:00am'
    },
    {
        value: 2,
        label: '2:00am'
    },
    {
        value: 3,
        label: '3:00am'
    },
    {
        value: 4,
        label: '4:00am'
    },
    {
        value: 5,
        label: '5:00am'
    },
    {
        value: 6,
        label: '6:00am'
    },
    {
        value: 7,
        label: '7:00am'
    },
    {
        value: 8,
        label: '8:00am'
    },
    {
        value: 9,
        label: '9:00am'
    },
    {
        value: 10,
        label: '10:00am'
    },
    {
        value: 11,
        label: '11:00am'
    },
    {
        value: 12,
        label: '12:00pm'
    },
    {
        value: 13,
        label: '1:00pm'
    },
    {
        value: 14,
        label: '2:00pm'
    },
    {
        value: 15,
        label: '3:00pm'
    },
    {
        value: 16,
        label: '4:00pm'
    },
    {
        value: 17,
        label: '5:00pm'
    },
    {
        value: 18,
        label: '6:00pm'
    },
    {
        value: 19,
        label: '7:00pm'
    },
    {
        value: 20,
        label: '8:00pm'
    },
    {
        value: 21,
        label: '9:00pm'
    },
    {
        value: 22,
        label: '10:00pm'
    },
    {
        value: 23,
        label: '11:00pm'
    },
    {
        value: 24,
        label: '12:00am'
    },
]
class OpeningHours extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedHours: null,
            title: 'Opening Hours',
            opping_hours: {
                mon_ope_time: null,
                mon_clo_time: null,
                tue_ope_time: null,
                tue_clo_time: null,
                wed_ope_time: null,
                wed_clo_time: null,
                thu_ope_time: null,
                thu_clo_time: null,
                fri_ope_time: null,
                fri_clo_time: null,
                sat_ope_time: null,
                sat_clo_time: null,
                sun_ope_time: null,
                sun_clo_time: null,
            }
        }
    }

    mon_ope_time_val(e) {

        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.mon_ope_time = e;
            return { opping_hours };
        })
    }

    mon_clo_time_val(e) {

        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.mon_clo_time = e;
            return { opping_hours };
        })
    }

    tue_ope_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.tue_ope_time = e;
            return { opping_hours };
        })

    }

    tue_clo_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.tue_clo_time = e;
            return { opping_hours };
        })
    }

    wed_ope_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.wed_ope_time = e;
            return { opping_hours };
        })
    }

    wed_clo_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.wed_clo_time = e;
            return { opping_hours };
        })
    }

    thu_ope_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.thu_ope_time = e;
            return { opping_hours };
        })
    }

    thu_clo_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.thu_clo_time = e;
            return { opping_hours };
        })
    }

    fri_ope_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.fri_ope_time = e;
            return { opping_hours };
        })
    }

    fri_clo_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.fri_clo_time = e;
            return { opping_hours };
        })
    }

    sat_ope_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.sat_ope_time = e;
            return { opping_hours };
        })
    }

    sat_clo_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.sat_clo_time = e;
            return { opping_hours };
        })
    }

    sun_ope_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.sun_ope_time = e;
            return { opping_hours };
        })
    }

    sun_clo_time_val(e) {
        this.setState(prevState => {
            let opping_hours = Object.assign({}, prevState.opping_hours);
            opping_hours.sun_clo_time = e;
            return { opping_hours };
        })
    }

    componentDidUpdate() {
        const { opping_hours } = this.state
        this.props.actions.ope_hrs(opping_hours)
    }

    render() {
        return (
            <>
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
                                            <label className="label-text">Monday</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.mon_ope_time}
                                                name='mon_ope_time'
                                                onChange={this.mon_ope_time_val.bind(this)}
                                                placeholder="Opening Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.mon_clo_time}
                                                name='mon_clo_time'
                                                onChange={this.mon_clo_time_val.bind(this)}
                                                placeholder="Closing Time"
                                                options={shortby}

                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Tuesday</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.tue_ope_time}
                                                onChange={this.tue_ope_time_val.bind(this)}
                                                placeholder="Opening Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.tue_clo_time_val.bind(this)}
                                                placeholder="Closing Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Wednesday</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.wed_ope_time_val.bind(this)}
                                                placeholder="Opening Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.wed_clo_time_val.bind(this)}
                                                placeholder="Closing Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Thursday</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.thu_ope_time_val.bind(this)}
                                                placeholder="Opening Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.thu_clo_time_val.bind(this)}
                                                placeholder="Closing Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Friday</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.fri_ope_time_val.bind(this)}
                                                placeholder="Opening Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.fri_clo_time_val.bind(this)}
                                                placeholder="Closing Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Saturday</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.sat_ope_time_val.bind(this)}
                                                placeholder="Opening Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.sat_clo_time_val.bind(this)}
                                                placeholder="Closing Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Sunday</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.sun_ope_time_val.bind(this)}
                                                placeholder="Opening Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.sun_clo_time_val.bind(this)}
                                                placeholder="Closing Time"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            ope_hrs
        }, dispatchEvent),
    }
}


export default connect(null, mapDispatchToProps)(OpeningHours);