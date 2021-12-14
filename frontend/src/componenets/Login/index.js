//Brenda
import axios from "axios";
import React, { useEffect, useState } from "react";


const Login = () => {

    const [user, setUser] = useState({
        data: {
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            gender: '',
            country: '',
            type: ''
        }
    })

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState({
        emailError: '',
        passwordError: ''
    })

    function validate() {
        let flag = true
        let emailError = ''
        let passwordError = ''
        if (!login.email) {
            emailError = 'Email is required'
            flag = false;
        } else {
            emailError = ''
        }

        if (!login.password) {
            passwordError = 'Password is required'
            flag = false;
        } else {
            passwordError = ''
        }
        setErrorMessage({emailError, passwordError})
        return flag
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (validate()) {
            for (let i = 0; i < user.length; i++) {
                if (login.email === user["" + i].email && login.password === user["" + i].password) {
                    sessionStorage.setItem("userId", user["" + i].userId)
                    sessionStorage.setItem("name", user["" + i].firstName)
                    sessionStorage.setItem("type", user["" + i].type)
                    if (user["" + i].type === "employee") {
                        window.location.pathname = ("/EmpMenu")
                    } else {
                        window.location.pathname = ("/usermenu")
                    }
                    return
                }
            }
            setErrorMessage({passwordError:'Username or password is incorrect'})
        }
        
    }

    function onChangeHandler(event) {
        setLogin({ ...login, [event.target.name]: event.target.value });
    }

    useEffect(() => {
        axios
            .get("http://localhost:9007/users")
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => console.error(error));
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 min-height">
                    <div className="wrapper default-form">
                        <h2>Login</h2>
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group row">
                                <input type="text" className="form-control" name="email" placeholder="email" onChange={onChangeHandler} />
                            </div>
                            <small className="text-danger">{errorMessage.emailError}</small>
                            <div className="form-group row">
                                <input type="password" className="form-control" name="password" placeholder="password" onChange={onChangeHandler} />
                            </div>
                            <small className="text-danger">{errorMessage.passwordError}</small>
                            <button type="submit" className="btn btn-success col-12">Login</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default Login;
