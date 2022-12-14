import React from "react";
import { useDispatch } from "react-redux";

function FavouriteButton(){
  const dispatch = useDispatch();
  function handleFavouriteButton(){
    dispatch(addToFavourite)
  };

  return(
    <div>
      <button onClick={(e) => handleFavouriteButton(e)}></button>
    </div>
  );
};

export default FavouriteButton;