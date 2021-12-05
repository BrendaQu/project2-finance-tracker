//Brenda
import React from "react";

const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 min-height">
                    <div className="wrapper default-form">
                        <h2>Login</h2>
                        <form>
                            <div className="form-group row">
                                <input type="text" className="form-control" name="Email" placeholder="email"/>
                            </div>
                            <div className="form-group row">
                                <input type="password" className="form-control" name="Password" placeholder="password"/>
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