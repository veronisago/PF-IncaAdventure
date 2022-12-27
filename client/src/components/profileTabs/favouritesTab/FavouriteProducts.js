import React from "react";
import { useSelector } from "react-redux";

function FavouriteProducts() {
  const favourites = useSelector(state => state.favourites);
  const favProducts = favourites.filter(p => p.category === "product");
  console.log(favProducts);
  return (
    <div>
      <div class="row text-center">
        {
          favProducts?.map(p => {
            return (
              <div class="col-lg-3 col-sm-6 col-12 mb-3 ">
                <div class="card cardShop">
                  <img class="card-img-top cardShop-img-top mb-2" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap" />
                  <div class="card-body cardShop-body">
                    <p class="card-text no-interaction capitalize fw-bold">{p.name}</p>
                    <p className="no-interaction">{p.category}</p>
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

export default FavouriteProducts;