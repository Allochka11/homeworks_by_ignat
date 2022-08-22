import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Header.module.css';

function Header() {

    const [openIcon, setIconOpen] = useState<boolean>(false)

    let openIconButton = openIcon ? `${s.menu__body} ${s._active}` : `${s.menu__body}`;

    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <SuperButton className={s.header__logo} onClick={() => setIconOpen(!openIcon)}></SuperButton>
                <div className={s.header__menu}>
                    <nav className={openIconButton}>
                        <ul className={s.menu__list}>
                            <li><NavLink to={'/pre-junior'}
                                         className={({isActive}) => isActive ? `${s.active}` : s.menu__link}>Pre-junior </NavLink>
                            </li>
                            <li><NavLink to={'/junior'}
                                         className={({isActive}) => isActive ? s.active : s.menu__link}>Junior </NavLink>
                            </li>
                            <li><NavLink to={'/junior_plus'}
                                         className={({isActive}) => isActive ? s.active : s.menu__link}>Junior+ </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            {/*<NavLink to={'/'}>pre-junior </NavLink>*/}
            {/*<NavLink to={'/junior'}>junior </NavLink>*/}
            {/*<NavLink to={'/junior_plus'}>junior+ </NavLink>*/}
        </div>
    )
}

export default Header
