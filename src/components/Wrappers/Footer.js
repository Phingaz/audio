import "./Footer.scss"
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="heading">
                    <h1>
                        <NavLink
                            to="/#">
                            audiophile
                        </NavLink>
                    </h1>
                    <ul>
                        <li>
                            <NavLink
                                to="/#">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/#">
                                Headphones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/#">
                                speakers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/#">
                                earphones
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>

                <div className="text">
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
                    </p>
                    <div className="icons">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </div>
                </div>

                <p>Copyright 2021. All Rights Reserved</p>
            </div>
        </div>
    )
}
