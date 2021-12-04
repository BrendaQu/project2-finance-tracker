//Brenda
import React, { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        country: ''
    })

    const countries = ['United States', 'Canada', 'Australia', 'United Kingdom', 'Japan', 'France', 'Mexico'];
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper default-form">
                        <h2>Register</h2>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">First Name</label>
                                <input type="text" className="form-control" name="FirstName" />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Last Name</label>
                                <input type="text" className="form-control" name="LastName" />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Email</label>
                                <input type="text" className="form-control" name="Email" />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Password</label>
                                <input type="password" className="form-control" name="LastName" />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Phone</label>
                                <input type="text" className="form-control" name="LastName" />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="">Gender</label>
                                <div className="form-check col-12">
                                    <input className="form-check-input" type="radio" id="male" name="gender" value="Male" />
                                    <label className="form-check-label" for="male">Male </label>
                                </div>
                                <div className="form-check col-12">
                                    <input className="form-check-input" type="radio" id="female" name="gender" value="Female" />
                                    <label className="form-check-label" for="female">Female </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Country</label>
                                <select className="form-control" name="country">
                                    {
                                        countries.map(country => <option value={country}>{country}</option>)
                                    }
                                </select>
                            </div>

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