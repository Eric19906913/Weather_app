import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {

  const [search, saveSearch] = useState({
    city:'',
    country:''
  });
  const [request, saveRequest] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);

  const {city, country} = search;

  const apiReq = async() =>{
    const apiKEY = "0f1f4e91aa793ca6aca3e3861ecea363";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKEY}`;

    const response = await fetch(url);
    const final = await response.json();
    saveResult(final);
    //regresa el estado de la busqueda a false
    saveRequest(false);

    if(final.cod === "404"){
      saveError(true);

    }else{
      saveError(false);
    }

  }

  useEffect(()=>{
    if(request){
      apiReq();
    }
    //Desactiva el warning por las dependencias que no sirven
    //eslint-disable-next-line
  },[request]);

  const message="There are no results for this city";
  return (
    <Fragment>
      <Header
        title='Weather app in react'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveRequest={saveRequest}
              />
            </div>
            <div className="col m6 s12">
              {error ? <Error message={message}/> : <Weather result={result} />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
