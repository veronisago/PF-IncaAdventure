import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByName, getProductsByOrder } from "../../redux/actions/actions/products"
import Paginate from "../nav/Paginate.js";

const ShopPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch]);

	const allProducts = useSelector(state => state.allProducts);
	const [currentPage, setCurrentPage] = useState(1); 
    const [productsPerPage, setProductsPerPage] = useState(8); 
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage 
    const currentProducts = allProducts?.slice(indexOfFirstProduct, indexOfLastProduct); 
    

    //paginado
    const paginate = (pagenumber) =>{
        setCurrentPage(pagenumber)
    }


	function handleOrderInput(e) {
		e.preventDefault();
		dispatch(getProductsByOrder(e.target.value));

	};

	function handleFilterInput(e) {
		e.preventDefault();
		dispatch(getProductsByName(e.target.value));
	}

	return (
		<div class="container-fluid bg-light px-0 mt-5">
			<div class="container bg-white py-4 pl-7 pt-5">
				<div className="container-fluid px-sm-3 pt-2 px-4">
					<div className="row">

						{/* <div class="filter">
							<button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
						</div>

						<div id="mobile-filter">
							<div>
								<h6 class="p-1 border-bottom"><b>Supplies </b></h6>
								<ul>
									<li><a href="#">Mountain</a></li>
									<li><a href="#">Rafting</a></li>
									<li><a href="#">Trekking</a></li>
									<li><a href="#">Exploring</a></li>
									<li><a href="#">Fishing</a></li>
								</ul>
							</div>
							<div>
								<h6 class="p-1 border-bottom">Filter By</h6>
								<ul class="list-group">
									<li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
										<span class="fa fa-circle pr-1" id="men"></span>Men
									</a></li>
									<li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
										<span class="fa fa-circle pr-1" id="women"></span>Women
									</a></li>
									<li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
										<span class="fa fa-circle pr-1" id="children"></span>Children
									</a></li>
								</ul>
							</div>
							<div>
								<h6>Cost</h6>
								<form class="ml-md-2">
									<div class="form-inline border rounded p-sm-2 my-2">
										<input type="radio" name="type" id="higher" />
										<label for="higher" class="pl-1 pt-sm-0 pt-1">Higher</label>
									</div>
									<div class="form-inline border rounded p-sm-2 my-2">
										<input type="radio" name="type" id="lower" />
										<label for="lower" class="pl-1 pt-sm-0 pt-1">Lower</label>
									</div>
									<div class="form-inline border rounded p-md-2 p-sm-1">
										<input type="radio" name="type" id="sales" />
										<label for="sales" class="pl-1 pt-sm-0 pt-1">Sales</label>
									</div>
								</form>
							</div>
						</div> */}

						<div id="sidebar" className="col-lg-2 col-12 d-flex flex-column border max-height-sidebar py-2 text-center rounded mb-4">
							<h2 className="text-center mb-4 text-info fw-bold">SHOP</h2>
							<div className="row">

								<div className="col-lg-12 col-sm-6 col-12">
									<h6 class="p-1 border-bottom fw-bold">Supplies</h6>
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
										<h6 class="p-1 border-bottom fw-bold">Filter By</h6>

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

						{/* card section */}

						<div id="products" className="col-lg-10 px-lg-3 px-0">
							<div class="row">
								{
									currentProducts.map(p => {
										return (
											<div class="col-lg-3 col-sm-6 col-12 mb-3 ">
												<div class="card cardShop">
													<img class="card-img-top cardShop-img-top mb-2" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap" />
													<div class="card-body cardShop-body">
														<p class="card-text no-interaction capitalize fw-bold">{p.name}</p>
														<p className="no-interaction">${p.price}</p>
														<span class="fa fa-circle" id="red"></span>
														<span class="fa fa-circle" id="teal"></span>
														<span class="fa fa-circle" id="blue"></span>
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
			</div>
			<div className=" container bg-white border-top pt-3">
			<Paginate 
         elementPerPage={productsPerPage}
         allElements={allProducts.length}
         paginate= {paginate}
        />  
			</div>
			<footer class="container-fluid bg-dark text-center py-2">
    <span class="text-muted">Copyrigth 2022-2023 IncaAdventure SA - pending pattent &#174;</span>
</footer>
		</div>
	);
};

export default ShopPage;
