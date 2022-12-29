import React, { useEffect, useState } from 'react'
import ProductsTab from './ProductsTab';
import PaymentsTab from './PaymentsTab';
import ActivitiesTab from './ActivitiesTab';

const UserStoreTab = () => {



  return (
    <div class="row">
      <div>
        <nav class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-link active" id="nav-activities-tab" data-bs-toggle="tab" href="#nav-activities" role="tab" aria-controls="nav-activities" aria-selected="true">Activities</a>
          <a class="nav-link" id="nav-products-tab" data-bs-toggle="tab" href="#nav-products" role="tab" aria-controls="nav-products" aria-selected="false">Products</a>
          <a class="nav-link payments" id="nav-payments-tab" data-bs-toggle="tab" href="#nav-payments" role="tab" aria-controls="nav-payments" tabindex="-1" aria-disabled="true">Payments</a>
        </nav>
      </div>

      <div>
        <div class="tab-content mb-7" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-activities" role="tabpanel" aria-labelledby="nav-activities-tab"><ActivitiesTab /></div>
          <div class="tab-pane fade" id="nav-products" role="tabpanel" aria-labelledby="nav-products-tab"><ProductsTab /></div>
          <div class="tab-pane fade" id="nav-payments" role="tabpanel" aria-labelledby="nav-payments-tab"><PaymentsTab /></div>
        </div>
      </div>
    </div>
  )
}

export default UserStoreTab;