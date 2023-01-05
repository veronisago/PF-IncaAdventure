import React from "react";
import { Link } from "react-router-dom";
import video from '../../Media/Video2.mp4';
import img from '../../Media/button.png';
import s from '../styles/SuccessPage.module.css'

//pagina que muestra la transaccion aprobada
// aqui va  el diseño de boostrap

const SuccessPage = () => {
    return (
        //z-index-900
        <div className={s.allcontainer}>
            <video muted autoPlay loop>
                <source src={video} type="video/mp4" />
            </video>
            <div style={{zIndex:1}}>
                <div className=" card w-50  mt-5  bg-dark bg-light border mx-auto pt-3 pb-3 ">
                    <div class="text-center strong text-light ">
                        <h1 class="">ENJOY YOUR PURCHASE</h1>
                        <h5><small>Remember to print or save your voucher</small></h5>
                        <h5><small>so that you can claim your products in the corresponding stores</small></h5>
                    </div>
                </div>
                <div className={s.button}>
                    <Link to="/home">
                        <button className="btn">
                            <img src={img} alt="" />{" "}
                            <h1 className=" bg-image color-danger text-center"><b className="border btn text-white">HOME</b></h1>
                        </button>
                    </Link>

                </div>
            </div>

        </div>
    );
};



export default SuccessPage;