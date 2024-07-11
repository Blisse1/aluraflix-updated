import "./Form.css"
import { useState } from "react";
import FormInput from "./FormInput";
import OptionList from "./OptionList";
import TextArea from "./Textarea";
import { Link } from "react-router-dom";

function Form({addCards, categoriesList}) {
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
    const [description, setDescripcion] = useState("");
    const [option, setOption] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault(); 
        const datos = {
           titulo,
           imagen,
           video,
           option,
           description,
        };
        console.log(datos)
        return addCards(datos);
    };

    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit} className="mainForm">
                <h1>Nuevo Video</h1>
                <span>
                Complete el Formulario para crear una nueva
                tarjeta de video.
                </span>
                <FormInput 
                    titulo="Titulo"
                    placeholder="Ingrese el título"
                    value={titulo}
                    setValue={setTitulo}
                />
                <FormInput 
                    titulo="Imagen"
                    placeholder="Ingrese la URL de la imagen"
                    value={imagen}
                    setValue={setImagen}
                />
                <FormInput 
                    titulo="Video"
                    placeholder="Ingrese la URL del video"
                    value={video}
                    setValue={setVideo}
                />
                <label htmlFor="description">Descripcion: </label>
                <TextArea 
                    placeholder="Ingrese una descripcion"
                    value={description} 
                    setValue={setDescripcion}
                />
                <OptionList 
                    value={option}
                    categories={categoriesList}
                    setValue={setOption}
                />
                <button className="formBtn" onClick={() => {
                    if(titulo, imagen, video, description, option){
                        alert("Carta agregada.")}  
                    }
                }>Guardar</button>
        <button className="formBtn">Limpiar</button>
        </form>
        </div>
    );
}

export default Form;
