import React from "react";
import classes from "./Card.module.scss";
import { Link } from 'react-router-dom';

export default function Card({id, title, cover}) {

	return (
		<Link to={`logement/${id}`} className={classes.gallery_card}>
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	
	)
}