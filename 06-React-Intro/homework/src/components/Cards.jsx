import React from 'react';
import Card from './Card';
export default function Cards(props) {
  
  // acá va tu código
  // tip, podés usar un map
   function miFunction(ciudad){
    console.log(props.cities); //ver en consola web F12
   }
  if(!props.cities){
    return (
      <div>
      <h3>No enviates el 'cities, hacelo!</h3>
    </div>
    );
  }
  return <div>
    {
    props.cities?.map((ciudad, index) => {
      return (
      <Card key={ciudad.id} 

      name={ciudad.name}
      max={ciudad.main.temp_max}
      min={ciudad.main.temp_min}
      img={ciudad.weather[0].icon}
      onClose={() => miFunction(ciudad)}
      />
      );
       })}
    </div>;
   
};
