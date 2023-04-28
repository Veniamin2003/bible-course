import React from "react";
import "./fullCourse.css"
import photo from "../../Images/Bible_2.jpg"

const FullCourse = () => {
    return (
        <section id="fullCourse">
            <div className="container fullCourse__container">
                <div className="fullCourse__content">
                    <div className="fullCourse__header"><h3>Полный базовый курс</h3></div>
                        <div className="fullCourse__text">
                            <p>Курс разработан так, чтобы он был понятен каждому человеку и в тоже время,
                                уроки самодостаточны для понимания Божьего плана спасения людей.
                            </p>
                        </div>
                </div>

                <div className="three__photo">
                    <img className="inner-img" src={photo} alt="fullCourse"/>
                </div>
                <div className="fullCourse__parallax-img"></div>
            </div>
        </section>
    );
}

export default FullCourse;