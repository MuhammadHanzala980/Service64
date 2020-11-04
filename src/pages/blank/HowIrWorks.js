import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Banner5 from "../../components/banner/banner6/Banner6";

import Breadcrumb from "../../components/common/Breadcrumb";

// import ImageBox from "../components/about/ImageBox";
// // import About2 from "../components/about/About2";
// import FunFactsThree from "../components/other/funfacts/FunFactsThree";
// import {Link} from "react-router-dom";
// import { FiPlus } from 'react-icons/fi'
// import SectionsHeading from "../components/common/SectionsHeading";
// import Testimonial from "../components/sliders/Testimonial";
// import HowItWork4 from "../components/hiw/HowItWork4";
// import TeamOne from "../components/team/TeamOne";
// import Button from "../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class HowIrWorks extends Component {
    state = {
        breadcrumbImg: require('../../assets/images/joel-vodell-8Ogfqvw15Rg-unsplash.jpg'),
    }
    render() {
        return (
            <main className="about-page">
                {/* Header */}
                <GeneralHeader />

                {/* Banner */}
                <Breadcrumb CurrentPgTitle="All Categories" MenuPgTitle="Categories" img={this.state.breadcrumbImg} />

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default HowIrWorks;