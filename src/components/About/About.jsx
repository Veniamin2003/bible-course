import React from "react";
import "./about.css"

const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__header__text"><h2>О курсе</h2></div>
                <div className="about__content__text">
                    <div className="about__text">
                        <p>Этот курс состоит из пятнадцати уроков. Он расскажет вам об основных темах Библии.
                        <b> Книга Библия — Божье послание </b> для каждого человека. </p>
                    </div>
                    <div className="about__text">
                        <p>В конце каждого урока есть вопросы. К каждому студенту <b>прикрепляется личный наставник, </b>
                            который будет комментировать ваши ответы и отвечать на вопросы.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;