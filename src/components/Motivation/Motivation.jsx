import React from "react";
import "./motivation.css"
import way from "../../Images/way.jpg"

const Motivation = () => {
    return (
        <section id="motivation">
            <div className="container motivation__container">

                <div className="motivation__content">
                    <div className="motivation__header__text">
                        <h3>Просто начните</h3>
                    </div>
                    <div className="motivation__text">
                        <div className="motivation__text__block">
                            <div className="motivation__desc__block">
                                <p>Курс можно проходить уже сейчас. Бесплатно.</p>
                            </div>
                        </div>
                    </div>
                    <div className="motivation__button_two">
                        <a href="https://lifes-meaning.learnnn.com/basicsbible" className="btn" target={'_blank'}>ПРОЙТИ КУРС</a>
                    </div>
                </div>
                <div className="motivation__photo">
                    <img className="inner-img" src={way} alt="way"/>
                </div>
            </div>
        </section>
);
}

export default Motivation;
