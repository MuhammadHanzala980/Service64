import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {get_amenities} from '../../store/action';
class Amenities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Security Cameras'
                },
                {
                    id: 2,
                    title: 'Elevator in Building'
                },
                {
                    id: 3,
                    title: 'Wireless Internet'
                },
                {
                    id: 4,
                    title: 'Wheelchair Accessible'
                },
                {
                    id: 5,
                    title: 'Laundry Room in Building'
                },
                {
                    id: 6,
                    title: 'Alarm System'
                },
                {
                    id: 7,
                    title: 'Smoking Allowed'
                },
                {
                    id: 8,
                    title: 'Free Parking on Street'
                },
                {
                    id: 9,
                    title: 'Friendly Workspace'
                },
                {
                    id: 10,
                    title: 'Electricity'
                },
                {
                    id: 11,
                    title: 'Attached Garage'
                },
                {
                    id: 12,
                    title: 'Bike Parking'
                },
                {
                    id: 13,
                    title: 'Telephone'
                },
            ],
            arr: [],
            amenities: []
        }
    }

    handleChange(e) {
        const { arr } = this.state
        let isChecked = e.target.value;
        var index = arr.indexOf(isChecked);
        if (index === -1) {
            arr.push(isChecked);
            this.props.actions.get_amenities(arr)
        }
        else {
            arr.splice(index, 1)
            this.props.actions.get_amenities(arr)
        }



    }

    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">Amenities</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">

                        {this.state.items.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb' + item.id} onChange={this.handleChange.bind(this)} value={item.title} />
                                    <label htmlFor={'chb' + item.id}> {item.title}</label>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            get_amenities
        }, dispatchEvent),
    }
}

export default connect(null, mapDispatchToProps)(Amenities);

