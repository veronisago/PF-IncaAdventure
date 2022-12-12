import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/actions/actions/products";

function TemplateProduct() {
  const dispatch = useDispatch();

  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    stock: ""
  });

  function handleProductChange(e) {
    setProductForm({
      ...productForm,
      [e.target.placeholder]: e.target.value
    });
    console.log(productForm);
  };

  function handleCreateButton() {
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createProduct(productForm));


  };

  return (
    <div>

      <div class="row text-center pt-5 mt-5">
        <main class="form-signin w-100 m-auto">
          <form
            action="http://localhost:3000/profile"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div class="col-md-12"><label class="labels">name</label><input type="text" class="form-control" placeholder="name" onChange={() => handleProductChange()} /></div>

            <div class="col-md-12"><label class="labels">price</label><input type="text" class="form-control" placeholder="price" onChange={() => handleProductChange()} /></div>

            <div class="col-md-12"><label class="labels">stock</label><input type="text" class="form-control" placeholder="stock" onChange={() => handleProductChange()} /></div>


            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" >Create</button></div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default TemplateProduct;