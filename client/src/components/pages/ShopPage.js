import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/actions/products"
import { Paginate } from "../nav/Paginate";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from "../../redux/actions/actions/stores.js";
import { Link } from "react-router-dom";

const initialState = {
	name: '',
	order: '',
	orderBy: '',
	min: null,
	max: null,
	page: 1,
}

const ShopPage = () => {
	const allProducts = useSelector(state => state.allProducts);
	const [filter, setFilter] = useState(initialState)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(filter));
	}, [filter, dispatch]);


	function handleChange(e) {
		if (e.target.value == "A-Z") {
			setFilter({ ...filter, order: "ASC", orderBy: "name" })
		} else if (e.target.value == "Z-A") {
			setFilter({ ...filter, order: "DESC", orderBy: "name" })
		} else {
			setFilter({ ...filter, [e.target.name]: e.target.value })
		}
	};

	function handleCart(e) {
		dispatch(addToCart({ ...e, category: 'product', quantity: 1 }))
	}

	return (
		<div class="container-fluid bg-light px-0 mt-5">
			<div class="container bg-white py-4 pl-7 pt-5">
				<div className="container-fluid px-sm-3 pt-2 px-4">
					<div className="row">
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
										</form>
									</div>
								</div>

							</div>
						</div>

						{/* card section */}

						<div id="products" className="col-lg-10 px-lg-3 px-0">
							<div class="row">
								{
									allProducts?.rows?.map(p => {
										return (
											<div class="col-lg-3 col-sm-6 col-12 mb-3 ">
												<div class="card cardShop">
													<Link to={`/detail/product/${p.id}`}>
														<img class="card-img-top cardShop-img-top mb-2" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap" />
													</Link>
													<div class="card-body cardShop-body">
														<p class="card-text no-interaction capitalize fw-bold">{p.name}</p>
														<p className="no-interaction">${p.price}</p>
														<button className="btn btn-primary" onClick={() => handleCart(p)}><AddShoppingCartIcon /></button>
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
				<Paginate />
			</div>
			<footer class="container-fluid bg-dark text-center py-2">
				<span class="text-muted">Copyrigth 2022-2023 IncaAdventure SA - pending pattent &#174;</span>
			</footer>
		</div>
	);
};

export default ShopPage;
