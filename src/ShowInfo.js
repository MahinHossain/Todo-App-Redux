import React, { useState } from 'react';

const ShowInfo = (props) => {

    const { name, email, designation } = props.data





    return (
        <div className="mt-5">
            <div className="col-md-4 offset-md-4">


                <div className="bg-secondary text-light w-75 py-5 px-3 rounded">
                    <h5>Your Name is :  {name} </h5>
                    <p>Your Email Address:  {email} </p>
                    <p>Your Designation: {designation} </p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={() => props.handleEdit(props.id)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => props.handleDelete(props.id)}>Delete</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowInfo