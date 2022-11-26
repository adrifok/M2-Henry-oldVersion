import React from 'react';
import Style from '../styles/Card.module.css'

export default function Card({name, min,max,img,onClose}) {   //destructuring
  // acá va tu código
  return (
    <div className={Style.card}>
    <button onClick={onClose} id={Style.botonx}> 
    {''}
    X{' '}
     </button>

    <div className={Style.bodyCarta}>
          <h3>{name}</h3>

          <div className={Style.soloImagenyTemp}>
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather"

              ></img>
              <h5>Min {min}</h5>
              <h5>Max {max}</h5>

              </div>
            </div>
          </div>
  );
};



//  - **max**: Temperatura Máxima.
// - **min**: Temperatura Mínima.
// - **name**: Nombre de la ciudad.
// - **img**: nombre de la imagen que se debe mostrar.
// - **onClose**: recibe una función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.