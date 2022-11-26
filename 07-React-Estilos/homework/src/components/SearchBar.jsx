import React from 'react';
import Style from "../styles/Searchbar.modules.css";

export default function SearchBar(props) {
  // acá va tu código

  return (
  <div>
    <input type = 'text' placeholder='umbrella today?' className={Style.input}/>
    <button className={Style.boton} onClick={() => props.onSearch('Denver')}> 
    {' '}
    Agregar{' '} 
    </button>
  </div>

  )
};