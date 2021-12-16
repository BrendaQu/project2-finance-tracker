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

    const [errorMessage, setErrorMessage] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
        phoneError: '',
        genderError: ''
    })

    function validate() {
        let flag = true
        let firstNameError= ''
        let lastNameError= ''
        let emailError= ''
        let passwordError= ''
        let phoneError= ''
        let genderError= ''

        if (user.firstName.length <= 0) {
            
            firstNameError= 'A first name is required'
            flag = false;
        } else {
            firstNameError= ''
        }

        if (user.lastName.length <= 0) {
            lastNameError= 'A last name is required'
            flag = false;
        } else {
            lastNameError= ''
        }

        if (user.email.length <= 0) {
            emailError= 'Email is required'
            flag = false;
        } else {
            emailError= ''
        }

        if (user.password.length <= 0) {
            passwordError= 'Password is required'
            flag = false;
        } else {
            passwordError= ''
        }

        if (user.phone.length <= 0) {
            phoneError= 'Phone is required'
            flag = false;
        } else {
            phoneError= ''
        }

        if (user.gender.length <= 0) {
            genderError= 'Gender is required'
            flag = false;
        } else {
            genderError= ''
        }
        setErrorMessage({firstNameError, lastNameError, emailError, passwordError, phoneError, genderError})
        return flag
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        if (validate()) {
            axios.post('http://localhost:9007/pendingUsers', user)
                .then(response => {
                    setUser(response.data)
                    console.log(response.data)
                },
                    error => {
                        console.log(error)
                    })
                .catch(error => console.error(error))
                window.location.pathname = ("/")
        } else {
            console.log('error')
        }


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
                                <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={onChangeHandler} />
                            </div>
                            <small className="text-danger">{errorMessage.firstNameError}</small>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Last Name</label>
                                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={onChangeHandler} />
                            </div>
                            <small className="text-danger">{errorMessage.lastNameError}</small>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Email</label>
                                <input type="text" className="form-control" name="email" value={user.email} onChange={onChangeHandler} />
                            </div>
                            <small className="text-danger">{errorMessage.emailError}</small>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Password</label>
                                <input type="password" className="form-control" name="password" value={user.password} onChange={onChangeHandler} />
                            </div>
                            <small className="text-danger">{errorMessage.passwordError}</small>
                            <div className="form-group row">
                                <label className="col-sm-4" htmlFor="">Phone</label>
                                <input type="text" className="form-control" name="phone" value={user.phone} onChange={onChangeHandler} />
                            </div>
                            <small className="text-danger">{errorMessage.phoneError}</small>
                            <div className="form-group row">
                                <label htmlFor="">Gender</label>
                                <div className="form-check col-12">
                                    <input className="form-check-input" type="radio" id="male" name="gender" value="Male" onChange={onChangeHandler} />
                                    <label className="form-check-label" for="male">Male </label>
                                </div>
                                <div className="form-check col-12">
                                    <input className="form-check-input" type="radio" id="female" name="gender" value="Female" onChange={onChangeHandler} />
                                    <label className="form-check-label" for="female">Female </label>
                                </div>
                            </div>
                            <small className="text-danger">{errorMessage.genderError}</small>
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