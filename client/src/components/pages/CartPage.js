import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { ShoppingCard } from '../shoppingCard/ShoppingCard';
import { setLocalStorageCart } from '../../redux/actions/actions/stores';
import MercadoPago from '../MercadoPago';
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from '../../redux/actions/actions/users';

const CartPage = () => {
  const { user } = useAuth0();

  const shoppingCart = useSelector((state) => state.shoppingCart)
  const userProfile = useSelector((state) => state.userProfile)

  const dispatch = useDispatch()

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      let localCart = JSON.parse(window.localStorage.getItem('shoppingCart'))
      localCart && dispatch(setLocalStorageCart(localCart))
    }
  }, [])

  useEffect(() => {
    if (user && !userProfile.id) dispatch(createUser(user))
  }, [user, dispatch])

  function checkUser() {
    if (!user) return alert("log in")
    if (!userProfile.is_active) return alert("Complete register")
    MercadoPago(shoppingCart)
  }


  return (
    <div className='w-75 mx-auto  mt-5 mb-5 pb-2  mb-5'>
      <section className="pt-4 mb-5">
        <div className="card container p-4 bg-light">
          <div className="row w-100">
            <div className="col-lg-12 col-md-12 col-12">
              <h2 className=" mb-2 text-center text-primary">Shopping Cart</h2>
              <p className="mb-5 text-center">
                <i className="text-info font-weight-bold">{shoppingCart?.length}</i> items in your cart</p>
              <table id="shoppingCart" className="table table-condensed table-responsive">
                <thead>
                  <tr>
                    <th style={{ width: "60%" }}>Product</th>
                    <th style={{ width: "12%" }}>Price</th>
                    <th style={{ width: "10%" }}>Quantity</th>
                    <th style={{ width: "16%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    shoppingCart?.map((e, index) => (
                      <ShoppingCard service={e} index={index} />
                    ))
                  }
                </tbody>
              </table>
              <div className="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>${shoppingCart.reduce((acumulador, e) => acumulador + (e.price * e.quantity), 0)}</h1>
              </div>
            </div>
          </div>
          <div className="row mt-4 d-flex align-items-center">
            <div className="col-sm-6 order-md-2 text-right">
              <button className='btn btn-primary' disabled={!shoppingCart.length} onClick={checkUser}>Pagar con Mercado Pago</button>
            </div>
            <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
              <a href="catalog.html">
                <i className="fas fa-arrow-left mr-2"></i> Continue Shopping</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartPage