import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Experience from "./components/Experience";
import Form from "./components/Form";
import Header from "./components/Header";
import People from "./components/People";
import style from "./style.module.scss";

export const Home = () => {

    return (
        <div className={style.home}>
            <Header />
            <Cards />
            <Experience />
            <Carousel />
            <People />
            <Form />
        </div>
    )
}
