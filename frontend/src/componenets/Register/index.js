//Brenda
import React, { useState } from "react";
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        country: 'United States',
        type: "regular"
    })

    function onSubmitHandler(e) {
        
        axios.post('http://localhost:9007/pendingUsers', user)
            .then(response => {
                window.location.pathname = ('/register')
                setUser(response.data)
                console.log(response.data)
            },
                error => {
                    console.log(error)
                })
            .catch(error => console.error(error))

    }

    function onChangeHandler(event) {
        //console.log(event.target.name)
        setUser({ ...user, [event.target.name]: event.target.value });
    }


    const countries = ['United States', 'Canada', 'Australia', 'United Kingdom', 'Japan', 'France', 'Mexico'];
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper default-form">
                        <h2>Register</h2>
                        <form method='post' onSubmit={onSubmitHandler}>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">First Name</label>
                                <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Last Name</label>
                                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Email</label>
                                <input type="text" className="form-control" name="email" value={user.email} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Password</label>
                                <input type="password" className="form-control" name="password" value={user.password} onChange={onChangeHandler} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Phone</label>
                                <input type="text" className="form-control" name="phone" value={user.phone} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="">Gender</label>
                                <div className="form-check col-12">
                                    <input className="form-check-input" type="radio" id="male" name="gender" value="Male" onChange={onChangeHandler}/>
                                    <label className="form-check-label" for="male">Male </label>
                                </div>
                                <div className="form-check col-12">
                                    <input className="form-check-input" type="radio" id="female" name="gender" value="Female" onChange={onChangeHandler}/>
                                    <label className="form-check-label" for="female">Female </label>
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="">Country</label>
                                <select className="form-control" name="country" onChange={onChangeHandler}>
                                    {
                                        countries.map(country => <option value={country}>{country}</option>)
                                    }
                                </select>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-success col-12">Register</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default Register;