import React from "react";
import { useSelector } from "react-redux";

function FavouriteActivities() {
  const favourites = useSelector(state => state.favourites);
  const favActivities = favourites.filter(a => a.category === "activity");
  console.log(favActivities);
  return (
    <div>
      <div class="row text-center">
        {
          favActivities?.map(a => {
            return (
              <div class="col-lg-4 col-sm-6 mb-4">
                <div className="card min-height-activity-card">
                  <img
                    src="https://wallpaperaccess.com/full/1099438.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body overflow-auto">
                    <h5 class="card-title">{a.name}</h5>
                    <span >
                      {a.category}
                    </span>
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

export default FavouriteActivities;