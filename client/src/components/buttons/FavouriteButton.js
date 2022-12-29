import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites } from "../../redux/actions/actions/users";

function FavouriteButton({name, category, id, price}){
  const dispatch = useDispatch();
  
  const [favouritesLocal, setFavouritesLocal] = useState([]);
  const favouritesGlobal = useSelector(state => state.favourites);

  useEffect(() => {
    const favourites = window.localStorage.getItem("STORE_DATA");
    if ( favourites !== null ) setFavouritesLocal(JSON.parse(favourites));
    // console.log(favourites);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("STORE_DATA", JSON.stringify(favouritesLocal));
    // console.log(favouritesLocal);
  }, [favouritesLocal]);
  
  function handlerFavouriteButton(e){
    setFavouritesLocal(favouritesGlobal)
    dispatch(addToFavourites({name, category, id, price}));
  };

  return(
    <div>
      <button onClick={(e) => handlerFavouriteButton(e)}>{"<3"}</button>
    </div>
  );
};

export default FavouriteButton;