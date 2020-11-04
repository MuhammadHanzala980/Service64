import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Spinner } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import { BsListCheck, BsBookmark, BsPencil } from 'react-icons/bs'
import { FaRegEdit, FaRegTrashAlt, FaGlobeAmericas, FaRegEnvelope } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone, FiEdit } from 'react-icons/fi'
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
import Button from "../../components/common/Button";
import $ from 'jquery'
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get_listing_usr, del_listing, listing_details } from '../../store/action';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
            cards: [
                {
                    img: require('../../assets/images/img25.jpg'),
                    title: 'Favorite Place Food Bank',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img26.jpg'),
                    title: 'Beach Blue Boardwalk',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img27.jpg'),
                    title: 'Hotel Govendor',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img28.jpg'),
                    title: 'Favorite Place Food Bank',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img29.jpg'),
                    title: 'Beach Blue Boardwalk',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img30.jpg'),
                    title: 'Hotel Govendor',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                }
            ],
            userImg: require('../../assets/images/team2.jpg'),
            userName: '',
            userbio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            address: '101 Parkview, New York',
            phoneNum: '+7(111)123456789',
            website: 'www.techydevs.com',
            user_id: '',
            loading: true,
            items: [],
            item_del_id: '',
            is_logedin: '',
            user_type: false
        }
    }

    componentDidMount() {
        const current_user = JSON.parse(localStorage.getItem('__current_user__'))
        if (current_user !== null) {
            this.setState({
                user_id: current_user._id,
                is_logedin: true,
                userName: current_user.fullname,
            })
            if (current_user.user_type === "Seller") {
                this.setState({
                    user_type: true
                })
                this.props.actions.get_listing_usr({ _id: current_user._id })
                    .then((res) => {
                        this.setState({
                            items: res.data,
                            loading: false,
                            
                        })
                    })
            }
        }
        else {
            this.setState({
                loading: false,
                is_logedin: false,
            })
        }

        $(document).on('click', '.delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn', function (e) {
            $('body').addClass('modal-open').css({ paddingRight: '17px' });
            $(".account-delete-modal").addClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.account-delete-modal .modal-bg, .account-delete-modal .modal-dialog .btn-box .theme-btn', function (e) {
            $('body').removeClass('modal-open').css({ paddingRight: '0' });
            $(".account-delete-modal").removeClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.user-edit-form .edit-form-btn, .user-edit-form .btn-box .theme-btn', function (e) {
            $(".user-edit-form .dropdown-menu, .user-edit-form .dropdown").toggleClass('show');
            $(".user-edit-form .dropdown-menu").css({ position: 'absolute', transform: 'translate3d(0px, -733px, 0px)', top: '0', left: '0', willChange: 'transform' })
            e.preventDefault();
        });
    }

    get_del_id(id) {
        this.setState({
            item_del_id: id
        })
    }

    item_del() {
        const { item_del_id } = this.state
        console.log(item_del_id);
        this.props.actions.del_listing({ _id: item_del_id })
            .then((response) => {
                console.log('response');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    get_listing_detailes(details) {
        this.props.actions.listing_details(details)
        const history = this.props.history
        console.log(details);
        history.push('/profile')
    }

    render() {
        const { loading, cards, items, is_logedin, user_type } = this.state
        return (
            <main className="dashboard-page">
                <GeneralHeader />
                <Breadcrumb CurrentPgTitle="Dashboard" MenuPgTitle="pages" img={this.state.breadcrumbimg} />
                <section className="dashboard-area padding-top-40px padding-bottom-90px">
                    <div className="container">
                        <Tabs>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                                        <TabList className="nav nav-tabs border-0" id="nav-tab">
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsListCheck /></span> Listings
                                                </Link>
                                            </Tab>
                                            {/* <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><AiOutlineUser /></span> Profile
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span> Bookmark
                                                </Link>
                                            </Tab> */}
                                        </TabList>
                                        <div className="btn-box">
                                            {/* <Link to="/add-listing" className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span> create listing</Link> */}
                                            <Link to="/" className="theme-btn ml-1"><span className="la"><AiOutlinePoweroff /></span> sign out</Link>
                                        </div>
                                    </div>
                                </div>
                                {!is_logedin && <div style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}> <div style={{ width: '30%' }} className="alert alert-dark" role="alert"> <Link to={'/login'}> Click here to sign in </Link></div></div>}

                                <div className="col-lg-12">
                                    {user_type &&
                                        <div className="tab-content" id="nav-tabContent">
                                            <TabPanel>
                                                <div className="row">
                                                    {loading ? (
                                                        <div style={{ textAlign: 'center', width: '100%' }} >
                                                            <span>
                                                                <Spinner animation="grow" id='loder' />
                                                            </span>
                                                        </div>
                                                    ) : (
                                                            <>
                                                                {items.map((item, i) => {
                                                                    return (
                                                                        <div key={i} className="col-lg-4 column-td-6">
                                                                            <div className="card-item">
                                                                                <div onClick={this.get_listing_detailes.bind(this, item)} className="card-image-wrap" style={{ cursor: 'pointer' }}>
                                                                                    <div className="card-image">
                                                                                        <img src={item.seller_img} className="card__img" alt="Card" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="card-content-wrap">
                                                                                    <div className="card-content">
                                                                                        <div onClick={this.get_listing_detailes.bind(this, item)} style={{ cursor: 'pointer' }}>
                                                                                            <h4 className="card-title mt-0">{item.fullname}</h4>
                                                                                            <p className="card-sub">{item.location + ' ' + item.city}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="rating-row">
                                                                                        <div className="edit-info-box">
                                                                                            {/* <button type="button" className="theme-btn button-success border-0 mr-1">
                                                                                            <span className="la">{cards[0].editIcon}</span> {cards[0].editTxt}
                                                                                        </button> */}
                                                                                            <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" onClick={this.get_del_id.bind(this, item._id)} data-target=".product-delete-modal">
                                                                                                <span className="la">{cards[0].deleteIcon}</span> {cards[0].deleteTxt}
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </>)}
                                                </div>
                                            </TabPanel>
                                            {/* <TabPanel>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="user-profile-action">
                                                        <div className="user-pro-img mb-4">
                                                            <img src={this.state.userImg} alt="user" />
                                                            <div className="dropdown">
                                                                <button
                                                                    className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                                                    type="button" id="editImageMenu"
                                                                    data-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <i className="la la-photo"></i> Edit
                                                                </button>
                                                                <div className="dropdown-menu"
                                                                    aria-labelledby="editImageMenu">
                                                                    <div className="upload-btn-box">
                                                                        <form>
                                                                            <input type="file" name="files[]" id="filer_input" multiple="multiple" />
                                                                            <button className="theme-btn border-0 w-100 button-success" type="submit" value="submit">
                                                                                Save changes
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                    <div className="btn-box mt-3">
                                                                        <button className="theme-btn border-0 w-100">Remove
                                                                        Photo
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="user-details">
                                                            <h2 className="user__name widget-title pb-2">
                                                                {this.state.userName}
                                                            </h2>
                                                            <div className="section-heading">
                                                                <p className="sec__desc font-size-15 line-height-24">
                                                                    {this.state.userbio}
                                                                </p>
                                                            </div>
                                                            <ul className="list-items mt-3">
                                                                <li>
                                                                    <span className="la d-inline-block"><GiPositionMarker /></span> {this.state.address}
                                                                </li>
                                                                <li className="text-lowercase">
                                                                    <span className="la d-inline-block"><FiPhone /></span> {this.state.phoneNum}
                                                                </li>
                                                                <li className="text-lowercase">
                                                                    <span className="la d-inline-block"><FaGlobeAmericas /></span> {this.state.website}
                                                                </li>
                                                            </ul>
                                                            <div className="user-edit-form mt-4">
                                                                <div className="dropdown">
                                                                    <button
                                                                        className="theme-btn edit-form-btn shadow-none w-100 dropdown-toggle after-none"
                                                                        type="button" id="editForm"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                        <i className="la"><FiEdit /></i> Edit
                                                                    </button>
                                                                    <div className="dropdown-menu" aria-labelledby="editForm">
                                                                        <div className="contact-form-action">
                                                                            <div className="input-box">
                                                                                <label className="label-text">Name</label>
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><AiOutlineUser /></span>
                                                                                    <input className="form-control" type="text" name="name" placeholder="Enter your name" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <label className="label-text">Bio Data</label>
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                                    <textarea className="message-control form-control" name="message" placeholder="Add a bio"></textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><GiPositionMarker /></span>
                                                                                    <input className="form-control" type="text" name="location" placeholder="Location" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><FiPhone /></span>
                                                                                    <input className="form-control" type="text" name="number" placeholder="Number" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><FaRegEnvelope /></span>
                                                                                    <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><AiOutlineYoutube /></span>
                                                                                    <input className="form-control" type="text" name="youtube" placeholder="Youtube URL" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><FaGlobeAmericas /></span>
                                                                                    <input className="form-control" type="text" name="website" placeholder="Website" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="btn-box">
                                                                                <button type="button" className="theme-btn border-0 button-success mr-1">
                                                                                    save changes
                                                                                </button>
                                                                                <button type="button" className="theme-btn border-0">
                                                                                    Cancel
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="user-form-action">
                                                        <div className="billing-form-item">
                                                            <div className="billing-title-wrap">
                                                                <h3 className="widget-title pb-0">Change Password</h3>
                                                                <div className="title-shape margin-top-10px"></div>
                                                            </div>
                                                            <div className="billing-content">
                                                                <div className="contact-form-action">
                                                                    <form>
                                                                        <div className="input-box">
                                                                            <label className="label-text">Current Password</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="Current Password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <label className="label-text">New Password</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="New Password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <label className="label-text">Confirm New Password</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="Confirm New Password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <button className="theme-btn button-success border-0">
                                                                                updated password
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="delete-account-info">
                                                        <div className="billing-form-item">
                                                            <div className="billing-title-wrap">
                                                                <h3 className="widget-title pb-0 color-text">Delete Account</h3>
                                                                <div className="title-shape margin-top-10px"></div>
                                                            </div>
                                                            <div className="delete-info-content p-4">
                                                                <p className="mb-3">
                                                                    <span className="text-warning">Warning:</span> Once you delete your account, there is no going back. Please be certain.
                                                                </p>
                                                                <Button text="delete my account" url="#" className="delete-account border-0" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel> */}
                                            {/* <TabPanel>
                                            <div className="row">
                                                {items.map((item, i) => {
                                                    return (
                                                        <div key={i} className="col-lg-4 column-td-6">
                                                            <div className="card-item">
                                                                <Link to={cards[0].cardLink} className="card-image-wrap">
                                                                    <div className="card-image">
                                                                        <img src={cards[0].img} className="card__img" alt="Card" />
                                                                    </div>
                                                                </Link>
                                                                <div className="card-content-wrap">
                                                                    <div className="card-content">
                                                                        <Link to={cards[0].cardLink}>
                                                                            <h4 className="card-title mt-0">{cards[0].title}</h4>
                                                                            <p className="card-sub">{cards[0].subtitle}</p>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="rating-row">
                                                                        <div className="edit-info-box">
                                                                            <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                                <span className="la">{cards[0].deleteIcon}</span> {cards[0].deleteTxt}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </TabPanel> */}
                                        </div>
                                    }
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </section>
                <NewsLetter />
                <Footer />
                <ScrollTopBtn />
                <div className="modal-form text-center">
                    <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                        <div className="modal-bg"></div>
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content p-4">
                                <div className="modal-top border-0 mb-4 p-0">
                                    <div className="alert-content">
                                        <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
                                        <h4 className="modal-title mt-2 mb-1">Your account will be deleted permanently!</h4>
                                        <p className="modal-sub">Are you sure to proceed.</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button type="button" onClick={this.item_del.bind(this)} className="theme-btn border-0 button-danger">
                                        delete!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        item: state,
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            get_listing_usr, del_listing, listing_details
        }, dispatchEvent),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);