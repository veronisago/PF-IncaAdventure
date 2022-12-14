import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProduct } from '../../redux/actions/actions/products';

export default function CreateProduct() {

    const dispatch = useDispatch()

    const [create, setCreate] = useState({
        name: "",
        price: 0,
        stock: 0,
    })

    const handleChange = (e) => {
        const property = e.target.name
        const value = e.target.value

        setCreate({
            ...create,
            [property]: value
        })
    }

    const handleSubmit = (e) => {
        dispatch(postProduct(create))
        alert('New product created!')
        setCreate({
            name: "",
            price: 0,
            stock: 0,
        })
    }


    return (
        <div>
            <div className="w-75 mx-auto rounded bg-light mt-5">
                <div className='col-8 mx-auto pt-5 pb-5'>
                    <h4 className='mt-3 mb-3'>Create new product</h4>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div class="col-lg-6">
                                <label className="labels">Name</label>
                                <input type="text" name='name' value={create.name} 
                                required onChange={handleChange} className="form-control" />
                            </div>

                            <div class="col-lg-6">
                                <label class="labels">Price</label>
                                <input type="number" name='price' value={create.price} 
                                required onChange={handleChange} min={0} max={200} className="form-control" />
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-12'>
                                <label className='labels'>Stock</label>
                                <input type="number" name='stock' value={create.stock} 
                                required onChange={handleChange} className="form-control" rows="3"/>
                            </div>
                        </div>
                        <button className="btn border mt-3" type="submit">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}