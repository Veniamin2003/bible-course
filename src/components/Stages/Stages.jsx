import React from "react"
import './stages.css'
import {GiOpenBook} from "react-icons/gi"
import {HiAcademicCap} from "react-icons/hi"
import {BiLinkExternal} from "react-icons/bi"

const Stages = () => {
    return (
        <section id="stages">
            <div className="header__text__stage">
                <h2>Как начать обучение?</h2>
            </div>

            <div className="container stages__container">
                <div className="stages__cards">

                    <article className="stages__card">
                        <div className="stages__content">
                            <BiLinkExternal className="stages__icon"/>
                            <h5>Пройди по ссылке</h5>
                            <small>
                                Ознакомься с кратким описанием курса и настрой себя на прохождение уроков
                            </small>
                            <a href="">перейти к курсу</a>
                        </div>
                    </article>

                    <article className="stages__card">
                        <div className="stages__content">
                            <GiOpenBook className="stages__icon"/>
                            <h5>Начни обучение </h5>
                            <small>
                                Проходи урок за уроком, отслеживай свой прогресс, становись ближе к Богу,
                                укрепляй свою веру, задавай вопросы и получай ответы от своего личного наставника
                            </small>
                        </div>
                    </article>

                    <article className="stages__card">
                        <div className="stages__content">
                            <HiAcademicCap className="stages__icon"/>
                            <h5>Получи сертификат</h5>
                            <small>
                                После прохождения курса получи сертификат об окончании с подписью твоего наставника
                            </small>
                        </div>
                    </article>





                </div>

            </div>
        </section>
    )
}

export default Stages
