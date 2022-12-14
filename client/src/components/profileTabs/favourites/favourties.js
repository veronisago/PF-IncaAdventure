import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Favourites() {
  const dispatch = useDispatch()
  const favourites = useSelector(state => state.favourites);
  return (
    <div>
      <div>
        {
          favourites?.map(f => {
            return (
              <div>
                <h1>{f.name}</h1>
                <p>{f.schedule}</p>
                
              </div>
            )
          })
        }
      </div>

    </div>
  );
};

export default Favourites;