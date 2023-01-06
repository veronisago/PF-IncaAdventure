import React from 'react'

export const DetailPage = () => {
  return (
    <div>

<div class="container">
    <div class="row justify-content-center border rounded border-info mt-5 pt-5 bg-light">
        <div class="col-md-7 col-lg-5 mb-5 mb-lg-0 wow fadeIn">
            <div class="card border-0 shadow mx-3 mb-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg" alt="..."/>
                <div class="card-body p-1-9 p-xl-5">
                    <div class="mb-4">
                        <h3 class="h4 mb-0">Title</h3>  
                    </div>
                    <ul class="list-unstyled mb-4">
                        <li class="mb-3"><a href="#!"><i class="far fa-envelope display-25 me-3 text-secondary"></i> Añadir al carro</a></li>
                        <li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>Escribir una Reseña</a></li>
                    </ul>
                    <ul class="social-icon-style2 ps-0">
                        <li><a href="#!" class="rounded-3"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-7 pt-5">
            <div class="ps-lg-1-6 ps-xl-5">
                <div class="mb-5 wow fadeIn">
                    <div class="text-center mb-1-6 wow fadeIn">
                        <h2 class="h1 mb-0 text-primary">Activity or Product Name Render</h2>
                    </div>
                </div>
                <div class="mb-5 wow fadeIn">
                    <div class="text-center mb-1-6 wow fadeIn">
                        <h2 class="mb-0 text-black">Características</h2>
                    </div>
                    <div class="row mt-n4">
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Reserva Anticipada</h3>
                                    <p class="mb-0">Necesaria</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Precio</h3>
                                    <p class="mb-0">$2230</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Categoria</h3>
                                    <p class="mb-0">Trekking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wow fadeIn">
                    <div class="text-center mb-1-6 wow fadeIn">
                        <h2 class="mb-0 text-primary">Availabilty</h2>
                        <span>Yes/No</span>
                    </div>
                </div>
                <div class="wow fadeIn">
                    <div class="text-center mb-1-6 wow fadeIn">
                        <h2 class="mb-0 text-primary">Reviews</h2>
                        <span>Render reviews Count Here</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
