import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/actions/products";

export default function ProductsTab() {
	const dispatch = useDispatch();

  useEffect(() => {
		dispatch(getProducts())
	}, [dispatch]);

	const allProducts = useSelector(state => state.allProducts);
  console.log(allProducts);

  return (
    <div id="products" className="col-lg-10 px-lg-3 px-0">
      <div class="row">
        {
          allProducts.map(p => {
            return (
              <div class="col-lg-3 col-sm-6 col-12 mb-3 ">
                <div class="card cardShop">
                  <img class="card-img-top cardShop-img-top mb-2" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap" />
                  <div class="card-body cardShop-body">
                    <p class="card-text no-interaction capitalize fw-bold">{p.name}</p>
                    <p className="no-interaction">${p.price}</p>
                    <span class="fa fa-circle" id="red"></span>
                    <span class="fa fa-circle" id="teal"></span>
                    <span class="fa fa-circle" id="blue"></span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
     </div> 
  );
};

