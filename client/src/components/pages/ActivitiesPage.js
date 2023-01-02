
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from "react";
import { getActivities, getActivitiesByName, getActivitiesByOrder } from "../../redux/actions/actions/activities.js";
import Paginate from "../nav/Paginate.js";


function ActivitiesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const allActivities = useSelector((state) => state.allActivities);
  // console.log(allActivities);
  const [currentPage, setCurrentPage] = useState(1); 
    const [activitiesPerPage, setActivitiesPerPage] = useState(9); 
    const indexOfLastActivity = currentPage * activitiesPerPage
    const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage 
    const currentActivities = allActivities?.slice(indexOfFirstActivity, indexOfLastActivity); 
    

    //paginado
    const paginate = (pagenumber) =>{
        setCurrentPage(pagenumber)
    }

  function handleOrderInput(e) {
    dispatch(getActivitiesByOrder(e.target.value));
  };

  function handleFilterInput(e) {
    dispatch(getActivitiesByName(e.target.value));
  }

  
    ;  


  return (
    <div class="container-fluid bg-light px-0 mx-0">
      <div class="container bg-white py-4 pl-7">
        <div class="row text-center">
          <h2 class="h1">
            In search of adventures? FIND IT <span class="text-success">WHIT US</span>
          </h2>
        </div>
        <div className="row mt-lg-5 mt-4 justify-content-lg-start justify-content-center px-3">
          <div id="sidebar" className="col-lg-2 col-12 d-flex flex-column border max-height-sidebar py-2 text-center rounded mb-4">
            <h2 className="text-center mb-4 text-info fw-bold">Order by</h2>
            <div className="row">

              <div className="col-lg-12 col-sm-6 col-12">
                <h6 class="p-1 border-bottom fw-bold">Type</h6>
                <ul>
                  <li><a href="#">Mountain</a></li>
                  <li><a href="#">Rafting</a></li>
                  <li><a href="#">Trekking</a></li>
                  <li><a href="#">Exploring</a></li>
                  <li><a href="#">Fishing</a></li>
                </ul>
              </div>

              <div className="col-lg-12 col-sm-6 col-12">
                <div>
                  <h6 class="p-1 border-bottom fw-bold">Filter by name</h6>

                  <div>
                    <input className='form-control' type="text" placeholerder="Search by word..." name="filter-by-name" onChange={handleFilterInput} ></input>
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
                      <input type="radio" name="type" value="A-Z" id="higher" onChange={handleOrderInput} />
                      <label for="higher" class="pl-1 pt-sm-0 pt-1">&nbsp;A-Z</label>
                    </div>
                    <div class="form-inline border rounded p-sm-2 my-2">
                      <input type="radio" name="type" value="Z-A" id="lower" onChange={handleOrderInput} />
                      <label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Z-A</label>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-10 px-lg-3 px-0">
            <div class="row text-center">
              {
                currentActivities?.map(a => {
                  return (
                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div className="card min-height-activity-card">
                        <img
                          src="https://wallpaperaccess.com/full/1099438.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body overflow-auto">
                          <h5 class="card-title">{a.name}</h5>
                          <span >
                            {a.description}
                          </span>
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
        <Paginate 
         elementPerPage={activitiesPerPage}
         allElements={allActivities.length}
         paginate= {paginate}
        />  
      </div>
      <footer class="container-fluid bg-dark text-center py-2">
    <span class="text-muted">Copyrigth 2022-2023 IncaAdventure SA - pending pattent &#174;</span>
</footer>
    </div>
    
  );
}

export default ActivitiesPage;
