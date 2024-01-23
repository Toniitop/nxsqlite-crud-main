import Form from "@/components/FormProv"
import { newProveedor } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo proveedor</h3>
        <Form action={newProveedor} title='Crear proveedor' articulo={null} disabled={false}  />
    </div>
  )
}

export default page