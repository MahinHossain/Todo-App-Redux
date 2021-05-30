import React, { useState } from "react";
import ShowInfo from "./ShowInfo";

const Hello = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        designation: "",
        list: [],
    });

    const dataReceive = (value, iname) => {
        let stateData = { ...state };
        //eta ki
        stateData[iname] = value;
        console.log(stateData)


        setState(stateData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let listClone = { ...state };
        let obj = {
            name: state.name,
            email: state.email,
            designation: state.designation,
        };


        //listclone to ekta object . r list.push(obj) eta to array ..to object.array dia ki bujlm
        listClone.list.push(obj);
        console.log(listClone.list.push(obj))

        setState(listClone);
        // e.target.reset()
    };

    const handleDelete = (index) => {
        const cloneSt = { ...state };
        cloneSt.list.splice(index, 1);
        setState(cloneSt);
    };
    const handleEdit = (index) => {

        const cloneSt = { ...state };
        cloneSt[index].name.value = state.name;
        dataReceive();


    };




    return (
        <div className="">
            <div className="col-md-4 offset-md-4">
                <form className="" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={(e) => dataReceive(e.target.value, "name")}
                            name="name"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Email </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email Address"
                            name="email"
                            onChange={(e) => dataReceive(e.target.value, "email")}
                        />
                    </div>
                    <div className="form-group">
                        <label for="designation">Designation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="designation"
                            name="designation"
                            placeholder="Designation"
                            onChange={(e) => dataReceive(e.target.value, "designation")}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>

            <div>
                {state.list.map((data, index) => (
                    <ShowInfo
                        id={index}
                        data={data}
                        handleEdit={() => handleEdit(index)}
                        handleDelete={() => handleDelete(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hello;
