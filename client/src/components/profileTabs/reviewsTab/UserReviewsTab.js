import React from "react";
import NewReviewTab from "./CurrentReviewsTab";
import CurrentReviewsTab from "./NewReviewTab";

function UserReviewsTab(){

    return(
      <div className='mt-5'>
      <section class="h-100 h-custom bg-light">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card">
                <div class="card-body p-4">

                  <div class="row">

                    <div class="col-lg-7">
                      <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">

                          <div>
                            <button class="nav-link" id="reviews-nav-currentreviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-nav-currentreviews" type="button" role="tab" aria-controls="reviews-nav-currentreviews" aria-selected="false">Current reviews</button>
                          </div>
                          <div>
                            <button class="nav-link" id="store-nav-newreview-tab" data-bs-toggle="tab" data-bs-target="#reviews-nav-newreview" type="button" role="tab" aria-controls="reviews-nav-newreview" aria-selected="false">New review</button>
                          </div>
                          
                        </div>
                      </nav>
                      <div>
                        <div class="tab-pane fade" id="store-nav-currentreviews" role="tabpanel" aria-labelledby="reviews-nav-activiticurrentreviewses-tab" tabindex="0"><CurrentReviewsTab /></div>

                        <div class="tab-pane fade" id="reviews-nav-newreview" role="tabpanel" aria-labelledby="reviews-nav-newreview-tab" tabindex="0"><NewReviewTab /></div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default UserReviewsTab;