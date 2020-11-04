import React, { Component } from 'react'
import BannerOneHeroHeading from './BannerOneHeroHeading'
import BannerOneSearchInput from './BannerOneSearchInput'
import BannerOneCategories from './BannerOneCategories'

export default class BannerOne extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <section className="hero-wrapper">
                       <div className="hero-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">

                                {/* Banner One Hero Heading */}
                                <BannerOneHeroHeading />

                                {/* Banner One Search Input */}
                                <BannerOneSearchInput history={this.props.history} />

                                {/* Banner One Categories */}
                                {/* <BannerOneCategories /> */}

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
