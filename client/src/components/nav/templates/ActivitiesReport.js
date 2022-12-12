import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getActivities } from "../../../redux/actions/actions/activities";


function ActivitiesReport() {

  const allActivities = useSelector(state => state.allActivities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      {
        allActivities?.map(a => {
          return (
            <div>

              <div>
                <h5>{a.name}</h5>
              </div>

              <div>
                <h5>{a.schedule}</h5>
              </div>

              <div>
                <h5>{a.start_at}</h5>
              </div>

              <div>
                <h5>{a.end_at}</h5>
              </div>

              <div>
                <h5>{a.difficulty_level}</h5>
              </div>

            </div>
          )
        })
      }
    </div>
  );
};

export default ActivitiesReport;