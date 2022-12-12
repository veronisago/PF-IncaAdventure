import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { createActivity } from "../../redux/actions/actions/activities";
import { createProduct } from "../../redux/actions/actions/products";
import TemplateActivity from "../nav/templates/TemplateActivity";
import TemplateProduct from "../nav/templates/TemplateProduct";

function DashboardCreate() {

  const dispatch = useDispatch();


  // LocalStorage


  return (
    <div>
      <div>
        <h4 class="text-right">Create a new:</h4>
      </div>



      <div>
        <form class="ml-md-2 ">
          <div class="form-inline border rounded p-sm-2 my-2">

            <label for="higher" class="pl-1 pt-sm-0 pt-1">&nbsp;Activity</label>
          </div>
          <div class="form-inline border rounded p-sm-2 my-2">

            <label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Product</label>
          </div>
        </form>
      </div>

      <div>
        <TemplateActivity />
        <TemplateProduct />
      </div>


    </div >
  );
};

export default DashboardCreate;