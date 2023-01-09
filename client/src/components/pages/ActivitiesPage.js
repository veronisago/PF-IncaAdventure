import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions/actions/activities.js";
import { Paginate } from '../nav/Paginate.js'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from "../../redux/actions/actions/stores.js";
import { Link } from "react-router-dom";


const initialState = {
  name: '',
  order: '',
  orderBy: '',
  min: null,
  max: null,
  type: '',
  page: 1,
}

function ActivitiesPage() {
  const allActivities = useSelector(state => state.allActivities);
  const [filter, setFilter] = useState(initialState)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities(filter));
  }, [filter, dispatch]);


  function handleChange(e) {
    console.log(e)
    console.log(e.target.value)

    if (e.target.value == "A-Z") {
      setFilter({ ...filter, order: "ASC", orderBy: "name" })

    } else if (e.target.value == "Z-A") {
      setFilter({ ...filter, order: "DESC", orderBy: "name" })

    } else if (e.target.value == 'higher_price') {
      setFilter({ ...filter, order: "DESC", orderBy: "price" })

    } else if (e.target.value == 'lower_price') {
      setFilter({ ...filter, order: "ASC", orderBy: "price" })

    } else {
      console.log('entro')
      setFilter({ ...filter, [e.target.name]: e.target.value })
    }
  };

  function handleCart(e) {
    dispatch(addToCart({ ...e, category: 'activity', quantity: 1 }))
  }


  return (
    <div class="container-fluid bg-light px-0 mx-0">
      <div class="container bg-white py-4 pl-7">
        <div class="row text-center">
          <h2 class="h1">
            In search of adventures? FIND IT <span class="text-success">WITH US</span>
          </h2>
        </div>
        <div className="row mt-lg-5 mt-4 justify-content-lg-start justify-content-center px-3">
          <div id="sidebar" className="col-lg-2 col-12 d-flex flex-column border py-2 text-center rounded mb-4">
            <h2 className="text-center mb-4 text-info fw-bold">Order by</h2>
            <div className="row">

              <div className="col-lg-12 col-sm-6 col-12">
                <h6 class="p-1 border-bottom fw-bold">Type</h6>
                <ul>
                  <li><button name='type' value='mountain' onClick={handleChange} className='btn-transparent'>Mountain</button></li>
                  <li><button name='type' value='rafting' onClick={handleChange} className='btn-transparent'>Rafting</button></li>
                  <li><button name='type' value='trekking' onClick={handleChange} className='btn-transparent'>Trekking</button></li>
                  <li><button name='type' value='exploring' onClick={handleChange} className='btn-transparent'>Exploring</button></li>
                </ul>
              </div>

              <div className="col-lg-12 col-sm-6 col-12">
                <div>
                  <h6 class="p-1 border-bottom fw-bold">Filter by name</h6>

                  <div>
                    <input className='form-control' type="text" placeholder="Search by word..." name="name" onChange={handleChange} ></input>
                  </div>

                  <ul class="list-group">
                    {/* <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
									<span class="fa fa-circle pr-1" id="men"></span>Word
							</a></li> */}
                  </ul>
                </div>

                <div>
                  {/* <h6 className="border-bottom">Cost</h6> */}
                  <form class="ml-md-2 ">
                    <div class="form-inline border rounded p-sm-2 my-2">
                      <input type="radio" name="type" value="A-Z" id="higher" onChange={handleChange} />
                      <label for="higher" class="pl-1 pt-sm-0 pt-1">&nbsp;A-Z</label>
                    </div>
                    <div class="form-inline border rounded p-sm-2 my-2">
                      <input type="radio" name="type" value="Z-A" id="lower" onChange={handleChange} />
                      <label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Z-A</label>
                    </div>
                    <div class="form-inline border rounded p-sm-2 my-2">
                      <input type="radio" name="type" value="higher_price" id="lower" onChange={handleChange} />
                      <label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Higher price</label>
                    </div>
                    <div class="form-inline border rounded p-sm-2 my-2">
                      <input type="radio" name="type" value="lower_price" id="lower" onChange={handleChange} />
                      <label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Lower price</label>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-10 px-lg-3 px-0">
            <div class="row text-center">
              {
                allActivities?.rows?.map(a => {
                  return (
                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div className="card min-height-activity-card">
                        <Link to={`/detail/activity/${a.id}`}>
                          <img
                            src="https://wallpaperaccess.com/full/1099438.jpg"
                            class="card-img-top"
                            alt="..."
                          />
                        </Link>
                        <div class="card-body overflow-auto">
                          <h5 class="card-title">{a.name}</h5>
                          <span >
                            ${a.price}
                          </span>
                          <button className="btn btn-primary" onClick={() => handleCart(a)}><AddShoppingCartIcon /></button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className=" container bg-white border-top pt-3">
        <Paginate />
      </div>
      <footer class="container-fluid bg-dark text-center py-2">
        <span class="text-muted">Copyrigth 2022-2023 IncaAdventure SA - pending pattent &#174;</span>
      </footer>
    </div>

  );
}

export default ActivitiesPage;
