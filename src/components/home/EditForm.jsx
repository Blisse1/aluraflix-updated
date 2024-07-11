import "./EditForm.css"
import { useState } from "react";
import FormInput from "./FormInput";
import OptionList from "./OptionList";

function EditForm({handleEdit, categoriesList, cardId}) {
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
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
        <div className="editFormContainer">
            <form onSubmit={handleSubmit} className="edit">
                <h1>Editar Video</h1>
                <FormInput 
                    titulo="Nuevo Titulo"
                    placeholder="Ingrese el título"
                    value={titulo}
                    setValue={setTitulo}
                />
                <FormInput 
                    titulo="Nueva Imagen"
                    placeholder="Ingrese la URL de la imagen"
                    value={imagen}
                    setValue={setImagen}
                />
                <FormInput 
                    titulo="Nuevo Video"
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
