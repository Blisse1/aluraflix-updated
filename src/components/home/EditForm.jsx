import "./Form.css"
import { useState } from "react";
import FormInput from "./FormInput";
import OptionList from "./OptionList";

function EditForm({handleEdit, categoriesList, cardId}) {
    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")    // const [descripcion, setDescripcion] = useState("");
    const [option, setOption] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault(); 
        const datos = {
           titulo,
           imagen,
           video,
           option,
        };
        return handleEdit(datos, cardId);
    };

    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
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
                <OptionList 
                    value={option}
                    categories={categoriesList}
                    setValue={setOption}
                />
                <button>Guardar</button>
                <button>Limpiar</button>
            </form>
        </div>
    );
}

export default EditForm;
