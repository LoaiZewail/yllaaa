import { AnimatePresence } from 'framer-motion'
import style from '../style.module.scss'
import { useState } from 'react';
import MenuItems from './MenuItems';

export default function Menu() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`${style.Menu} ${isActive ? style.MenuOpen : ""}`}>
            <div className={`${style.btn} ${isActive ? style.btnActive : ""}`} onClick={() => { setIsActive(!isActive) }} >
                {isActive ? <img src='/images/Menu_close.png' /> : <img src='/images/Menu_open.png' />}
            </div>

            {/* Menu items*/}
            <AnimatePresence mode="wait">
                {isActive && <MenuItems />}
            </AnimatePresence>
        </div>
    )
}
