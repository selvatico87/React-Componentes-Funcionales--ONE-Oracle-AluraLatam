import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSingUp(){
  const [name,setName]=useState("")
  return (
    <form>
      <TextField 
        id="name" 
        label="Nombre" 
        variant="outlined"
        fullWidth={true}
        margin='normal'
        onChange={(e)=>{
          console.log(e.target.value) 
          setName(e.target.value)
        }}
        value={name} 
      />
      <TextField 
        id="last-name" 
        label="Apellido" 
        variant="outlined"
        fullWidth  
        margin='normal'
      />
      <TextField 
        id="email" 
        label="Correo Electrónico" 
        type="email" 
        variant="outlined" 
        fullWidth
        margin='normal'
      />
      <FormGroup>
        <FormControlLabel 
          control={<Switch defaultChecked />}
          label="Promociones"
        />
        <FormControlLabel 
          control={<Switch defaultChecked />}
          label="Novedades"
        />
      </FormGroup>

      <Button variant='contained' color='success'>Registrarse</Button>
    </form>
  )
}

export default FormSingUp