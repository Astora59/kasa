import classes from "./Gallery.module.scss"
//import datas from "../../logements.json"
import Card from "../Card/Card"
/*import { useState } from "react"
import { useEffect } from "react"*/


const logementData = await fetch("./logements.json")
const datas = await logementData.json()


export default function Gallery() {
    /*const [houses, setHouses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("./logements.json")
            const data = await response.json

            setHouses(data)
        }
        fetchData();
    })*/


    return (
        <section className={classes.home_gallery}>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </section>
    )
}