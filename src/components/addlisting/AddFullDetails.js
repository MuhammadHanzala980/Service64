import React, { Component } from 'react';
import { AiOutlineUser, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { BsLink45Deg, BsPencil } from 'react-icons/bs'
import { TiSocialGooglePlus } from 'react-icons/ti'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { val } from '../../store/action';

class AddFullDetails extends Component {

    constructor(props) {
        super()
        this.state = {
            owner_name: '',
            user_email: '',
            phone_number: '',
            website: '',
            facebook_link: '',
            twitter_link: '',
            google_plus_link: '',
            linkedin_link: '',
            description_full: '',
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
                        <h3 className="widget-title pb-0">Contact Details</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    {/* <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Owner Name</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                                <input className="form-control" type="text" name="owner_name" value={this.state.owner_name} onChange={this.value.bind(this)} placeholder="Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Email</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FaRegEnvelope />
                                                </span>
                                                <input className="form-control" type="email" name="user_email" value={this.state.user_email} onChange={this.value.bind(this)} placeholder="Email address" />
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Phone Number</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FiPhone />
                                                </span>
                                                <input className="form-control" type="text" name="phone_number" value={this.state.phone_number} onChange={this.value.bind(this)} placeholder="Number" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Website <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsLink45Deg />
                                                </span>
                                                <input className="form-control" type="text" name="website" value={this.state.website} onChange={this.value.bind(this)} placeholder="https://example.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Facebook Link <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineFacebook />
                                                </span>
                                                <input className="form-control" type="text" name="facebook_link" value={this.state.facebook_link} onChange={this.value.bind(this)} placeholder="https://www.facebook.com/" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Twitter Link <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineTwitter />
                                                </span>
                                                <input className="form-control" type="text" name="twitter_link" value={this.state.twitter_link} onChange={this.value.bind(this)} placeholder="https://www.twitter.com/" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Google Plus <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <TiSocialGooglePlus />
                                                </span>
                                                <input className="form-control" type="text" name="google_plus_link" value={this.state.google_plus_link} onChange={this.value.bind(this)} placeholder="https://plus.google.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Linkedin Link <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineLinkedin />
                                                </span>
                                                <input className="form-control" type="text" name="linkedin_link" value={this.state.linkedin_link} onChange={this.value.bind(this)} placeholder="https://linkedin.com" />
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
                                                <textarea className="message-control form-control" name="description_full" value={this.props.description_full} onChange={this.value.bind(this)} placeholder="Write description"></textarea>
                                            </div>
                                        </div>
                                    </div> */}
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


export default connect(null, mapDispatchToProps)(AddFullDetails);