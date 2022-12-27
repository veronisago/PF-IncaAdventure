import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { removeStoreBag } from "../../redux/actions/actions/stores";

function RemoveStoreButton(id) {
  const dispatch = useDispatch();

  function handleRemove(){
    dispatch(removeStoreBag(id))
  };

  return (
    <div>
      <button onClick={() => handleRemove()}>x</button>
    </div>
  );
};

export default RemoveStoreButton;