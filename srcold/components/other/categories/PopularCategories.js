import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { FaTelegramPlane,FaMicrochip, FaKey, FaGraduationCap, FaMobileAlt, FaBolt, FaGasPump, FaPiedPiperAlt} from "react-icons/fa";

class PopularCategories extends Component {
    states = {
        items: [
            {
                icon: <FaTelegramPlane />,
                title: 'Shifting',                
                url: '#',
                img: require('../../../assets/images/shifting.jpg')
            },
            {
                icon: <FaBolt />,
                title: 'Electrician',                
                url: '#',
                img: require('../../../assets/images/electrician.jpg')
            },
            {
                icon: <FaGasPump />,
                title: 'Gas Mechanic',
                url: '#',
                img: require('../../../assets/images/gas-mechanic.jpg')
            },
            {
                icon: <FaKey />,
                title: 'Lock Opener',
                url: '#',
                img: require('../../../assets/images/key-531171_640.jpg')
            },
            {
                icon: <FaPiedPiperAlt />,
                title: 'Plumber',
                url: '#',
                img: require('../../../assets/images/plumbing-840835_640.jpg')
            },
            {
                icon: <FaMicrochip />,
                title: 'Electronic Repair',
                url: '#',
                img: require('../../../assets/images/service-428539_640.jpg')
            },
            {
                icon: <FaMobileAlt />,
                title: 'Mobile Repair',
                url: '#',
                img: require('../../../assets/images/of-technology-5004867_640.jpg')
            },
            {
                icon: <FaGraduationCap />,
                title: 'House Tutor',
                url: '#',
                img: require('../../../assets/images/study-5645247_640.jpg')
            }
        ]
    }
    render() {
        return (
            <>
                {this.states.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig m-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={item.url} className="cat-fig-box">
                                            <div className="icon-element mb-3">
                                                {item.icon}
                                            </div>
                                            <div className="cat-content">
                                                <h4 className="cat__title mb-3">{item.title}</h4>
                                                <span className="badge">{item.stitle}</span>
                                            </div>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default PopularCategories;