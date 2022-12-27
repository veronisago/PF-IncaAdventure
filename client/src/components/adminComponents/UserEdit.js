import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers, userUpdated } from '../../redux/actions/actions/users';

export default function UserEdit({ handleClose, data }) {

    const dispatch = useDispatch()

    const [edit, setEdit] = useState({
        last_name: data.last_name,
        first_name: data.first_name,
        username: data.username,
        email: data.email,
        birth_date: data.birth_date,
        is_active: data.is_active,
    })

    const handleChange = (e) => {
        const property = e.target.name
        const value = e.target.value

        setEdit({
            ...edit,
            [property]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userUpdated({...edit, id: data.id}))
        alert('user successfully updated!')
        dispatch(getUsers());
        handleClose()
    }


    return (
        <div>
            <div className="mx-auto rounded mt-5 mb-5">
                <div className='px-5 mx-auto'>
                    <h4 className='mt-3 mb-3'>User edition</h4>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div class="col-lg-6">
                                <label className="labels">Last name</label>
                                <input type="text" name='last_name' value={edit.last_name}
                                    required onChange={handleChange} className="form-control" />
                            </div>

                            <div class="col-lg-6">
                                <label class="labels">First name</label>
                                <input type="text" name='first_name' value={edit.first_name}
                                    required onChange={handleChange} min={0} max={200} className="form-control" />
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-12'>
                                <label className='labels'>Username</label>
                                <input name='username' value={edit.username}
                                    required onChange={handleChange} class="form-control" rows="3"></input>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-4'>
                                <label className='labels'>Email</label>
                                <input name='email' value={edit.email}
                                    required onChange={handleChange} class="form-control" rows="3"></input>
                            </div>
                            <div className='col-4'>
                                <label class="labels">Birth date</label>
                                <input name='birth_date' value={edit.birth_date}
                                    required onChange={handleChange} class="form-control" rows="3"></input>
                            </div>
                            <div className='col-4'>
                                <label class="labels">Active</label>
                                <select name='is_active' value={edit.is_active} onChange={handleChange} class="form-select" aria-label="Default select example">
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn border mt-3 btn-primary" type="submit">Done</button>
                    </form>
                </div>
            </div>
        </div>
    )
}