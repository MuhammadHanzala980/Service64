import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { get_unapproved_listing, admin_delete_listing, approved_listing, get_approved_listing, unapproved_listing, add_cat } from '../../store/action'
import { FaRegEdit, FaRegTrashAlt, } from 'react-icons/fa'
import { FcDisapprove, FcApprove } from 'react-icons/fc'
// import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Categories from "./AddCategories"
import AddCities from "./AddCities"
import AddLocations from "./AddLocations"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Addmin_panel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            access: false, is_logedin: true, loading: true, unapprv: [], approv: [],
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
            appr: 'Approve',
            paus: 'Pause',
            emtpty_apr_listin: false,
            emtpty_unp_listin: false
        }
    }

    get_listing() {
        const { approv, unapprv } = this.state
        let app_arr = []
        let unp_arr = []
        this.props.actions.get_unapproved_listing()
            .then((res) => {
                this.setState({ loading: false, })
                let listing = res.data
                if (listing.length > 0) {
                    for (var k in listing) {
                        if (listing[k].approved !== true) {
                            unp_arr.push(listing[k])
                            this.setState({
                                unapprv: unp_arr,
                            })
                        }
                        else {
                            app_arr.push(listing[k])
                            this.setState({
                                approv: app_arr,
                            })
                        }
                    }
                }
                else {

                }
            })
    }

    componentDidMount() {
        const current_user = JSON.parse(localStorage.getItem('__current_user__'))
        if (current_user !== null) {
            this.get_listing()
            if (current_user.useremail === 'Admin@gmail.com') {
                this.setState({
                    access: true,
                    user_id: current_user._id,
                    // loading: false,
                    is_logedin: true,
                })
            }
            else {
                this.setState({
                    loading: false,
                })
                this.props.history.push('/')
            }
        }
        else {
            this.props.history.push('/')

        }
    }

    get_del_id_by_apr(id, i) {
        const { approv, } = this.state
        approv.splice(i, 1)
        this.setState({
            approv: approv
        })
        this.props.actions.admin_delete_listing({ _id: id })
            .then((response) => {
                console.log('response');
                this.get_listing()
            })
            .catch((err) => {
                console.log(err);
            })

    }

    get_del_id_by_unp(id, i) {
        const { approv, unapprv } = this.state
        unapprv.splice(i, 1)
        this.setState({
            unapprv: unapprv
        })
        this.props.actions.admin_delete_listing({ _id: id })
            .then((response) => {
                console.log('response');
                this.get_listing()
            })
            .catch((err) => {
                console.log(err);
            })

    }

    approval(_id, i) {
        const { approv, unapprv } = this.state
        unapprv.splice(i, 1)
        this.setState({
            unapprv: unapprv
        })
        this.props.actions.approved_listing({ _id: _id })
            .then((response) => {
                this.get_listing()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    unapproval(_id, i) {
        const { approv, unapprv } = this.state
        approv.splice(i, 1)
        this.setState({
            approv: approv,
        })
        this.props.actions.unapproved_listing({ _id: _id })
            .then((response) => {
                this.get_listing()

            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        const { cards, loading, unapprv, approv, appr, paus } = this.state
        return (
            <>
                <nav className="navbar generic-header navbar-expand-lg  navbar-dark bg-dark ">
                    <a className="navbar-brand" href="#">Service64 Admin</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse center" id="navbarNavDropdown">
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='#' className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link" >Manage<span className="sr-only">(current)</span></Link>
                            </li>
                        </ul> */}
                    </div>

                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Save changes</button>
                    </form>
                </nav>
                <>
                    <section className="dashboard-area padding-top-40px padding-bottom-90px">
                        <div className="container">
                            <Tabs>
                                <div className="col-lg-12">
                                    <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                                        <TabList className="nav nav-tabs border-0" id="nav-tab">
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"></span> Approved Listings
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"></span> Unapprove Listings
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"></span> Categories
                                                </Link>
                                            </Tab>

                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"></span> Cities
                                                </Link>
                                            </Tab>

                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"></span> Locations
                                                </Link>
                                            </Tab>
                                        </TabList>

                                    </div>
                                    <TabPanel>
                                        {loading ? (
                                            <div style={{ textAlign: 'center', width: '100%' }} >
                                                <span>
                                                    <Spinner animation="grow" id='loder' />
                                                </span>
                                            </div>
                                        )
                                            :
                                            (
                                                <div className="row">
                                                    {approv.length < 1 ? (
                                                        <div style={{ textAlign: 'center', width: '100%', margin: '50px 0px' }} > <h2>No any listing here !</h2> </div>
                                                    ) : (
                                                            <>
                                                                {approv.map((item, i) => {
                                                                    return (
                                                                        <div key={i} className="col-lg-4 column-td-6">
                                                                            <div className="card-item">
                                                                                <div className="card-image-wrap">
                                                                                    <div className="card-image" style={{ height: '250px', overflow: 'hidden' }}>
                                                                                        <img src={item.seller_img} className="card__img" alt="Card" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="card-content-wrap">
                                                                                    <div className="card-content">
                                                                                        <div >
                                                                                            <h4 className="card-title mt-0">{item.fullname}</h4>
                                                                                            <p className="card-sub">{item.location + ' ' + item.city}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="rating-row">
                                                                                        <div className="edit-info-box">
                                                                                            {item.approved ?
                                                                                                (
                                                                                                    <button type="button" className="theme-btn button-success border-0 mr-1" onClick={this.unapproval.bind(this, item._id, i)} >
                                                                                                        <span className="la"><FcDisapprove /></span> {paus}
                                                                                                    </button>
                                                                                                )
                                                                                                :
                                                                                                (
                                                                                                    <button type="button" className="theme-btn button-success border-0 mr-1" onClick={this.approval.bind(this, item._id, i)} >
                                                                                                        <span className="la"><FcApprove /></span> {appr}
                                                                                                    </button>
                                                                                                )}
                                                                                            <button type="button" className="theme-btn delete-btn border-0" onClick={this.get_del_id_by_apr.bind(this, item._id, i, i)} >
                                                                                                <span className="la">{cards[0].deleteIcon}</span> {cards[0].deleteTxt}
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </>
                                                        )}
                                                </div>
                                            )}

                                    </TabPanel>
                                    <TabPanel>
                                        {loading ? (
                                            <div style={{ textAlign: 'center', width: '100%' }} >
                                                <span>
                                                    <Spinner animation="grow" id='loder' />
                                                </span>
                                            </div>
                                        )
                                            :
                                            (
                                                <div className="row">
                                                    {unapprv.length < 1 ? (
                                                        <div style={{ textAlign: 'center', width: '100%', margin: '50px 0px' }} > <h2>No any listing here !</h2> </div>
                                                    ) : (
                                                            <>
                                                                {unapprv.map((item, i) => {
                                                                    return (
                                                                        <div key={i} className="col-lg-4 column-td-6">
                                                                            <div className="card-item">
                                                                                <div className="card-image-wrap">
                                                                                    <div className="card-image" style={{ height: '250px', overflow: 'hidden' }}>
                                                                                        <img src={item.seller_img} className="card__img" alt="Card" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="card-content-wrap">
                                                                                    <div className="card-content">
                                                                                        <div >
                                                                                            <h4 className="card-title mt-0">{item.fullname}</h4>
                                                                                            <p className="card-sub">{item.location + ' ' + item.city}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="rating-row">
                                                                                        <div className="edit-info-box">
                                                                                            {item.approved ?
                                                                                                (
                                                                                                    <button type="button" className="theme-btn button-success border-0 mr-1" onClick={this.unapproval.bind(this, item._id, i)} >
                                                                                                        <span className="la"><FcDisapprove /></span> {paus}
                                                                                                    </button>
                                                                                                )
                                                                                                :
                                                                                                (
                                                                                                    <button type="button" className="theme-btn button-success border-0 mr-1" onClick={this.approval.bind(this, item._id, i)} >
                                                                                                        <span className="la"><FcApprove /></span> {appr}
                                                                                                    </button>
                                                                                                )}
                                                                                            <button type="button" className="theme-btn delete-btn border-0" onClick={this.get_del_id_by_unp.bind(this, item._id, i)} >
                                                                                                <span className="la">{cards[0].deleteIcon}</span> {cards[0].deleteTxt}
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </>
                                                        )}

                                                </div>
                                            )}

                                    </TabPanel>
                                    <TabPanel>
                                        {loading ? (
                                            <div style={{ textAlign: 'center', width: '100%' }} >
                                                <span>
                                                    <Spinner animation="grow" id='loder' />
                                                </span>
                                            </div>
                                        )
                                            :
                                            (
                                                <Categories />
                                            )}
                                    </TabPanel>

                                    <TabPanel>
                                        {loading ? (
                                            <div style={{ textAlign: 'center', width: '100%' }} >
                                                <span>
                                                    <Spinner animation="grow" id='loder' />
                                                </span>
                                            </div>
                                        )
                                            :
                                            (
                                                <AddCities />
                                            )}
                                    </TabPanel>


                                    <TabPanel>
                                        {loading ? (
                                            <div style={{ textAlign: 'center', width: '100%' }} >
                                                <span>
                                                    <Spinner animation="grow" id='loder' />
                                                </span>
                                            </div>
                                        )
                                            :
                                            (
                                                <AddLocations />
                                            )}
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </section>
                </>
            </>
        )
    }
}


const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            get_unapproved_listing,
            admin_delete_listing,
            approved_listing,
            unapproved_listing,
            get_approved_listing,
            add_cat
        }, dispatchEvent),
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.search_res
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addmin_panel);

