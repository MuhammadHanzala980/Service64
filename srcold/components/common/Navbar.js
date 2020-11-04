import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from "react-router-dom";
import $ from 'jquery';
import { search_res } from '../../store/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Navbar(props) {
    const [navOpen, setNavOpen] = useState(false)

    $(document).on('click', '.side-menu-ul li', function () {
        $(".side-menu-ul li").removeClass('active');
        $(this).toggleClass("active")
    })
    $(document).on('click', '.side-menu-ul li.active', function () {
        $(".side-menu-ul li.active").removeClass('active');
    })

    const current_user = JSON.parse(localStorage.getItem('__current_user__'))
    let is_logedin = false
    if (current_user !== null) {
        is_logedin = true
    }
    else {
        is_logedin = false
    }

    return (
        <>
            <div className="main-menu-content">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home </Link>
                          
                        </li>

                        <li><Link to="/about-us">about</Link></li>

                        <li>
                            <Link to="/categories">categories </Link>
                        </li>
                        <li>
                            <Link to="/list" onClick={() => { props.actions.search_res(undefined) }}> Number List </Link>
                        </li>
                        

                        <li>
                            <Link to="/blog">blog </Link>
                            
                        </li>
                        <li><Link to="/contact">contact</Link></li>
                        {is_logedin &&
                            <li>
                                <Link to="/myprofile">{current_user.fullname} </Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
            <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
            </div>
            <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">
                    <li>
                            <Link to="/">home </Link>
                          
                        </li>

                        <li><Link to="/about-us">about</Link></li>

                        <li>
                            <Link to="/categories">categories </Link>
                        </li>
                        <li>
                            <Link to="/list" onClick={() => { props.actions.search_res(undefined) }}> Number List </Link>
                        </li>
                        

                        <li>
                            <Link to="/blog">blog </Link>
                            
                        </li>
                        <li><Link to="/contact">contact</Link></li>
                        {is_logedin &&
                            <li>
                                <Link to="/dashboard">{current_user.fullname} </Link>
                            </li>
                        }


                    </ul>
                    {is_logedin ? (

                        <div className="side-nav-button">
                            <Link to="/login" className="theme-btn">login</Link>
                            <Link to="/sign-up" className="theme-btn">Sign up</Link>
                        </div>
                    ) : (
                            <div className="side-nav-button">
                                <Link to="/add-listing" className="theme-btn">Add Listing</Link>
                                {/* <Link to="/sign-up" className="theme-btn">Sign up</Link> */}
                            </div>

                        )}

                </div>
            </div>
        </>
    )
}
const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            search_res
        }, dispatchEvent)
    }
}

export default connect(null, mapDispatchToProps)(Navbar)
