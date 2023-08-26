import React from "react";
import "./reason.css"
import reason from "../../Images/what_is_the_meaning_of_life.jpg"
import icon from "../../Images/reason-icon.png"

const Reason = () => {
    return (
        <section id="reason">
            <div className="container reason__container">
                <div className="reason__photo">
                    <img className="inner-img" src={reason} alt="reason"/>
                </div>
                <div className="reason__content">
                    <div className="reason__header__text"><h2>Зачем&nbsp;изучать этот&nbsp;курс?</h2></div>
                    <div className="text">
                        <div className="text__block">
                            <div className="img__block">
                                <img src={icon} alt="icon"/>
                            </div>
                            <div className="desc__block">
                                <p>Узнай, что говорит Бог</p>
                            </div>
                        </div>

                        <div className="text__block">
                            <div className="img__block">
                                <img src={icon} alt="icon"/>
                            </div>
                            <div className="desc__block">
                                <p>Укрепляй свою веру</p>
                            </div>
                        </div>

                        <div className="text__block">
                            <div className="img__block">
                                <img src={icon} alt="icon"/>
                            </div>
                            <div className="desc__block">
                                <p>Найди смысл жизни</p>
                            </div>
                        </div>

                        <div className="text__block">
                            <div className="img__block">
                                <img src={icon} alt="icon"/>
                            </div>
                            <div className="desc__block">
                                <p>Испытай настоящую радость</p>
                            </div>
                        </div>
                    </div>
                    <div className="button_two">
                        <a href="https://lifes-meaning.learnnn.com/basicsbible" className="btn" target={'_blank'}>ПРОЙТИ КУРС</a>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default Reason;
