import React, {Component} from 'react'
import GeneralHeader from '../../components/common/GeneralHeader'
import BannerOne from '../../components/banner/banner1/BannerOne'
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularCategories from "../../components/other/categories/PopularCategories";
import HowItWorkOne from "../../components/hiw/hiw1/HowItWorkOne";
import PlaceOne from "../../components/places/PlaceOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import InfoBox2 from "../../components/other/infoboxes/InfoBox2";
import Button from "../../components/common/Button";
import Testimonial from "../../components/sliders/Testimonial";
import SectionDivider from "../../components/common/SectionDivider";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";


export default class Home extends Component {
    ctaimages = {
        images: [
            {
                img: require('../../assets/images/symble1.png')
            },
            {
                img: require('../../assets/images/symble2.png')
            },
            {
                img: require('../../assets/images/symble3.png')
            },
            {
                img: require('../../assets/images/symble4.png')
            }
        ]
    }

    tmimages = {
        tmimage: [
            {
                tmimg: require('../../assets/images/testi-img1.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img2.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img3.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img4.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img5.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img6.jpg')
            }
        ]
    }
    render() {
        return (
            <main className="home-1">
                <GeneralHeader history={this.props.history} />
                <BannerOne history={this.props.history} />
                <section className="cat-area padding-top-30 padding-bottom-90px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title ="Most Popular Categories" desc="Here are most popular service categories from our valuable customers" />
                        </div>
                        <div className="row mt-5">
                            <PopularCategories />
                        </div>
                    </div>
                </section>
                
                <section className="cta-area section-bg column-sm-center padding-top-80px padding-bottom-80px">
                    {this.ctaimages.images.map((img, index) => {
                        return (
                            <img src={img.img} key={index} alt="Cta Symble" className="symble-img"/>
                        )
                    })}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-left">
                                <SectionsHeading title="Dirto is the best way to find & discover great local businesses" titleClass=" mb-3 font-size-28" descClass=" font-size-17" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero" />
                            </div>

                            <div className="col-lg-3">
                                <div className="btn-box">
                                    <Button text="Create Account" url="/sign-up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                {/* <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                    {this.tmimages.tmimage.map((tmimg, index) => {
                        return (
                            <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="What Our Users Said" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto mt-4">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </section> */}

                <SectionDivider />

                {/* Blog */}
                {/* <section className="blog-area padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width section-title-ml-mr-0">
                            <div className="col-lg-8">
                                <SectionsHeading title="Latest Tips & Articles" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                            </div>
                            <div className="col-lg-4">
                                <div className="btn-box h-100 d-flex align-items-center justify-content-end">
                                    <Button text="view all post" url="/blog" className=" margin-top-100px" />
                                </div>
                            </div>
                        </div>

                        <LatestBlog />
                    </div>
                </section> */}

                {/* CTA 2 */}
                {/* <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
                    <CtaOne />
                </section> */}

                {/* Client Logo */}
                <ClientLogo />

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />
            </main>
        )
    }
}
