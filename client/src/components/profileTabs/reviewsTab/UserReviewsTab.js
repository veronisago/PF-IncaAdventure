import React from "react";
import NewReviewTab from "./NewReviewTab";
import CurrentReviewsTab from "./CurrentReviewsTab";

function UserReviewsTab() {

  return (

    <div >

      <nav class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-link active" id="nav-currentreviews-tab" data-bs-toggle="tab" href="#nav-currentreviews" role="tab" aria-controls="nav-currentreviews" aria-selected="true">Current reviews</a>
        <a class="nav-link" id="nav-newreview-tab" data-bs-toggle="tab" href="#nav-newreview" role="tab" aria-controls="nav-newreview" aria-selected="false">New review</a>

      </nav>
      <div class="tab-content mb-7" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-currentreviews" role="tabpanel" aria-labelledby="nav-currentreviews-tab"><CurrentReviewsTab /></div>
        <div class="tab-pane fade" id="nav-newreview" role="tabpanel" aria-labelledby="nav-newreviewº-tab"><NewReviewTab /></div>

      </div>

    </div>
  );
};

export default UserReviewsTab;