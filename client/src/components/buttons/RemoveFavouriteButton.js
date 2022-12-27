import React from "react";
import { useSelector } from "react-redux";
import 'primeicons/primeicons.css';

function RemoveFavouriteButton() {
  const favourites = useSelector(state => state.favourites);

  function handlerRemoveFavourite(){
    
  };

  return (
    <div>
      <button onClick={() => handlerRemoveFavourite()}>x</button>      
    </div>
  );
};

export default RemoveFavouriteButton