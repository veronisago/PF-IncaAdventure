import React from "react";
import { useSelector } from "react-redux";
import AddToStoreBagButton from "../../buttons/AddToStoreBagButton";
import RemoveFavouriteButton from "../../buttons/RemoveFavouriteButton";
// import FavouriteActivities from "./FavouriteActivities";
// import FavouriteProducts from "./FavouriteProducts";

function FavouritesTab() {
  const favourites = useSelector(state => state.favourites);
  console.log(favourites);

  return (
    <div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Store</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">id</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            favourites?.map(f => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td><AddToStoreBagButton name={f.name} category={f.category} id={f.id} price={f.price}/></td>
                  <td>{f.name}</td>
                  <td>{f.category}</td>
                  <td>{f.id}</td>
                  <td>{f.price}</td>
                  <td><RemoveFavouriteButton /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default FavouritesTab;