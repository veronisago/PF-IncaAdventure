import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToStoreBag } from "../../redux/actions/actions/stores";

function AddToStoreBagButton({name, category, id, price}) {
  const dispatch = useDispatch();

  const [storeBagLocal, setStoreBagLocal] = useState([]);
  const storeBagGlobal = useSelector(state => state.storeBag);

  useEffect(() => {
    const storeBag = window.localStorage.getItem("STORE_DATA");
    if ( storeBag !== null ) setStoreBagLocal(JSON.parse(storeBag));
    console.log(storeBag);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("STORE_DATA", JSON.stringify(storeBagLocal));
    console.log(storeBagLocal);
  }, [storeBagLocal]);

  function handler(e){
    setStoreBagLocal(storeBagGlobal)
    dispatch(addToStoreBag({name, category, id, price}));
  };

  return (
    <div>
      <button onClick={(e) => handler(e)}>Add</button>
    </div>
  );
};

export default AddToStoreBagButton;