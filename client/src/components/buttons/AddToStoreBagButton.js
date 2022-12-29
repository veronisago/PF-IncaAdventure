import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToStoreBag } from "../../redux/actions/actions/stores";

function AddToStoreBagButton({name, category, id, price}) {
  const dispatch = useDispatch();

  const [storeBagLocal, setStoreBagLocal] = useState([]);
  const storeBagGlobal = useSelector(state => state.storeBag);

  function handler(){
    setStoreBagLocal(storeBagGlobal)
    dispatch(addToStoreBag({name, category, id, price}));
  };

  return (
    <div>
      <button onClick={() => handler()}>Add</button>
    </div>
  );
};

export default AddToStoreBagButton;