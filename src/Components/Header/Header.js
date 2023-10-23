import React from "react";
import classes from "./Header.module.scss"
import { Link } from "react-router-dom";
import Logo from "../../logo.svg"

export default function Header() {
    return (<header>
                <nav className={classes.navbar}>
                    <Link to="/"><img src={Logo} alt="kasa logo" className={classes["kasa-logo"]}/></Link>
                    <ul className={classes.listStyle}>
                        <li>
                            <Link to="/" className={classes.navOptions}>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/about" className={classes.navOptions}>A propos</Link>
                        </li>
                    </ul>
                </nav>
        </header>
)}