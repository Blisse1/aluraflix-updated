function TextArea({ value, setValue, placeholder }){

    const handleChange = (e) => {
           return setValue(e.target.value);
    };

    return (
        <textarea 
            onChange={handleChange} 
            placeholder={placeholder}
            name="" 
            id="description" 
            cols="30" 
            rows="10" 
            value={value}>
        </textarea>
    );
}
export default TextArea;
