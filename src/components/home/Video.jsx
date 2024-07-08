// import "./Video.css"
// import { useState } from "react";
// import VideoInput from "./VideoInput";
import { useState, useEffect } from "react";
import Form from "./Form";

function Video() {
    const [categoriesList, setCategoriesList] = useState([]);

    const addCards = async (datos) => {
        const postOptions = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        };
        let postCard = await fetch("http://localhost:3000/cards", postOptions);
        await postCard.json();
    };

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("http://localhost:3000/categories");
            const dataCategories = await res.json();
            setCategoriesList(dataCategories);
        }
        getData();
    }, [])

    return (
        <Form addCards={addCards} categoriesList={categoriesList}/>   
    );
}

export default Video;
