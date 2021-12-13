//Brenda
import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, {useState} from "react";
import { useSelector } from 'react-redux';

const UserExpenseForm = () => {
    const [expense, setExpense] = useState({
        date: '',
        amount: '',
        category: '',
        memo: ''
    })

    const categories = ['','Rent', 'Utilities', 'Groceries', 'Subscription', 'Entertainment', 'Dining Out', 'Shopping', 'Misc.'];

    function onChangeHandler(event) {
        setExpense({...expense,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = () =>{
        axios.post("http://localhost:9007/expenses/" + sessionStorage.getItem("userId"), expense)
        .then((response) => {
            window.location.pathname = ('/userexpense')
            setExpense(response.data)
            console.log(response.data)
        })
        .catch((error) => console.error(error))
    }
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper default-form">
                        <h2> Expense Form </h2>
                        <p>Enter your expense information below.</p>
                        <form method="post" onSubmit={onSubmitHandler}>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Date</label>
                                <input type="date" className="form-control col-sm-8" name="date" onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Amount</label>
                                <input type="text" className="form-control col-sm-8" name="amount" onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Category</label>
                                <select className="form-control col-sm-8 selectpicker" name="category" onChange={onChangeHandler}>
                                    {
                                        categories.map(category => <option>{category}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Memo</label>
                                <input type="text" className="form-control col-sm-8" name="memo" onChange={onChangeHandler}/>
                            </div>
                            <br />
                            <button type="submit" className="btn col-12 btn-success">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default UserExpenseForm;