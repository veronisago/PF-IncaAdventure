import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../../redux/actions/actions/activities";

function ActivitiesTab() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const allActivities = useSelector(state => state.allActivities);
  console.log(allActivities);

  return (
    <div className="col-lg-10 px-lg-3 px-0">
      <div class="row text-center">
        {
          allActivities?.map(a => {
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
                      {a.description}
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

export default ActivitiesTab;