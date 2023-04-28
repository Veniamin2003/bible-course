import React from "react";
import "./answers.css"
import photo from "../../Images/Questions_2.jpg"

const Answers = () => {
    return (
        <section id="answers">
            <div className="container answers__container">
                <div className="answers__content">
                    <div className="answers__header"><h3>Вопросы - ответы</h3></div>
                        <div className="answers__text">
                            <p>Задавая вопросы и получая ответы от наставника
                                появляется возможность глубокого изучения тематики курса.
                            </p>
                        </div>
                </div>

                <div className="three__photo">
                    <img className="inner-img" src={photo} alt="answers"/>
                </div>
                <div className="answers__parallax-img"></div>
            </div>
        </section>
    );
}

export default Answers;