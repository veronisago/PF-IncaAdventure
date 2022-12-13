import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "../../redux/actions/actions/users";
import { useDispatch, useSelector } from 'react-redux';
import DashboardCreate from './DashboardCreate';


const UserPage = () => {
    const { user } = useAuth0();
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (user) dispatch(createUser(user))
    }, [dispatch, user])

    const userProfile = useSelector((state) => state.userProfile)


    return (
        <div class="mx-auto my-auto">
            <div class="container rounded bg-light mt-5 mb-5 ">
                <div class="row bg-light">

                    <div class="col-md-3 border-right mt-5">
                        <h4 class="text-right">Profile Settings</h4>
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold"></span><span>{userProfile?.username}</span></div>
                    
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" value={userProfile?.first_name} /></div>
                                <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value={userProfile?.last_name} /></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" value={userProfile?.email} /></div>
                                <div class="col-md-12"><label class="labels">Passport number</label><input type="text" class="form-control" value={userProfile?.id_number} /></div>
                                <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" value={userProfile?.email} /></div>
                            </div>
                            <div class="row mt-3 ">
                                <div class="col-md-4"><label class="labels"></label><input type="text" class="form-control" value={userProfile?.nationality} /></div>
                                <div class="col-md-4"><label class="labels">Language</label><input type="text" class="form-control" value={userProfile?.language} /></div>
                            </div>
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>

                        </div>
                        </div>
                        <div class="container col-4 mt-2">
                        <div class="p-3 py-5">
                            <div class="col-md-12"><label class="labels">Disabilities / Allergies</label><input type="text" class="form-control" placeholder="Disabilities / Allergies" value="" /></div> <br />
                            <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="Additional details" value="" /></div>
                        </div>
                    </div>
                    </div>
                    
										<div>
											<DashboardCreate />
										</div>
                </div>
            </div>

        </div>
    );
};

export default UserPage