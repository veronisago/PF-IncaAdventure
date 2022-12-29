import React from 'react';

import UserStoreTab from '../profileTabs/storeTab/UserStoreTab';
import UserReviewsTab from '../profileTabs/reviewsTab/UserReviewsTab';
import FavouritesTab from "../profileTabs/favouritesTab/FavouritesTab"
import ProfileData from './ProfileData';
import Buy from '../profileTabs/storeTab/Buy';



const UserPage = () => {

  return (
    <div class="mx-auto my-auto">


      <div>
        <ProfileData />
      </div>

      <div>
        <Buy />
      </div>

      <div class="col-md-12 border-right mt-5">


        <nav class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-link active" id="nav-store-tab" data-bs-toggle="tab" href="#nav-store" role="tab" aria-controls="nav-store" aria-selected="true">Store</a>
          <a class="nav-link" id="nav-reviews-tab" data-bs-toggle="tab" href="#nav-reviews" role="tab" aria-controls="nav-reviews" aria-selected="false">Reviews</a>
          <a class="nav-link favourites" id="nav-favourites-tab" data-bs-toggle="tab" href="#nav-favourites" role="tab" aria-controls="nav-favourites" tabindex="-1" aria-disabled="true">Favourites</a>
        </nav>

        <div class="tab-content mb-7" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-store" role="tabpanel" aria-labelledby="nav-store-tab"><UserStoreTab /></div>
          <div class="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab"><UserReviewsTab /></div>
          <div class="tab-pane fade" id="nav-favourites" role="tabpanel" aria-labelledby="nav-favourites-tab"><FavouritesTab /></div>
        </div>

      </div>
    </div>

  );
};

export default UserPage