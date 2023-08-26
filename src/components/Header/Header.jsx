import React from "react";
import "./header.css"
import Bible from "../../Images/bible.png"
import Logo from "../../Images/logo.svg"

const Header = () => {
    return (
        <section id="header">
            <div className="header__container">

                {/*============== MENU =================*/}
                <div className="menu">
                    <li><img src={Logo} alt="logo" className="header__logo"/></li>
                    <li><a href="#about">О курсе</a></li>
                    <li><a href="#stages">Как начать обучение?</a></li>
                    <li><a href="#program">Программа курса</a></li>
                    <li><a href="#testimonials">Отзывы</a></li>
                </div>

                {/*============== CONTENT =================*/}
                <div className="content__container">
                    <div className="content">
                        <div className="text">
                            <h1>Знакомство с&nbsp;Библией</h1>
                            <h4>
                                Бесплатный онлайн курс
                            </h4>
                        </div>

                        <div className="button">
                            <a href="https://lifes-meaning.learnnn.com/basicsbible" className="btn " target={'_blank'}>ПРОЙТИ КУРС</a>
                        </div>
                    </div>
                </div>

                {/*============== PHOTO =================*/}
                <div className="photo">
                    <img src={Bible} alt="bible"/>
                </div>

                {/*=========== BIBLE__TEXT ==============*/}
                <div className="text__low">
                    <p>
                        βίβλος γενέσεως Ἰησοῦ Χριστοῦ υἱοῦ Δαυὶδ υἱοῦ Ἀβραάμ Ἀβραὰμ ἐγέννησεν τὸν Ἰσαάκ Ἰσαὰκ δὲ
                        ἐγέννησεν τὸν Ἰακώβ Ἰακὼβ
                        δὲ ἐγέννησεν τὸν Ἰούδαν καὶ τοὺς ἀδελφοὺς αὐτοῦ Ἰούδας δὲ ἐγέννησεν τὸν Φάρες καὶ τὸν Ζάρα ἐκ
                        τῆς Θαμάρ Φάρες δὲ ἐγέννησεν
                        τὸν Ἑσρώμ Ἑσρὼμ δὲ ἐγέννησεν τὸν Ἀράμ Ἀρὰμ δὲ ἐγέννησεν τὸν Ἀμιναδάβ Ἀμιναδὰβ δὲ ἐγέννησεν τὸν
                        Ναασ­σών Ναασ­σὼν
                        δὲ ἐγέννησεν τὸν Σαλμών (Μτ.1:1-4)
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Header;
