import React from "react";
import NewActivityReview from "./NewActivityReview";
import NewProductReview from "./NewProductReview";
import PurchaseReview from "./PurchaseReview";

function NewReviewTab() {

  return (
   <div>
     <nav class="nav nav-tabs" id="nav-tab" role="tablist">
    
        <a class="nav-link active" id="nav-activities-tab" data-bs-toggle="tab" href="#nav-activities" role="tab" aria-controls="nav-activities" aria-selected="true">Activity</a>
        <a class="nav-link" id="nav-products-tab" data-bs-toggle="tab" href="#nav-products" role="tab" aria-controls="nav-products" aria-selected="false">Product</a>
        <a class="nav-link payments" id="nav-payments-tab" data-bs-toggle="tab" href="#nav-payments" role="tab" aria-controls="nav-payments" tabindex="-1" aria-disabled="true">Purchase</a>
      </nav>
      <div class="tab-content mb-7" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-activities" role="tabpanel" aria-labelledby="nav-activities-tab"><NewActivityReview /></div>
        <div class="tab-pane fade" id="nav-products" role="tabpanel" aria-labelledby="nav-products-tab"><NewProductReview /></div>
        <div class="tab-pane fade" id="nav-payments" role="tabpanel" aria-labelledby="nav-payments-tab"><PurchaseReview /></div>
      </div>
   </div>
  );
};

export default NewReviewTab;