import "./testimonials.css"

import SwiperSlider from "./SwiperSlider";

const Testimonials = () => {

    const testimonials = {
        testimonials: [
            { id: 1,
                name: "Любовь",
                description: "“Я поняла, что нужно больше верить и доверять Иисусу. Ведь только Он способен изменить нашу жизнь." +
                    "Наиболее полезными были вопросы. Иногда приходилось задуматься о том, о чём в обычной жизни я никогда не задумывалась. Спасибо." +
                    "Несмотря на то, что курс бесплатный, благодаря тому, что есть обратная связь мне хотелось сюда возвращаться. " +
                    "Самый сложный период был где-то в середине курса.. посещали мысли забросить. Но я держалась. Спасибо вам за поддержку!”"
            },
            { id: 2,
                name: "Александр",
                description: "“Курс очень понравился. Пришлось переосмыслить многие вещи. Выражаю благодарность всем, кто поучаствовал в создании этого курса.“"
            },

        ]
    }

    return (
        <section id="testimonials">
            <div className="testimonial__header">
                <h2>Что говорят студенты?</h2>
            </div>


            <div className="swiper__big">
                <SwiperSlider testimonials={testimonials} spaceBetween={40} slidesPerView={1}/>
            </div>

            {/*<div className="swiper__middle">
                <SwiperSlider testimonials={testimonials}  spaceBetween={30} slidesPerView={3}/>
            </div>

            <div className="swiper__small">
                <SwiperSlider testimonials={testimonials}  spaceBetween={30} slidesPerView={2.5}/>
            </div>*/}

        </section>
    )
}

export default Testimonials;