import React from 'react'
import ProductsTab from './ProductsTab';
import PaymentsTab from './PaymentsTab';
import Buy from "./Buy";
import ActivitiesTab from './ActivitiesTab';

const UserStoreTab = () => {



  return (
    <div className='mt-5'>
      <section class="h-100 h-custom bg-light">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card">
                <div class="card-body p-4">

                  <div class="row">

                    <div class="col-lg-7">



                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p class="mb-1 text-start">Shopping cart</p>
                          <p class="mb-0 text-start">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                            class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>

                      <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">

                          <div>
                            <button class="nav-link" id="store-nav-activities-tab" data-bs-toggle="tab" data-bs-target="#store-nav-activities" type="button" role="tab" aria-controls="store-nav-activities" aria-selected="false">Activities</button>
                          </div>
                          <div>
                            <button class="nav-link" id="store-nav-products-tab" data-bs-toggle="tab" data-bs-target="#store-nav-products" type="button" role="tab" aria-controls="store-nav-products" aria-selected="false">Products</button>
                          </div>
                          <div>
                            <button class="nav-link" id="store-nav-payments-tab" data-bs-toggle="tab" data-bs-target="#store-nav-payments" type="button" role="tab" aria-controls="store-nav-payments" aria-selected="false">Payments</button>
                          </div>
                        </div>
                      </nav>
                      <div>
                        <div class="tab-pane fade" id="store-nav-activities" role="tabpanel" aria-labelledby="store-nav-activities-tab" tabindex="0"><ActivitiesTab /></div>

                        <div class="tab-pane fade" id="store-nav-products" role="tabpanel" aria-labelledby="store-nav-products-tab" tabindex="0">
                          <div class="card mb-3">
                            <ProductsTab />
                          </div>
                        </div>

                        <div class="tab-pane fade" id="store-nav-payments" role="tabpanel" aria-labelledby="store-nav-payments-tab" tabindex="0">
                          <div class="col-lg-5">
                            <PaymentsTab />
                          </div>
                        </div>
                      </div>

                    <div>
                      <Buy />
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
  )
}

export default UserStoreTab;