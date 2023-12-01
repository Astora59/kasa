import React from "react";
import classes from "./Banner.module.scss"



export default function Banner(props) {
    return (
        <div className={classes.banner}>
         <img src={props.imageSrc} alt={props.altImage} className={classes.banner__image} />
         {props.children && (
            props.children
         )}   
        </div>
    );
}