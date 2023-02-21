import React from "react";
import "./program.css"

const Program = () => {
    return (
        <section id="program">
                <div className="header__text__program">
                    <h2>Программа курса</h2>
                </div>

                <div className="container program__container">
                    <div className="program__cards">
                        <div className="program__text">
                            <ul>
                                <li>1. Сотворение мира</li>
                                <li>2. Грехопадение</li>
                                <li>3. Ной и великий потоп</li>
                                <li>4. Божье обетование Аврааму</li>
                                <li>5. Исход из земли рабства</li>
                                <li>6. Закон</li>
                                <li>7. Бог пребывает среди Своего народа</li>
                                <li>8. Давид</li>
                                <li>9. Рождество Иисуса Христа</li>
                                <li>10. Иисус Христос — истинный Бог</li>
                                <li>11. Иисус — Спаситель</li>
                                <li>12. Страдания Иисуса Христа</li>
                                <li>13. Смерть и воскресение Иисуса</li>
                                <li>14. Вознесение Иисуса и сошествие Святого Духа </li>
                                <li>15. Заключение</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Program;