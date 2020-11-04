import React, { Component } from 'react';
import { FiEdit } from 'react-icons/fi'
import { FaDollarSign } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { val } from '../../store/action';

class AddPrice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pricing_title: '',
            price: '',
            description_pricing: '',
        }
    }

    value(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.actions.val(e.target)
    }

    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">Pricing</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Title</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FiEdit />
                                                </span>
                                                <input className="form-control" type="text" name="pricing_title" value={this.state.pricing_title} onChange={this.value.bind(this)} placeholder="Title" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Price</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FaDollarSign />
                                                </span>
                                                <input className="form-control" type="text" name="price" value={this.state.price} onChange={this.value.bind(this)} placeholder="USD Price" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Description</label>
                                            <div className="form-group mb-0">
                                                <span className="la form-icon">
                                                    <BsPencil />
                                                </span>
                                                <textarea className="message-control form-control" name="description_pricing" value={this.state.description_pricing} onChange={this.value.bind(this)} placeholder="Write description"></textarea>
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
            val
        }, dispatchEvent),
    }
}

export default connect(null, mapDispatchToProps)(AddPrice);