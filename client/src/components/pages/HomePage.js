import React from "react";
import '../styles/styles.css'

function HomePage() {
    return (
        <div>
            <div class="container-fluid bg-green">
                <div class="row">
                    <div class="col-lg-6 my-5 py-lg-5 d-flex flex-column align-items-lg-end align-items-center pr-6 justify-content-center">
                        <h1 class="display-4 fw-bold text-center">Inca Adventure</h1>
                        <span class="display-4 fw-bold text-lg-end text-center text-light">The Eco-Adventure</span>
                        <div class="input-group mb-3 input-width mt-4">
                            <input type="text" class="form-control" placeholder="Insert email"
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-success" type="button" id="button-addon2">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-6 my-lg-5 py-lg-5 mb-5 d-flex justify-content-lg-start justify-content-center align-items-center pl-6">
                        <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 mb-5 mb-lg-0">
                            <div className="ratio ratio-16x9 d-flex">
                                <iframe
                                    src="https://www.youtube.com/embed/Zk9J5xnTVMA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd1080&origin=https://youtubeembedcode.com"
                                    title="YouTube video"
                                    className="rounded-4 shadow-4-strong"
                                    allowfullscreen=""
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- CARDS --> */}

            <div class="container-fluid">
                <div class="container py-4">
                    <div class="row text-center">
                        <h2 class="h2">
                            MOST POPULAR <span class="text-success">ACTIVITIES</span>
                        </h2>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-4 col-sm-6">
                            <div className="card card px-0 my-3">
                                <img src="https://wallpaperaccess.com/full/1099438.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                                        voluptatem nemo fugit dolorum, fugiat, similique quas delectus
                                        enim laborum aperiam, odio quod praesentium maiores voluptatum
                                        tenetur suscipit tempore minus ipsum!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className="card card px-0 my-3">
                                <img src="https://www.tours-machupicchu-peru.com/wp-content/uploads/2021/10/Tour-a-la-Montana-7-Colores-1-Dia.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                                        voluptatem nemo fugit dolorum, fugiat, similique quas delectus
                                        enim laborum aperiam, odio quod praesentium maiores voluptatum
                                        tenetur suscipit tempore minus ipsum!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className="card card px-0 my-3">
                                <img src="https://www.peru.travel/Contenido/Atractivo/Imagen/en/190/1.1/Principal/pn-huascaran.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                                        voluptatem nemo fugit dolorum, fugiat, similique quas delectus
                                        enim laborum aperiam, odio quod praesentium maiores voluptatum
                                        tenetur suscipit tempore minus ipsum!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className="card card px-0 my-3">
                                <img src="https://wallpaperaccess.com/full/1099438.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                                        voluptatem nemo fugit dolorum, fugiat, similique quas delectus
                                        enim laborum aperiam, odio quod praesentium maiores voluptatum
                                        tenetur suscipit tempore minus ipsum!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className="card card px-0 my-3">
                                <img src="https://www.tours-machupicchu-peru.com/wp-content/uploads/2021/10/Tour-a-la-Montana-7-Colores-1-Dia.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                                        voluptatem nemo fugit dolorum, fugiat, similique quas delectus
                                        enim laborum aperiam, odio quod praesentium maiores voluptatum
                                        tenetur suscipit tempore minus ipsum!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className="card card px-0 my-3">
                                <img src="https://www.peru.travel/Contenido/Atractivo/Imagen/en/190/1.1/Principal/pn-huascaran.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                                        voluptatem nemo fugit dolorum, fugiat, similique quas delectus
                                        enim laborum aperiam, odio quod praesentium maiores voluptatum
                                        tenetur suscipit tempore minus ipsum!</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* <!-- FOOTER --> */}

            <footer class="container-fluid bg-light px-0">
                <div class="container py-lg-5 py-4">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 px-4">
                            <span class="h5">ABOUT US</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                                omnis quidem tempora, rem vel recusandae ea nisi esse similique
                                sed? Necessitatibus recusandae repellat culpa officiis incidunt
                                est, repudiandae doloremque vel.
                            </p>
                        </div>
                        <div class="col-lg-5 col-md-6 px-4 mt-md-0 mt-3">
                            <span class="h5">ABOUT US</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                                omnis quidem tempora, rem vel recusandae ea nisi esse similique
                                sed? Necessitatibus recusandae repellat culpa officiis incidunt
                                est, repudiandae doloremque vel.
                            </p>
                        </div>
                        <div class="col-lg-4 px-4 mt-lg-0 mt-3">
                            <form>
                                <div class="mb-1">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" />
                                </div>
                                <div class="mb-1">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" />
                                </div>
                                <div class="form-group mb-1">
                                    <label class="form-label" for="message ">Message</label>
                                    <textarea class="form-control" id="message" name="message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary mt-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <footer class="container-fluid bg-dark text-center footer py-2">
    <span class="text-muted">Copyrigth 2022-2023 IncaAdventure SA - pending pattent &#174;</span>
</footer>

        </div>
    );
}

export default HomePage;
