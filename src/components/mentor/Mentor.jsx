import React from "react";
import "./mentor.css"
import photo from "../../Images/Mentors.jpg"

const Mentor = () => {
    return (
        <section id="mentor">
            <div className="container mentor__container">
                <div className="three__photo">
                    <img className="inner-img" src={photo} alt="mentor"/>
                </div>
                <div className="mentor__parallax-img"></div>

                <div className="mentor__content">
                    <div className="mentor__header"><h3>Поддержка наставника</h3></div>
                        <div className="mentor__text">
                            <p>К каждому студенту прикрепляется преподаватель, и сопровождает до завершения курса.
                                Прохождение уроков с наставником увеличивает эффективность обучения.
                            </p>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Mentor;