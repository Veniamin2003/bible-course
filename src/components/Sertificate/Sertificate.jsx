import React from "react";
import "./sertificate.css"
import photo from "../../Images/sertificate.jpg"

const Sertificate = () => {
    return (
        <section id="sertificate">
            <div className="container sertificate__container">

                <div className="sertificate__content">
                    <div className="sertificate__header"><h3>Сертификаты</h3></div>
                    <div className="sertificate__text">
                        <p>После прохождения курса вы получите электронный сертификат</p>
                    </div>
                </div>

                <div className="sertificate__photo">
                    <img src={photo} alt="sertificate"/>
                </div>


            </div>
        </section>
    );
}

export default Sertificate;