import React, { Component } from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiPhone, FiExternalLink } from 'react-icons/fi'
import { connect } from 'react-redux';
import phone from './Images/phone.png'

class ContactInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Contact Information',
            address: '38/3 Islamia College Road, Khulna',
            number: '+8801923062028',

        }
    }
    componentDidMount() {
        const details = this.props.item
        if (details !== undefined) {
            this.setState({
                number: details.user_number,
                address: details.location + ' ' + details.city
            })
        }
    }
    render() {
        return (
            <>
                <div className=''>
                    <div className="contact-listing">
                        {/* <h2 className="widget-title">
                            {this.state.title}
                        </h2> */}
                        <div className="info-list margin-top-5px padding-bottom-5px">
                            <ul>
                                {/* {this.state.address ? (
                                    <li> Location:  {this.state.address}</li>

                                ) : ''} */}

                                {this.state.number ? (
                                    <li><img src={phone} alt='phone' width='45' />  {this.state.number}</li>

                                ) : ''}

                            </ul>
                        </div>

                    </div>
                    {/* <div className="section-block"></div>
                    <div className="social-contact padding-top-40px">
                        {this.state.socials.map((item, i) => {
                            return (
                                <a key={i} href={item.url} className={'theme-btn ' + item.title + '-link'}>
                                    <i className="d-inline-block">{item.icon}</i> {item.title}
                                </a>
                            )
                        })}
                    </div> */}
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        item: state.listing_details
    }
}

export default connect(mapStateToProps, null)(ContactInfo);