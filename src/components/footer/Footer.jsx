import React from "react";
import "./footer.css"
import {BiBible} from "react-icons/bi"
import {FiPhoneOutgoing} from "react-icons/fi"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer__container">
                <div className="footer__content">
                    <div className="footer__header__text">
                        <h2>Жизни смысл</h2>
                        <p><FiPhoneOutgoing className="phone__icon"/>+7(964)964-39-43</p>
                    </div>

                    <div className="motivation__icon">
                        <BiBible className="icon__bible"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;