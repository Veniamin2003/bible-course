// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./testimonials.css"

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";

const SwiperSlider = (props) => {

    return (
        <section id="testimonials" className="section_e">
            <Swiper className="container testimonials__container"
                    modules={[ Pagination, Navigation ]}
                    spaceBetween={props.spaceBetween}
                    slidesPerView={props.slidesPerView}
                    navigation
                    pagination={{ clickable: true }}>
                {
                    props.testimonials.testimonials.map(({id, name, description}) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div>
                                    <h5 className="client__name">{name}</h5>
                                    <small className="client__review">
                                        {description}
                                    </small>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>
    )
}

export default SwiperSlider;