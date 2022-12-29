import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "../../redux/actions/actions/users";
import { useDispatch, useSelector } from 'react-redux';

function ProfileData() {

  const { user } = useAuth0();
  // console.log(user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) dispatch(createUser(user))
  }, [dispatch, user])

  const userProfile = useSelector((state) => state.userProfile)


  return (
    <div class="row ">
      <div
        class=""
      ><img class="rounded-circle" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
      </div>

      <div class="col mt-2">
        <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" value={userProfile?.username} /></div>
        <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" value={userProfile?.first_name} /></div>
        <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value={userProfile?.last_name} /></div>
        <div class="col-md-6"><label class="labels">Email</label><input type="text" class="form-control" value={userProfile?.email} /></div>
      </div>
    </div>
  );
};

export default ProfileData;