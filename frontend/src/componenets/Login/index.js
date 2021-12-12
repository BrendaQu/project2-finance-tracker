//Brenda
import axios from "axios";
import React, { useEffect, useState } from "react";


const Login = () => {

    const [user, setUser] = useState({
        data: {
            userId:'',
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

    const [login, setLogin]  = useState({
        email:'',
        password:''
    })

    const onSubmitHandler = (e) => {
        e.preventDefault()
        for (let i = 0; i < user.length; i++) {
            if(login.email === user[""+i].email && login.password === user[""+i].password) {
                sessionStorage.setItem("userId", user[""+i].userId)
                sessionStorage.setItem("name", user[""+i].firstName)
                if(user[""+i].type === "employee") {
                    window.location.pathname = ('/EmpMenu')
                } else {
                    window.location.pathname = ('/usermenu')
                }
                return
            }
        }
        alert("Incorrect Username or Password")
    }

    function onChangeHandler(event) {
        setLogin({ ...login, [event.target.name]: event.target.value });
    }

    useEffect(() => {
        axios
            .get("http://localhost:9007/users")
            .then((response) => {
                setUser(response.data)
                console.log(user.length)
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
                            <div className="form-group row">
                                <input type="password" className="form-control" name="password" placeholder="password" onChange={onChangeHandler} />
                            </div>
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