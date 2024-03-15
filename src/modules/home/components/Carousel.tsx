import style from "../style.module.scss";
import Slider from "react-slick";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className={style.Carousel}>
            <div className={style.Carousel__title}>How We Work</div>
            <Slider {...settings}>
                <div className={style.Carousel__card}>
                    <div className={style.Carousel__card__content}>
                        step
                    </div>
                </div>
                <div className={style.Carousel__card}>
                    <div className={style.Carousel__card__content}>
                        step
                    </div>
                </div>
                <div className={style.Carousel__card}>
                    <div className={style.Carousel__card__content}>
                        step
                    </div>
                </div>
                <div className={style.Carousel__card}>
                    <div className={style.Carousel__card__content}>
                        step
                    </div>
                </div>
                <div className={style.Carousel__card}>
                    <div className={style.Carousel__card__content}>
                        step
                    </div>
                </div>
                <div className={style.Carousel__card}>
                    <div className={style.Carousel__card__content}>
                        step
                    </div>
                </div>
            </Slider>
        </div>
    )
}
