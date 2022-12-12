import React from "react";
import { useSelector } from "react-redux";


function ProductsReport() {

  const allProducts = useSelector(state => state.allProducts);

  return (
    <div>
      {
        allProducts?.map(p => {
          return (
            <div>

              <div>
                <h5>{p.name}</h5>
              </div>

              <div>
                <h5>{p.price}</h5>
              </div>

              <div>
                <h5>{p.stock}</h5>
              </div>

            </div>
          )
        })
      }
    </div>
  );
};

export default ProductsReport;