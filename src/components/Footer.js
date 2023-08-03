import "./Footer.scss"
import { Header } from "./Header"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="heading">
                <p>audiophile</p>

                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>

            <div className="text">
                <p>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
                </p>
                <div className="icons">
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
               </div>
            </div>

            <p>Copyright 2021. All Rights Reserved</p>
        </div>
    )
}
