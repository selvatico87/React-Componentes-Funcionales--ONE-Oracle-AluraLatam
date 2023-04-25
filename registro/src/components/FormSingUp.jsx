import Button from '@mui/material/Button';
function FormSingUp(){
  return (
    <form>
      <label>Nombre</label>
      <input type="text" />
      <label>Apellidos</label>
      <input type="text" />
      <label>Correo Electrónico</label>
      <input type="email" />
      <label>Promociones</label>
      <input type="checkbox" />
      <label>Novedades</label>
      <input type="checkbox" />
      <Button variant='contained' color='success'>Registrarse</Button>
    </form>
  )
}

export default FormSingUp