import React, { Component } from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { FiPhone, FiExternalLink } from 'react-icons/fi'
import Button from "../../common/Button";

class WidgetAuthor extends Component {
    constructor(props) {
        super(props)
    const current_user = JSON.parse(localStorage.getItem('__current_user__')) || ''
        this.state = {
            authorImg: require('../../../assets/images/testi-img2.jpg'),
            name: current_user.firstName + ' ' + current_user.lastName || '',
            date: 'Joined 4 years ago' || '',
            address: '101 Parkview, New York' || '',
            number: '+7(111)123456789' || '',
            email: current_user.email || '',
            website: 'www.techydevs.com' || '',
            websiteUrl: 'https://techydevs.com' || '',
            socials: [
                {
                    icon: <FaFacebookF />,
                    url: 'https://facebook.com'
                },
                {
                    icon: <FaTwitter />,
                    url: 'https://twitter.com'
                },
                {
                    icon: <FaInstagram />,
                    url: 'https://instagram.com'
                },
                {
                    icon: <FaDribbble />,
                    url: 'https://dribbble.com'
                },
                {
                    icon: <FaBehance />,
                    url: 'https://behance.be'
                }
            ]
        }
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <div className="author-bio margin-bottom-30px">
                        <div className="d-flex align-items-center">
                            <img src={this.state.authorImg} alt="author" />
                            <div className="author-inner-bio">
                                <h4 className="author__title font-weight-bold pb-0 mb-1">
                                    {this.state.authorName}
                                </h4>
                                <p className="author__meta">
                                    {this.state.date}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="info-list">
                        <ul>
                            <li className="mb-2">
                                <i className="la"><GiPositionMarker /></i> {this.state.address}
                            </li>
                            <li className="mb-2">
                                <i className="la"><FaRegEnvelope /></i> <a href={'mailto:' + this.state.email}>
                                    {this.state.email}
                                </a>
                            </li>
                            <li className="mb-2">
                                <i className="la"><FiPhone /></i> {this.state.number}
                            </li>
                            <li className="mb-2">
                                <i className="la"><FiExternalLink /></i> <a href={this.state.websiteUrl}>{this.state.website}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section-block-2 margin-top-35px margin-bottom-35px"></div>
                    <ul className="social-profile margin-bottom-35px text-center">

                        {this.state.socials.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.url}>
                                        <i className="d-inline-block">
                                            {item.icon}
                                        </i>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="btn-box text-center">
                        <Button text="view Profile" url="/user-profile" className="d-block">
                            <span className="d-inline-block"><AiOutlineUser /></span>
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetAuthor;