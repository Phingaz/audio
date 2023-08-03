import styled from "./Header.module.css"
import { useState } from "react"
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [sh, setSh] = useState(false)

    const shoNa = () => {
        setSh(p => !p)
    }

    return (
        <header className={styled.header}>
            <button onClick={shoNa} className={`${styled.nav_btn} ${sh && styled.openb}`}>
                <span className={styled.ham}></span>
                <span className={styled.ham}></span>
                <span className={styled.ham}></span>
            </button>
            <h1 onClick={() => (setSh(false))}>
                <NavLink
                    smooth
                    to="/#">
                    prosper
                </NavLink>
            </h1>
            <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
                <ul className={styled.nav_links}>
                    <li onClick={() => (setSh(false))}>
                        <NavLink
                            smooth
                            to="/#">
                            Home
                        </NavLink>
                    </li>
                    <li onClick={() => (setSh(false))}>
                        <NavLink
                            smooth
                            to="#about">
                            About
                        </NavLink>
                    </li>
                    <li onClick={() => (setSh(false))}>
                        <NavLink
                            smooth
                            to="#project">
                            Projects
                        </NavLink>
                    </li>
                    <li onClick={() => (setSh(false))}>
                        <NavLink
                            smooth
                            to="#work">
                            Experience
                        </NavLink>
                    </li>
                    <li onClick={() => (setSh(false))}>
                        <NavLink
                            smooth
                            to="/#contact">
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
