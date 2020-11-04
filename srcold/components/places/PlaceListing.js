import React, { Component } from 'react';
import { IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { GiChickenOven } from "react-icons/gi";
import { RiHotelBedLine, RiPlaneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { get_listing, listing_details } from '../../store/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// JB 
////// https://stackoverflow.com/jobs/apply/433596?reset=False&oqs=so_medium%3DAd%26so_source%3DJobAd%26so_campaign%3DRemoteBlue%26med%3Dclc%26clc-var%3D25

class PlaceListing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    bedge: 'New Open',
                    title: 'Favorite Place Food Bank',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img28.jpg'),
                    cardType: 'Restaurant',
                    cardTypeIcon: <GiChickenOven />,
                    author: require('../../assets/images/small-team1.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '204',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.5'
                },
                {
                    bedge: 'Closed',
                    title: 'beach blue boardwalk',
                    titleIcon: '',
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img29.jpg'),
                    cardType: 'Travel',
                    cardTypeIcon: <RiPlaneLine />,
                    author: require('../../assets/images/small-team2.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '248',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.6'
                },
                {
                    bedge: 'New Open',
                    title: 'Hotel Govendor',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img30.jpg'),
                    cardType: 'Hotel',
                    cardTypeIcon: <RiHotelBedLine />,
                    author: require('../../assets/images/small-team3.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '248',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.6'
                },
                {
                    bedge: 'New Open',
                    title: 'Favorite Place Food Bank',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img25.jpg'),
                    cardType: 'Restaurant',
                    cardTypeIcon: <GiChickenOven />,
                    author: require('../../assets/images/small-team1.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '204',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.5'
                },
                {
                    bedge: 'Closed',
                    title: 'beach blue boardwalk',
                    titleIcon: '',
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img26.jpg'),
                    cardType: 'Travel',
                    cardTypeIcon: <RiPlaneLine />,
                    author: require('../../assets/images/small-team2.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '248',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.6'
                },
                {
                    bedge: 'New Open',
                    title: 'Hotel Govendor',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img27.jpg'),
                    cardType: 'Hotel',
                    cardTypeIcon: <RiHotelBedLine />,
                    author: require('../../assets/images/small-team3.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '248',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.6'
                },
            ] || [],
            listing: []
        }
    }
    componentDidMount() {
        this.props.actions.get_listing()
            .then((res) => {
                console.log(res.data);
                this.setState({
                    listing: res.data
                })
            })

    }

    get_listing_detailes(details) {
        this.props.actions.listing_details(details)
        const history = this.props.history
        history.push('/profile')
    }

    componentWillReceiveProps(prop) {
        console.log(prop.item);
        if (prop.item.length > 0) {
            console.log('Kam hey');
            this.setState({
                // item: [],
                listing: prop.item,
                loading: false,
                search_res_emty: false,

            })
        }
        else {
            this.setState({
                search_res_emty: prop.item.message,
            })
        }
    }

    render() {
        const { items } = this.state
        return (
            <>
                {this.state.listing.map((item, i) => {
                    return (
                        <div className="card-item card-listing d-flex" key={i}>
                            <div onClick={this.get_listing_detailes.bind(this, item)} className="card-image-wrap" style={{ cursor: 'pointer' }} >
                                <div className="card-image">
                                    <img src={item.saller_img} className="card__img" alt="Place" />
                                    <span className={items[0].titleIcon ? 'badge' : 'badge badge-closed'}>{items[0].bedge}</span>
                                    <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                        <FiHeart />
                                    </span>
                                </div>
                            </div>
                            <div className="card-content-wrap">
                                <div className="card-content">
                                    <h5 className="card-meta">
                                        <span>{items[0].cardTypeIcon}</span> {item.category}
                                    </h5>
                                    <h4 className="card-title">{item.saller_name}<i> {items[0].titleIcon}</i>
                                    </h4>
                                    <p className="card-sub">
                                        {item.location + ' ' + item.city}
                                    </p>
                                    {/* </Link> */}
                                    {/* <a href={items[0].authorUrl} className="author-img">
                                        <img src={items[0].author} alt="author-img" />
                                    </a> */}
                                    <ul className="info-list padding-top-20px">
                                        <li><span className="la d-inline-block"><FiPhone /></span> {item.phone_number}</li>
                                        {/* <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={items[0].websiteUrl}>
                                            {item.website}
                                        </a>
                                        </li> */}
                                        <li>
                                            <span className="la d-inline-block"><FaRegCalendarCheck /></span> {items[0].date}
                                        </li>
                                        <li>
                                            <p className="card-text">{item.description}</p>

                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="rating-row">
                                    <div className="rating-rating">
                                        {items[0].ratings.map((rating, j) => {
                                            return (
                                                <span key={j}>{rating}</span>
                                            )
                                        })}
                                        <span className="rating-count">{items[0].ratingNum}</span>
                                    </div>
                                    <div className="listing-info">
                                        <ul>
                                            <li>
                                                <span className="info__count"><AiOutlineEye /></span> {items[0].view}
                                            </li>
                                            <li>
                                                <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                                                    <FiHeart />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}


const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            get_listing, listing_details
        }, dispatchEvent),
    }
}
const mapStateToProps = (state) => {
    return {
        item: state.search_res
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaceListing); 