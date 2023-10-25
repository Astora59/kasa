import React from "react";
import classes from "./Banner.module.scss"



export default function Banner(props) {
    return (
        <div className={classes.banner}>
         <img src={props} alt="banner background" className={classes.banner__image} />
         <p className={classes.banner__text}>Chez vous, partout et ailleurs</p>   
        </div>
    );
}