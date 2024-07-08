// import "./OptionList.css"

function OptionList({value, setValue, categories}){
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="option-list">
        <label>Categorias</label>
        <select value={value} onChange={handleChange}>
            <option value="" defaultValue="" disabled hidden>Seleccionar Categoría</option>
            { 
                categories.map((category, idx) => {
                    return <option key={idx}>{category.title}</option>
                })
            }
        </select>
        </div>
    );
}
export default OptionList;
