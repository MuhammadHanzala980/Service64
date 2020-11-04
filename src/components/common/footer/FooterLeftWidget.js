import React, {Component} from 'react';
import Logo from "../Logo";
import SocialProfile from "../../other/account/SocialProfile";

class FooterLeftWidget extends Component {
    state = {
        logo: require('../../../assets/images/Asset 2logo dark.png'),
        desc: 'We are a directory website, where we have a large number of professionals to answer your call and get the problem solbed easily.',
    }
    render() {
        return (
            <>
                <div className="col-lg-4 column-td-6">
                    <div className="footer-item">
                        <div className="logo">
                            <Logo url={this.state.logo} className="foot-logo" />
                            <p className="footer__desc">
                                {this.state.desc}
                            </p>
                            <SocialProfile />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterLeftWidget;