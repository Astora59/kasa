import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";
import Collapse from "../../Components/Collapse/Collapse";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import greyStar from "./greyStar.svg";
import redStar from "./redStar.svg"
import classes from "./FicheLogement.module.scss"





export default function FicheLogement() {
	const navigate = useNavigate();
    const [imageSlider, setImageSlider] = useState([]);
	const [house, setHouse] = useState();
	const {id} = useParams();
	useEffect(() => {
        async function fetchData() {
			
            const response = await fetch("http://localhost:3000/logements.json")
            const data = await response.json()
			const housefiltered = data.find(item =>item.id === id)
			setImageSlider(housefiltered.pictures);
			if(!housefiltered){
				navigate("*")
				return
			}
            setHouse(housefiltered)
        }
        fetchData();
    }, [])

	if(!house){
		return null
	}

    return(
	<>
        <div className={classes.pageFlex}>
            	<Header/>
			<Slider imageSlider={imageSlider}/>
			<main className={classes.accomodation}>
				<div className={classes.accomodation_content}>
					<div className={classes.accomodation_content_infos}>
						<h1 className={classes.houseTitle}>{house.title}</h1>
						<p className={classes.houseLocation}>{house.location}</p>
						<div>
							{house.tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className={classes.accomodation_content_host}>
						<div>
							<div className={classes.accomodation_content_host_name}>
								<span>{house.host.name.split(' ')[0]}</span>
								<span>{house.host.name.split(' ')[1]}</span>
							</div>
							<img src={house.host.picture} alt="host of this accomodation" />
						</div>
							
						 <div className={classes.accomodation_content_host_stars}>
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={ratingValue} src={ratingValue <= house.rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className={classes.accomodation_collapse}>
					<div className={classes.accomodation_collapse_item}>
						<Collapse title={'Description'}>
							{house.description}
						</Collapse>	
					</div>
					<div className={classes.accomodation_collapse_item}>
						<Collapse title={'Équipements'}>
							<ul className={classes.listCollapse}>
								{house.equipments.map(equipment => {
								return <li key={equipment}>{equipment}</li>})}
							</ul>
						</Collapse>
					</div>	
				</div>
			</main>
        </div>
		<Footer/>
	</>
    );
};