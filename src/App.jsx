import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Form from './components/form/Form'
import Clima from './components/clima/Clima'
import Error from './components/error/Error'


const App = () => {

   const [busqueda, setBusqueda] = useState({
      ciudad: '',
      pais: ''
    });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;
 
  useEffect(() => {
    const consultarAPI = async() => {
      
      if(consultar){
        const appID = '1023c68356a26798fd1a85fff546c0d9';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);
        setConsultar(false);

        //verificando resultados en la consulta de la API
        if(resultado.cod === "404"){
          setError(true);    
        } else{
          setError(false);
        }
      }
    }
    consultarAPI();
  },[consultar])

  let component;
  if(error){
    component = <Error mensaje="Ciudad no encontrada, intente nuevamente"/>
  } else{
    component = <Clima resultado={resultado}/>
  }


  return(
    <>
      <Header 
        title="Consulta Metereologíca Ven 9-1-1"
      />
      <div className="form-container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Form
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
          </div>

          <div className="col-md-6 col-sm-12">
            {component}
          </div>
        </div>        
      </div>
    </>
  );
}


export default App