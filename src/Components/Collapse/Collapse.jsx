import React from "react";
import arrowUp from "./chevronUp.svg";
import { useState } from "react";
import classes from "./Collapse.module.scss"



export default function Collapse({title, children}) {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={classes.collapse} >
                <h3 className={classes.collapse_title} onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? classes.arrow_down : classes.arrow_up} 
                        src={arrowUp} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? classes.collapse_content : classes.collapse_content_hidden}>
                    {children}
                </div> 
            </div>
        </>
    )
}