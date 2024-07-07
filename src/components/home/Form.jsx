import "./Form.css"
import { useState } from "react";
import FormInput from "./FormInput";

function Form({addCards}) {
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
    // const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault(); 
        const datos = {
           titulo,
           imagen,
           video,
        };
        return addCards(datos);
    };

    return(
        <div className="formContainer">
            <form action="" onSubmit={handleSubmit}>
                <h1>Nuevo Video</h1>
                <span>
                Complete el Formulario para crear una nueva
                tarjeta de video.
                </span>
                <FormInput 
                    titulo="titulo"
                    placeholder="Ingrese el título"
                    value={titulo}
                    setValue={setTitulo}
                />
                <FormInput 
                    titulo="imagen"
                    placeholder="Ingrese la URL de la imagen"
                    value={imagen}
                    setValue={setImagen}
                />
                <FormInput 
                    titulo="video"
                    placeholder="Ingrese la URL del video"
                    value={video}
                    setValue={setVideo}
                />
                <button>Guardar</button>
                <button>Limpiar</button>
            </form>
        </div>
    );
}

export default Form;
