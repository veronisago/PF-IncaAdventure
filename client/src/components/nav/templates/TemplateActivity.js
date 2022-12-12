import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { createActivity } from "../../../redux/actions/actions/activities";

function TemplateActivity(){
  const dispatch = useDispatch();

  const [activityForm, setActivityForm] = useState({
    name: "",
    schedule: "",
    price: 0,
    start_at: 0,
    end_at: 0,
    description: "",
    allowed_age: "",
    difficulty_level: ""
  });

  function handleActivityChange(e){
    setActivityForm({
      ...createActivity,
      [e.target.placeholder]: e.target.value
    });
    console.log(createActivity);
  
  };

  function handleCreateButton(){
  };
  
  function handleSubmit(e){
    e.preventDefault();
    dispatch(createActivity(activityForm));
    
  };

  return(
    <div>

      <div class="row text-center pt-5 mt-5">
              <main class="form-signin w-100 m-auto">
                <form
                  action="http://localhost:3000/profile"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div class="col-md-12"><label class="labels">name</label><input type="text" class="form-control" placeholder="name" onChange={() => handleActivityChange()}/></div>

                  <div class="col-md-12"><label class="labels">scheduler</label><input type="text" class="form-control" placeholder="scheduler" onChange={() => handleActivityChange()}/></div>

                  <div class="col-md-12"><label class="labels">price</label><input type="text" class="form-control" placeholder="price" onChange={() => handleActivityChange()}/></div>

                  <div class="col-md-12"><label class="labels">start_at</label><input type="text" class="form-control" placeholder="start_at" onChange={() => handleActivityChange()}/></div>

                  <div class="col-md-12"><label class="labels">end_at</label><input type="text" class="form-control" placeholder="end_at" onChange={() => handleActivityChange()}/></div>

                  <div class="col-md-12"><label class="labels">description</label><input type="text" class="form-control" placeholder="description" onChange={() => handleActivityChange()}/></div>

                  <div class="col-md-12"><label class="labels">allowed_age</label><input type="text" class="form-control" placeholder="allowed_age" onChange={() => handleActivityChange()}/></div>

                  <div class="col-md-12"><label class="labels">difficulty_level</label><input type="text" class="form-control" placeholder="difficulty_level" onChange={() => handleActivityChange()}/></div>

                  <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={() => handleCreateButton()}>Create</button></div>
                </form>
              </main>
            </div>

    </div>
  );
};

export default TemplateActivity;