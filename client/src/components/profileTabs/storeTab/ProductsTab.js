import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/actions/products";
import AddToStoreBagButton from "../../buttons/AddToStoreBagButton";
import FavouriteButton from "../../buttons/FavouriteButton";


export default function ProductsTab() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  const allProducts = useSelector(state => state.allProducts);
  console.log(allProducts);

  return (


    <div class="card">
      <ul class="list-group list-group-flush">
        {
          allProducts.map(p => {
            return (

              <li class="list-group-item">
                <div>
                  <FavouriteButton name={p.name} category={p.category} id={p.id} price={p.price} />
                </div>
                <div>
                  {p.name}
                </div>
                <div>
                  ${p.price}
                </div>
                <div>
                  <AddToStoreBagButton name={p.name} category={p.category} id={p.id} price={p.price} />
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

