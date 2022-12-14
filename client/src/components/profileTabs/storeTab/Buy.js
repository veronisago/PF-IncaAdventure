import React from "react";

function Buy() {

  return (
    <div>
      <div class="card bg-primary text-white rounded-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="mb-0">Shopping details</h5>
            <img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user.-perconal-symbol-vector-on-white-isolated-background-..jpg"
              class="img-fluid rounded-3" style={{ width: "45px" }} alt="Avatar" />
          </div>

          <p class="small mb-2">Card type</p>
          <a href="#!" type="submit" class="text-white"><i
            class="fab fa-cc-mastercard fa-2x me-2"></i></a>
          <a href="#!" type="submit" class="text-white"><i
            class="fab fa-cc-visa fa-2x me-2"></i></a>
          <a href="#!" type="submit" class="text-white"><i
            class="fab fa-cc-amex fa-2x me-2"></i></a>
          <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

          <form class="mt-4">
            <div class="form-outline form-white mb-4">
              <input type="text" id="typeName" class="form-control form-control-lg" size="17"
                placeholder="Cardholder's Name" />
              <label class="form-label" for="typeName">Cardholder's Name</label>
            </div>

            <div class="form-outline form-white mb-4">
              <input type="text" id="typeText" class="form-control form-control-lg" size="17"
                placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
              <label class="form-label" for="typeText">Card Number</label>
            </div>

            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-outline form-white">
                  <input type="text" id="typeExp" class="form-control form-control-lg"
                    placeholder="MM/YYYY" size="7" id2="exp" minlength="7" maxlength="7" />
                  <label class="form-label" for="typeExp">Expiration</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-outline form-white">
                  <input type="password" id="typeText" class="form-control form-control-lg"
                    placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                  <label class="form-label" for="typeText">Cvv</label>
                </div>
              </div>
            </div>

          </form>

          <hr class="my-4" />

          <div class="d-flex justify-content-between">
            <p class="mb-2">Subtotal</p>
            <p class="mb-2">$2048.00</p>
          </div>

          <div class="d-flex justify-content-between">
            <p class="mb-2">Installing</p>
            <p class="mb-2">$20.00</p>
          </div>

          <div class="d-flex justify-content-between mb-4">
            <p class="mb-2">Total(Incl. taxes)</p>
            <p class="mb-2">$2103.00</p>
          </div>

          <button type="button" class="btn btn-info btn-block btn-lg">
            <div class="d-flex justify-content-between">
              <span>$4818.00</span>
              <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Buy;