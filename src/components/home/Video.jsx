// import "./Video.css"
// import { useState } from "react";
// import VideoInput from "./VideoInput";
import Form from "./Form";

function Video() {
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

    return (
        <Form addCards={addCards}/>   
    );
}

export default Video;
