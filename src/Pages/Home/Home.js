import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Gallery from "../../Components/Gallery/Gallery";
import classes from "./Home.module.scss"
import bgimage from "../../Components/Banner/home_title.jpg"


export default function Home() {
    return(
        <main className={classes.homeMargin}>
            <Header />
            <Banner>
                <img src={bgimage} alt="home page banner"/>
            </Banner>
            <Gallery />
            <Footer />
        </main>
    );
};