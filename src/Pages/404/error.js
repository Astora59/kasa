import React from "react"
import classes from "./error.module.scss"
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer"


export default function Error() {
    return (
    <>
        <main className={classes.pageFlex}>
            <Header />
            <div className={classes.error_infos}>
				<h1 className={classes.error_404}>404</h1>
				<p className={classes.error_text}>Oups ! La page que vous demandez n'existe pas.</p>
			</div>
				<Link className={classes.home_link} to='/'>Retourner sur la page d'accueil</Link>
        </main>
        <Footer />
    </>
    )
}
 
