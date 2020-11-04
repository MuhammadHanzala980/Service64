import React, { Component } from 'react';
import { add_cat, get_cat, del_cat, edt_cat } from '../../store/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: '',
            message_err: '',
            categories_arr: [],
            edit: false,
            _id: '',
        }
    }

    add_cat() {
        const category_title = { label: this.state.categories }
        if (this.state.categories.length < 1) {
            this.setState({ message_err: 'Please Inter Category !' })
        }
        else {
            this.props.actions.add_cat(category_title).then((res) => {
                const response = res.data
                this.get_cat()
                if (response.message) {
                    this.setState({ message_err: response.message })
                }
            }).catch(err => console.log(err))
        }
    }

    get_cat() {
        this.props.actions.get_cat().then((res) => {
            // if (res.data.length > 0) {
            this.setState({
                categories_arr: res.data,
                categories: '',
            })
            // }
        })
    }

    del_cat(_id) {
        this.props.actions.del_cat({ _id: _id }).then((res) => {
            console.log(res);
            this.get_cat()
        })
    }

    edt_cat() {
        this.props.actions.edt_cat({ _id: this.state._id, label: this.state.categories }).then((res) => {
            console.log(res);
            this.get_cat()
            this.setState({
                edit: false,
                categories: '',
            })
        })
    }

    edt_cat_data(item) {
        console.log(item);
        this.setState({
            edit: true,
            categories: item.label,
            _id: item._id,
        })
    }

    value(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.get_cat()
    }
    render() {
        const { categories_arr, edit } = this.state
        return (
            <main>

                {this.state.message_err && <div className="alert alert-danger" >{this.state.message_err}</div>}

                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-search-input">
                            <div className="main-search-input-item ">
                                <div className="contact-form-action">
                                    <div className='form-group mb-0'>
                                        <input value={this.state.categories} name='categories' onChange={this.value.bind(this)} className="form-control" type="text" placeholder="Inter Category" />
                                    </div>
                                </div>
                            </div>
                            <div className="main-search-input-btn">
                                {!edit && <button className="theme-btn border-0" type="button" onClick={this.add_cat.bind(this)} >Add Category</button>} {edit && <button className="theme-btn border-0" type="button" onClick={this.edt_cat.bind(this)} >Update Category</button>}
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-group">
                    {categories_arr.map((item, i) => {
                        return (
                            <div key={i} className="list-group-item shadow-sm p-3 mb-2 bg-white rounded" >
                                <div className="shadow-2px margin-5px row">
                                    <span className="col-lg-8">
                                        <span className='btn font-weight-bold' >{item.label}</span>
                                    </span>
                                    <span className="col-lg-4 text-right">
                                        <span className="btn delete-btn" onClick={this.del_cat.bind(this, item)} >Delete</span>
                                        <span className="btn edit-btn" onClick={this.edt_cat_data.bind(this, item, i)} >Edit</span>
                                    </span>
                                </div>
                            </div>
                        )
                    })}

                </ul>
            </main>
        )
    }
}


const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            get_cat,
            add_cat,
            del_cat,
            edt_cat,
        }, dispatchEvent),
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.search_res
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategories)