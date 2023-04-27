import './App.css';
import Container from '@mui/material/Container';
// import ClassComponent from './components/ClassComponent';
import FormSingUp from './components/FormSingUp';
// import FuncComponent from './components/FuncComponent';
import Typography from '@mui/material/Typography';

function App() {

  const handelSubmit=(valores)=>{
    console.log(valores)
  }

  return (
    <Container component="section" maxWidth="sm">
      {/* <ClassComponent/>
      <FuncComponent/> */}
      <Typography variant="h3" align='center' component="h1" >Formulario Registro</Typography> 
      <FormSingUp handelSubmit={handelSubmit}/>
    </Container>
  );
}

export default App;
