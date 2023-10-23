import React from "react";
import classes from "./Footer.module.scss"
import Logo from "../../logo.svg"


export default function Footer() {
	return (
		<footer className={classes.footContainer}>
			<img src={Logo} alt="logo de kasa" className={classes.footer_logo}/>
			<p className={classes.footContainer__text}>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
