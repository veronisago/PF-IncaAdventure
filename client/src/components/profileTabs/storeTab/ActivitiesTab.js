import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../../redux/actions/actions/activities";
import AddToStoreBagButton from "../../buttons/AddToStoreBagButton";
import FavouriteButton from "../../buttons/FavouriteButton";

function ActivitiesTab() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const allActivities = useSelector(state => state.allActivities);
  console.log(allActivities);

  return (
    <div class="row text-center">
      {
        allActivities?.map(a => {
          return (
            <div class="col-lg-3 col-sm-6 col-12 mb-3">
              <div className="card">
                {/* <img
                    src="https://wallpaperaccess.com/full/1099438.jpg"
                    class="card-img-top"
                    alt="..."
                  /> */}
                <FavouriteButton name={a.name} category={a.category} id={a.id} price={a.price} />
                <div class="card-body overflow-auto">
                  <h5 class="card-title">{a.name}</h5>
                  <p className="no-interaction">${a.price}</p>
                </div>
                <AddToStoreBagButton name={a.name} category={a.category} id={a.id} price={a.price} />
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default ActivitiesTab;