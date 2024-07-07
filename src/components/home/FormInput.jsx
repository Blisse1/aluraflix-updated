function FormInput({ titulo, value, setValue, placeholder, type }){

    const handleChange = (e) => {
           return setValue(e.target.value);
    };

    return (
        <div className="form-input">
            <label htmlFor={titulo}>{titulo}</label>
            <input 
                type={type}
                value={value}
                placeholder={placeholder} 
                required
                onChange={handleChange}
            />
        </div>
    );
}
export default FormInput;

