import styled from "./Input.module.css"

export const Input = ({ id, label, name, type, value, onChange, placeholder, required, valid, error }) => {

    return (
        <div className={`${styled.input} ${!valid && styled.invalid}`}>
            <div className={styled.label}>
                <label htmlFor={id}>{label}</label>
                <p>{error}</p>
            </div>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}
