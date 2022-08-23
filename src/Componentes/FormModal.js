import "./FormModal.css"

const FormModal = ({title,children,btnModal}) => {
    return (
        <div className="formModal">
            <h1>{title}</h1>
           <h2>FORMULARIO DE CONTACTO</h2>
           {children}
           <button onClick={btnModal}>X</button>
        </div>
    )
}

export default FormModal