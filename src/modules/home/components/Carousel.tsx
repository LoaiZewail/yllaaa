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
            <Slider {...settings}>
                <div className={style.Carousel__card}>
                    hi
                </div>
                <div className={style.Carousel__card}>
                    hi
                </div>
                <div className={style.Carousel__card}>
                    hi
                </div>
                <div className={style.Carousel__card}>
                    hi
                </div>
                <div className={style.Carousel__card}>
                    hi
                </div>
                <div className={style.Carousel__card}>
                    hi
                </div>
            </Slider>
        </div>
    )
}
