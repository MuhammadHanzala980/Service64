import React, { Component } from 'react';
import { AiOutlineTags } from 'react-icons/ai'
import { BsPencilSquare, BsQuestion, BsPencil } from 'react-icons/bs'
import Select from "react-select";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { val } from '../../store/action';

const categories = [
    {
        value: 0,
        label: 'Select a category'
    },
    {
        value: 2,
        label: 'Shops'
    },
    {
        value: 3,
        label: 'Hotels'
    },
    {
        value: 4,
        label: 'Restaurants'
    },
    {
        value: 5,
        label: 'Fitness'
    },
    {
        value: 6,
        label: 'Travel'
    },
    {
        value: 7,
        label: 'Salons'
    },
    {
        value: 8,
        label: 'Event'
    },
    {
        value: 9,
        label: 'Business'
    },
]
class GeneralInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'General Information',
            selectedCatOp: null,
            saller_name: '',
            keywords: '',
            description: '',
            category: '',
        }
    }

    handleChangeCat = (val) => {
        this.setState({ selectedCatOp: val });
        const ct = { category: val.label, type: 'category' }
        console.log(ct);
        this.props.actions.val(ct)
    }

    value(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.props.actions.val(e.target)
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
                                            <label className="label-text">Seller Name</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsPencilSquare />
                                                </span>
                                                <input className="form-control" type="text" name="saller_name" value={this.state.saller_name} onChange={this.value.bind(this)} placeholder="Enter your Name" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text d-flex align-items-center ">Keywords
                                                <i className="la tip ml-1" data-toggle="tooltip" data-placement="top" title="Maximum of 15 keywords related with your business">
                                                    <BsQuestion />
                                                </i>
                                            </label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineTags />
                                                </span>
                                                <input className="form-control" type="text" name="keywords" value={this.state.keywords} onChange={this.value.bind(this)} placeholder="Keywords should be separated by commas" />
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Description</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsPencil />
                                                </span>
                                                <textarea className="message-control form-control" name="description" value={this.state.description} onChange={this.value.bind(this)} placeholder="Write your listing description"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Category</label>
                                            <div className="form-group mb-0">
                                                <Select
                                                    value={this.selectedCatOp}
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
            </>
        );
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            val,
        }, dispatchEvent),
    }
}



export default connect(null, mapDispatchToProps)(GeneralInfo);