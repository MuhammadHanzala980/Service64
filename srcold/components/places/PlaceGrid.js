import React, { Component } from 'react';
import { IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { GiChickenOven } from "react-icons/gi";
import { RiHotelBedLine, RiPlaneLine } from "react-icons/ri";
import { FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { BsExclamationTriangle } from "react-icons/bs";

import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap'
import { get_listing, listing_details } from '../../store/action'
import { bindActionCreators } from 'redux';

class PlaceGrid extends Component {
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
            ],
            item: [],
            loading: true,
            search_res_emty: false
        }
    }
    componentDidMount() {
        let search_res = this.props.item

        if (search_res !== undefined) {
            if (search_res.data === null) {
                this.props.actions.get_listing()
                    .then((res) => {
                        this.setState({ item: res.data, loading: false, search_res_emty: search_res.message })
                    })
            }
            else {
                this.setState({ item: search_res, loading: false, })
            }
        }
        else {
        this.props.actions.get_listing()
            .then((res) => {
                console.log(res, '>>>>>');
                this.setState({ item: res.data, loading: false, })
            })
        }

    }
    get_listing_detailes(details) {
        this.props.actions.listing_details(details)
        const history = this.props.history
        history.push('/profile')
    }
    componentWillReceiveProps(prop) {
        if (prop.item !== undefined) {
            if (prop.item.length > 0) {
                this.setState({
                    item: prop.item,
                    loading: false,
                    search_res_emty: false,
                })
            }
            else {
                this.props.actions.get_listing()
                    .then((res) => {
                        this.setState({
                            item: res.data,
                            loading: false,
                            search_res_emty: prop.item.message,
                        })
                    })
            }
        }
    }

    render() {
        const { item, loading, search_res_emty } = this.state
        return (
            <>
                {search_res_emty && <div style={{ textAlign: 'center', width: '100%', margin: '50px 0px' }} > <h2>{search_res_emty} <BsExclamationTriangle /> </h2> </div>}
                <br />
                {loading ? (
                    <div style={{ textAlign: 'center', width: '100%' }} >
                        <span>
                            <Spinner animation="grow" id='loder' />
                        </span>
                    </div>
                ) : (
                        <>
                            {item.map((items, index) => {
                                return (
                                    <div className="col-lg-4 column-td-6" key={index}>
                                        <div className="card-item">
                                            <div onClick={this.get_listing_detailes.bind(this, items)} className="card-image-wrap" style={{ cursor: 'pointer' }}>
                                                <div className="card-image" style={{overflow: 'hidden' }}>
                                                    <img src={items.seller_img} className="card__img" alt="Profile-Photo" />                                                    
                                                </div>
                                            </div>
                                            <div className="card-content-wrap">
                                                <div className="card-content">
                                                    <div onClick={this.get_listing_detailes.bind(this, items)} style={{ cursor: 'pointer' }}>
                                                        <h4 className="card-title">{items.fullname}
                                                            <i>   {this.state.items[0].titleIcon}</i>
                                                        </h4>

                                                        <h5 className="card-meta">
                                                           Category:  {items.category}
                                                        </h5>
                                                        
                                                        <p className="card-sub">
                                                            Location: {items.location + ", " + items.city}
                                                        </p>
                                                    </div>
                                                    {/* <a href={this.state.items[0].authorUrl} className="author-img">
                                                        <img src={this.state.items[0].author} alt="author-img" />
                                                    </a> */}
                                                    <ul className="info-list padding-top-20px">
                                                        
                                                        {/* <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={this.state.items[0].websiteUrl}>
                                                            {this.state.items[0].website}
                                                        </a>
                                                        </li> */}
                                                        {/* <li>
                                                            <span className="la d-inline-block"><FaRegCalendarCheck /></span> {this.state.items[0].date}
                                                        </li> */}
                                                        <li className="info-list">
                                                            {items.description.slice(0, 120)} .....
                                                        {/* <p className="card-text">{}</p> */}
                                                        </li>
                                                        

                                                        
                                                    </ul>
                                                </div>
                                                <div className="rating-row">
                                                    <div className="rating-rating">
                                                        {this.state.items[0].ratings.map((rating, index) => {
                                                            return (
                                                                <span key={index}>{rating}</span>
                                                            )
                                                        })}
                                                        <span className="rating-count">{this.state.items[0].ratingNum}</span>
                                                    </div>
                                                    <div className="listing-info">
                                                        <ul>
                                                            <li><span className="info__count"><AiOutlineEye /></span> {this.state.items[0].view}</li>
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
                                    </div>
                                )
                            })}
                        </>
                    )}
            </>
        )


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
        item: state.search_res,
        loading_control: state.loading_control
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceGrid);