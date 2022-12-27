import React, { useState } from "react";

function QuantityStore() {

  const [quantityBag, setQuantityBag] = useState(0);
  
  function handleDecrement() {
setQuantityBag(quantityBag - 1);
  };
  
  function handleIncrement() {
    setQuantityBag(quantityBag + 1);
  };

  return (
    <div>
      <button onClick={handleDecrement} disabled={quantityBag < 1}>-</button>
      <div>{quantityBag}</div>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default QuantityStore;