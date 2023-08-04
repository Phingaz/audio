import styled from "./Header.module.css"
import { useState } from "react"
import { NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export const Header = () => {
    const [sh, setSh] = useState(false)

    const shoNa = () => {
        setSh(p => !p)
    }

    return (
        <header className={styled.header}>
            <div className={styled.container}>
                <button onClick={shoNa} className={`${styled.nav_btn} ${sh && styled.openb}`}>
                    <span className={styled.ham}></span>
                    <span className={styled.ham}></span>
                    <span className={styled.ham}></span>
                </button>
                <h1 onClick={() => (setSh(false))}>
                    <NavLink
                        to="/">
                        audiophile
                    </NavLink>
                </h1>
                <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
                    <ul className={styled.nav_links}>
                        <li onClick={() => (setSh(false))}>
                            <NavLink
                                to="/">
                                Home
                            </NavLink>
                        </li>
                        <li onClick={() => (setSh(false))}>
                            <NavLink
                                to="/headphones">
                                Headphones
                            </NavLink>
                        </li>
                        <li onClick={() => (setSh(false))}>
                            <NavLink
                                to="#project">
                                speakers
                            </NavLink>
                        </li>
                        <li onClick={() => (setSh(false))}>
                            <NavLink
                                to="#work">
                                earphones
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className={styled.cart}>
                    <ShoppingCartOutlinedIcon className={styled.icon} />
                    <p className={styled.count}>0</p>
                </div>
            </div>
        </header>
    )
}
