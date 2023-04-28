import React from "react";
import "./footer.css"
import {BiBible} from "react-icons/bi"
import {FiPhoneOutgoing} from "react-icons/fi"
import Logo from "../../Images/logo_white.svg"
import {BsYoutube} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {SlSocialVkontakte} from "react-icons/sl"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer__container">
                <div className="footer__content">
                    <div className="footer__header__text">
                        <h2>Жизни смысл</h2>
                        <p><FiPhoneOutgoing className="phone__icon"/>+7(964)964-39-43</p>
                        <div className="icon__block">
                            {/*<p>Мы в соц сетях</p>*/}
                            <div className="icon__elements">
                                <a href="https://www.youtube.com/@lifes_meaning">
                                    <BsYoutube className="footIcon youTube_icon"/>
                                </a>
                                <a href="https://t.me/lifes_meaning">
                                    <BsTelegram className="footIcon telegram_icon"/>
                                </a>
                                <a href="https://instagram.com/lifes.meaning_?igshid=YmMyMTA2M2Y=">
                                    <BsInstagram className="footIcon instagram_icon"/>
                                </a>
                                <a href="https://vk.com/lifes__meaning">
                                    <SlSocialVkontakte className="footIcon vk_icon"/>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="motivation__icon">
                        {/*<BiBible className="icon__bible"/>*/}
                        <img src={Logo} alt="logo" className="logo__bible"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;