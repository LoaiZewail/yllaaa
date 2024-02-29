import style from '../style.module.scss'
import { motion } from 'framer-motion';

export default function MenuItems() {

    const items = ["Services", "Study Cases", "Blog", "About Us"];

    const itemVariants = {
        open: {
            x: -5,
            opacity: 1,
        },
        closed: {
            x: 5,
            opacity: 0,
        },
    };

    return (
        <motion.div data-theme={"home"} className={style.MenuItems} initial={{ opacity: 0, scaleY: 0 }} animate={{ scaleY: 1, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
            <div className={style.MenuItems__body}>

                <motion.div className={style.links}>
                    {items.map((item) => (
                        <motion.a
                            href={`#${item}`}
                            key={item}
                            variants={itemVariants}
                            initial={"closed"}
                            animate={"open"}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: .3 }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </motion.div>

            </div>
        </motion.div>
    )
}
