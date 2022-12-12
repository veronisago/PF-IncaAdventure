import React from 'react'

const CartPage = () => {
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
                      <h5 class="mb-3">
                        <a href="/shop" class="text-body"><i class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                      <hr />

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

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://universoventura.vteximg.com.br/arquivos/ids/193489-500-500/Botas-Alaska-Chalten-Trekking-Waterproof-Hombre-Beige-BB19018.jpg"
                                  class="img-fluid rounded-3" alt="Shopping item" style={{ width: "50px" }} />
                              </div>
                              <div class="ms-3 text-start">
                                <h5>Botas de Trekking</h5>
                                <p class="small mb-0">T42, Navy Bison</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <h5 class="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 class="mb-0">$300</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://codisur.com.ar/wp-content/uploads/2020/08/prod_4653_0_bi.jpg"
                                  class="img-fluid rounded-3" alt="Shopping item" style={{ width: "50px" }} />
                              </div>
                              <div class="ms-3 text-start">
                                <h5>Bastón para Trekking</h5>
                                <p class="small mb-0">45cm - 123cm, Black</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <h5 class="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 class="mb-0">$50</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                  class="img-fluid rounded-3" alt="Shopping item" style={{ width: "50px" }} />
                              </div>
                              <div class="ms-3 text-start">
                                <h5>Canon EOS M50</h5>
                                <p class="small mb-0">Onyx Black</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <h5 class="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 class="mb-0">$899</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card mb-3 mb-lg-0">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://img.freepik.com/fotos-premium/equipo-senderismo-sobre-fondo-color_392895-10314.jpg"
                                  class="img-fluid rounded-3" alt="Shopping item" style={{ width: "50px" }} />
                              </div>
                              <div class="ms-3 text-start">
                                <h5>Equipo de Senderismo</h5>
                                <p class="small mb-0">Men, Only color</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <h5 class="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 class="mb-0">$799</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="col-lg-5">

                      <div class="card bg-primary text-white rounded-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="mb-0">Card details</h5>
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

export default CartPage