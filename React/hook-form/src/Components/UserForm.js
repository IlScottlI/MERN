import React, { useState } from 'react';


const UserForm = (props) => {
    const [userfirstname, setUserFirstName] = useState("");
    const [userlastname, setUserLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { userfirstname, userlastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    return (
        <>
            <div className=" row mt-5">
                <form onSubmit={createUser}>
                    <p className="row bg-gray p-2 pr-4">
                        <label className="col-6">First Name:</label>
                        <input className="col-6 form-control" type="text" onChange={(e) => setUserFirstName(e.target.value)} />
                    </p>
                    <p className="row bg-gray p-2 pr-4">
                        <span className="col-6">Last Name:</span>
                        <input className="col-6 form-control" type="text" onChange={(e) => setUserLastName(e.target.value)} />
                    </p>
                    <p className="row bg-gray p-2 pr-4">
                        <span className="col-6">Email: </span>
                        <input className="col-6 form-control" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </p>
                    <p className="row bg-gray p-2 pr-4">
                        <span className="col-6">Password: </span>
                        <input className="col-6 form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </p>
                    <p className="row bg-gray p-2 pr-4">
                        <span className="col-6">Confirm Password: </span>
                        <input className="col-6 form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </p>
                    <div>
                        <h5 className="text-center">Your Form Data</h5>
                    </div>
                    <div className="row">
                        <div className="col-6">First Name:</div>
                        <div className="col-6 text-left">{userfirstname}</div>
                    </div>
                    <div className="row">
                        <div className="col-6">Last Name:</div>
                        <div className="col-6 text-left">{userlastname}</div>
                    </div>
                    <div className="row">
                        <div className="col-6">Email:</div>
                        <div className="col-6 text-left">{email}</div>
                    </div>
                    <div className="row">
                        <div className="col-6">Password:</div>
                        <div className="col-6 text-left">{password}</div>
                    </div>
                    <div className="row">
                        <div className="col-6">Confirm Password:</div>
                        <div className="col-6 text-left">{confirmpassword}</div>
                    </div>

                </form>
            </div>
        </>
    );
};

export default UserForm;