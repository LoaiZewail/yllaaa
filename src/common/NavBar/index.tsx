import { motion } from 'framer-motion'
import Menu from './components/Menu'
import style from './style.module.scss'

export default function NavBar() {
    return (
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 3, duration: .9 }} className={style.NavBar}>
            <div className={style.NavBar__start}>
                Yllaaa
            </div>
            <div className={style.NavBar__end}>
                <div className={style.NavBar__end__items}>
                    {/* <div className={style.NavBar__end__items__item}>
                        Services
                    </div>
                    <div className={style.NavBar__end__items__item}>
                        Study Cases
                    </div>
                    <div className={style.NavBar__end__items__item}>
                        Blog
                    </div>
                    <div className={style.NavBar__end__items__item}>
                        About Us
                    </div>
                    <div className={style.NavBar__end__items__item}>
                        +34 623 134 921
                    </div> */}
                    <div className={style.NavBar__end__items__btn}>
                        Get Started
                    </div>
                </div>
                {/* <Menu /> */}
            </div>
        </motion.div>
    )
}
