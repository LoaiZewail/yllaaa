import { motion, useScroll, useSpring } from 'framer-motion'
import style from "../style.module.scss";
import { useRef } from 'react';
export default function Header() {

    const ref: any = useRef();

    const { scrollY } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const y = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className={style.Cards} ref={ref}>
            <div className={style.Cards__card}>
                <span><img src='/images/Stars.png' /> </span>
                <b>Proven Expertise.</b>
                <p>Our team of seasoned digital marketing experts has a track record of driving results. We know how to navigate digital activities to ensure your brand's success.</p>
            </div>
            <div className={style.Cards__card}>
                <span><img src='/images/Stars.png' /> </span>
                <b>Proven Expertise.</b>
                <p>Our team of seasoned digital marketing experts has a track record of driving results. We know how to navigate digital activities to ensure your brand's success.</p>
            </div>
            <div className={style.Cards__card}>
                <span><img src='/images/Stars.png' /> </span>
                <b>Proven Expertise.</b>
                <p>Our team of seasoned digital marketing experts has a track record of driving results. We know how to navigate digital activities to ensure your brand's success.</p>
            </div>
            <div className={style.Cards__card}>
                <span><img src='/images/Stars.png' /> </span>
                <b>Proven Expertise.</b>
                <p>Our team of seasoned digital marketing experts has a track record of driving results. We know how to navigate digital activities to ensure your brand's success.</p>
            </div>
            <motion.div style={{ top: y }} className={style.glow}></motion.div >
        </div>
    )
}
