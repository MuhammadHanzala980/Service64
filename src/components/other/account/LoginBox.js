import React, { Component } from 'react';
import SignInOptions from "./SignInOptions";
import { AiOutlineUser } from 'react-icons/ai'
import { FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { user_signin } from '../../../store/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class LoginBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailOrUsername: '',
            email: '',
            username: '',
            number: '',
            password: '',
            validatedEmail: false,
            message_err: false,
        }
    }
    validateEmail(val) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            this.setState({ validatedEmail: true })
            this.setState({ email: val, number: '' })
        }
        else {
            this.setState({ username: val })
        }
    }
    value(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.name === 'emailOrUsername') {
            this.validateEmail(e.target.value)
        }

        if (e.target.name === 'emailOrUsername') {
            this.validateEmail(e.target.value)
            const txt = e.target.value
            var num = txt.match(/\d+/)
            if (num !== null) {
                if (num[0].length > 10) {
                    this.setState({
                        number: num[0],
                        validatedEmail: false,
                    })
                }

            }
        }

    }

    signin() {
        const { username, email, password, validatedEmail, emailOrUsername, number } = this.state
        if (emailOrUsername.length < 2) {
            this.setState({
                message_err: 'Please inter valide email or phone number !',
            })
        }
        else if (password.length < 6) {
            this.setState({
                message_err: 'Your password must be at least 8 characters long !',
            })
        }
        else {
            const userdata = { password }
            if (validatedEmail) {
                userdata.email = email
                console.log('Login By Email');
            }
            else if (number.length > 10) {
                console.log('Login By Mobile');
                userdata.number = number
            }
            this.props.actions.user_signin(userdata).then((res) => {
                if (res.data.user !== undefined) {
                    localStorage.setItem('__current_user__', JSON.stringify(res.data.user))
                    this.props.history.push('/')
                }
                else {
                    this.setState({
                        message_err: res.data.message
                    })
                }
            }).catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
                <div className="billing-form-item mb-0">
                    <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                        <h3 className="widget-title font-size-28 pb-0">
                            {this.props.title}
                        </h3>
                        <p className="font-size-16 font-weight-medium">
                            {this.props.subtitle}
                        </p>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            {/* <form method="post"> */}
                            <div className="row">

                                <SignInOptions />

                                <div className="col-lg-12">
                                    <div className="account-assist mt-4 mb-4 text-center">
                                        <p className="account__desc">or</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Username, or phone</label>
                                        <div className="form-group">
                                            <span className="form-icon">
                                                <AiOutlineUser />
                                            </span>
                                            <input value={this.state.emailOrUsername} name='emailOrUsername' onChange={this.value.bind(this)} className="form-control" type="text" placeholder="email, or phone number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Password</label>
                                        <div className="form-group">
                                            <span className="form-icon">
                                                <FiLock />
                                            </span>
                                            <input value={this.state.password} name='password' onChange={this.value.bind(this)} className="form-control" type="password" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        {this.state.message_err && <div className="alert alert-danger" >{this.state.message_err}</div>}
                                        <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                                            <div>
                                                <input type="checkbox" id="chb1" />
                                                <label htmlFor="chb1">Remember Me</label>
                                            </div>

                                            <div>
                                                <Link to="/recover" className="color-text font-weight-medium">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="btn-box margin-top-20px margin-bottom-20px">
                                        <button className="theme-btn border-0" type="button" onClick={this.signin.bind(this)} >
                                            Login now
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="font-weight-medium">Not a member? <Link to="/sign-up" className="color-text"> Register</Link></p>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            user_signin
        }, dispatchEvent),
    }
}

const mapStateToProps = (state) => {
    return {
        item: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);