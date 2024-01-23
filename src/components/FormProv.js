
function FormProv({ action, title, proveedor, disabled }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={proveedor?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input 
                    type='text' 
                    id='nombre' 
                    name='nombre'
                    placeholder='Nombre'
                    defaultValue={proveedor?.nombre} autoFocus >
                </input>
                <label htmlFor='telefono'>Telefono</label>
                <input 
                    type='text' 
                    id='telefono' 
                    name='telefono'
                    placeholder='telefono'
                    defaultValue={proveedor?.descripcion} 
                />
            </fieldset>
            <button type='submit'>{title}</button>
        </form>
    )
}

export default FormProv