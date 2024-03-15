import { motion } from 'framer-motion'
import style from "../style.module.scss";

export default function Form() {

    return (
        <motion.div className={style.Form}>
            <div className={style.Form__container}>
                <div className={style.Form__container__start}>
                    <div className={style.Form__container__start__title}>
                        Ready To Transform Your Digital Presence?
                    </div>
                    <div className={style.Form__container__start__desc}>
                        Lets work together to achieve your digital goals.
                    </div>
                </div>
                <div className={style.Form__container__end}>
                    <input placeholder='Name' />
                    <input placeholder='Email' />
                    <button>Start Now</button>
                </div>
            </div>
        </motion.div>
    )
}
