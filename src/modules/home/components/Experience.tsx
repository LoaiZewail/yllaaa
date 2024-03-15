import { motion, useScroll, useSpring } from 'framer-motion'
import style from "../style.module.scss";
import { useRef } from 'react';

export default function Experience() {

    const ref: any = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <>
            <div className={style.Experience__title}>
                <motion.div className={style.Experience__title__light} style={{ scaleX }}><img src='/images/gradient.png' /></motion.div>

                Our Expertise, Your Success
            </div>
            <div className={style.Experience} ref={ref}>
                <div className={style.Experience__card}>Web Development</div>
                <div className={style.Experience__card}>SEO</div>
                <div className={style.Experience__card}>Web Development</div>
                <div className={style.Experience__card}>SEO</div>
                <div className={style.Experience__card}>Web Development</div>
                <div className={style.Experience__card}>SEO</div>
                <div className={style.Experience__card}>Web Development</div>
                <div className={style.Experience__card}>SEO</div>
            </div>
        </>
    )
}
