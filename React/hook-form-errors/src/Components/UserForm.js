import React, { useState } from 'react';


const UserForm = (props) => {
    const [userfirstname, setUserFirstName] = useState("");
    const [userFirstError, setUserFirstError] = useState("");
    const handleUserFrist = (e) => {
        setUserFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setUserFirstError("First Name is required!");
        } else if (e.target.value.length < 2) {
            setUserFirstError("First Name must be 2 characters or longer!");
        } else {
            setUserFirstError("")
        }
    }

    const [userlastname, setUserLastName] = useState("");
    const [userLastError, setUserLastError] = useState("");
    const handleUserLast = (e) => {
        setUserLastName(e.target.value);
        if (e.target.value.length < 1) {
            setUserLastError("Last Name is required!");
        } else if (e.target.value.length < 2) {
            setUserLastError("Last Name must be 2 characters or longer!");
        } else {
            setUserLastError("")
        }
    }

    const [email, setEmail] = useState("");
    const [userEmailError, setUserEmailError] = useState("");
    const handleUserEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setUserEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setUserEmailError("Email must be 5 characters or longer!");
        } else {
            setUserEmailError("")
        }
    }
    const [password, setPassword] = useState("");
    const [userPasswordError, setPasswordError] = useState("");
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("")
        }
    }

    const [confirmpassword, setConfirmPassword] = useState("");
    const [userCPasswordError, setCPasswordError] = useState("");
    const handleUserCPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setCPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setCPasswordError("Password must be at least 8 characters");
        } else {
            setCPasswordError("")
        }
        if (e.target.value !== password) {
            setCPasswordError("Passwords must match")
        }
    }

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
                        <input className="col-6 form-control" type="text" onChange={handleUserFrist} />
                    </p>
                    {
                        userFirstError ?
                            <p style={{ color: 'red' }}>{userFirstError}</p> :
                            ''
                    }
                    <p className="row bg-gray p-2 pr-4">
                        <span className="col-6">Last Name:</span>
                        <input className="col-6 form-control" type="text" onChange={handleUserLast} />
                    </p>
                    {
                        userLastError ?
                            <p style={{ color: 'red' }}>{userLastError}</p> :
                            ''
                    }
                    <p className="row bg-gray p-2 pr-4">
                        <span className="col-6">Email: </span>
                        <input className="col-6 form-control" type="email" onChange={handleUserEmail} />
                    </p>
                    {
                        userEmailError ?
                            <p style={{ color: 'red' }}>{userEmailError}</p> :
                            ''
                    }
                    <p className="row bg-gray p-2 pr-4">
                        <span className="col-6">Password: </span>
                        <input className="col-6 form-control" type="password" onChange={handleUserPassword} />
                    </p>
                    {
                        userPasswordError ?
                            <p style={{ color: 'red' }}>{userPasswordError}</p> :
                            ''
                    }
                    <p className="row bg-gray p-2 pr-4">
                        <span className="col-6">Confirm Password: </span>
                        <input className="col-6 form-control" type="password" onChange={handleUserCPassword} />
                    </p>
                    {
                        userCPasswordError ?
                            <p style={{ color: 'red' }}>{userCPasswordError}</p> :
                            ''
                    }
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