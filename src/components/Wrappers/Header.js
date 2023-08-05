import styled from "./Header.module.css"
import { useState } from "react"
import { NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react'
import Main from "../../Context";
import { Cart } from "../Utilities/Cart";


export const Header = () => {

    const ctx = useContext(Main)

    const [sh, setSh] = useState(false)

    const shoNa = () => {
        setSh(p => !p)
    }

    return (
        <header className={styled.header}>
            <div className={styled.container}>
                <Cart />
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
                                to="/speakers">
                                speakers
                            </NavLink>
                        </li>
                        <li onClick={() => (setSh(false))}>
                            <NavLink
                                to="/earphones">
                                earphones
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className={styled.cart}>
                    <ShoppingCartOutlinedIcon
                        className={styled.icon}
                        onClick={() => ctx.cartIsVisible()}
                    />
                    <p className={styled.count}>
                        {ctx.cart.items.length === 0 ? '' : ctx.cart.items.length}
                    </p>
                </div>
            </div>
        </header>
    )
}
