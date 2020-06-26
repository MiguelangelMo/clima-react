import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header'
import Form from './Form'
import Result from './Result'
import Error from './Error'
import '../css/App.css';

function App() {

  const [search, saveSearch] = useState({
    ciudad: '',
    pais: ''
  });

  const [query, saveQuery] = useState(false);
  const [respAPI, saveRespAPI] = useState({});
  const [error, saveError] = useState(false);

  const { ciudad, pais } = search;

  useEffect(() => {
    const queryAPI = async () => {

      if (query) {
        const appId = 'd859718af449f312d9933e733a6eebc1';
        const API = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`);
        const clima = await API.json();
        saveRespAPI(clima)
        saveQuery(false);

        console.log()
        if (respAPI.cod === "404") saveError(true)
        else saveError(false);
      }

    }
    queryAPI()
  }, [query])

  let Component;
  if (error) {
    Component = <Error mensaje="No se encuentra resultado" />
  } else {
    Component = <Result respAPI={respAPI} error={error} />
  }

  return (
    <Fragment>
      <Header title="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveQuery={saveQuery} />
            </div>
            <div className="col m6 s12">
              {Component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
