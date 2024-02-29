import { motion } from 'framer-motion'
import style from "../style.module.scss";
import MagnaticButton from '@/common/MagnaticFramer';
export default function Header() {

    return (
        <motion.div initial={{ scaleY: .01, scaleX: .5, opacity: .1 }} animate={{ scaleY: 1, scaleX: 1, opacity: 1 }} transition={{ duration: 2, delay: 1 }} className={style.Header}>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 2 }} className={style.Header__start}>
                Speak Your Language,<br /> Save Your Euros,<br /> Start up now
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 2 }} className={style.Header__end}>
                Bespoke and Dedicated Agency Just for you
                <div style={{ width: "fit-content" }}>


                    <MagnaticButton>
                        <div className={style.Header__end__btn}>
                            Free Consultation
                        </div>
                    </MagnaticButton>
                </div>
            </motion.div>
        </motion.div>
    )
}
