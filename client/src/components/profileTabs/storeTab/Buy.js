import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveStoreButton from "../../buttons/RemoveStoreButton";
import { addToStoreBag, removeStoreBag } from "../../../redux/actions/actions/stores";

function Buy() {
  // const dispatch = useDispatch();
  const storeBag = useSelector(state => state.storeBag)
  // console.log(storeBag);
  const [localStoreBag, setLocalStoreBag] = useState([]);

  let totalToPay = storeBag.reduce((a, b) => a + b.price, 0);


  useEffect(() => {
    const data = window.localStorage.getItem("STOREBAG");
    console.log(data);
    if (data !== null) setLocalStoreBag(JSON.parse(data));
    console.log(localStoreBag);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("STOREBAG", JSON.stringify(storeBag));
  }, [storeBag]);


  const [quantityBag, setQuantityBag] = useState(1);

  function handleDecrement() {
    setQuantityBag(quantityBag - 1);
  };

  function handleIncrement() {
    setQuantityBag(quantityBag + 1);
  };


  return (
    <div>
      <table class="table" >
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">ID</th>
            <th scope="col">Price (hacer un convertor de monedas)</th>
            <th scope="col"> "-" Amount "+" </th>
            <th scope="col">Stock</th>
            <th scope="col">Total</th>

          </tr>
        </thead>
        <tbody>

          {
            storeBag?.map(s => {
              return (
                <tr>
                  <th scope="row"></th>
                  <td><RemoveStoreButton id={s.id} onClick={() => removeStoreBag()} /></td>
                  <td>{s.name}</td>
                  <td>{s.category}</td>
                  <td>{s.id}</td>
                  <td>
                    <div>
                      <p className="no-interaction">${s.price}</p>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <button onClick={handleDecrement} disabled={quantityBag <= 1}>-</button>
                      <div>{quantityBag}</div>
                      <button onClick={handleIncrement}>+</button>
                    </div>
                  </td>
                  <td>{s.stock}</td>
                  <td id="sumaTotales">{Number(s.price) * Number(quantityBag)}</td>

                </tr>
              )
            })
          }

        </tbody>
      </table>
      <footer>
        <div class="d-flex justify-content-between">
          <p class="mb-2">Total quantity</p>
          <p class="mb-2" >{storeBag.length}</p>
        </div>

        <div class="d-flex justify-content-between mb-4">
          <p class="mb-2">Total</p>
          <p class="mb-2">${totalToPay}</p>
        </div>

        <button type="button" class="btn btn-info btn-block btn-lg">
          <div class="d-flex justify-content-between">
            <span>${totalToPay}</span>
            <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
          </div>
        </button>
      </footer>
    </div>
  );
};

export default Buy;