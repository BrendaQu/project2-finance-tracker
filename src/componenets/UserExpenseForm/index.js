//Brenda
import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, {useState} from "react";
import { useSelector } from 'react-redux';

const UserExpenseForm = () => {
    const [expense, setExpense] = useState({
        Date: '',
        Amount: '',
        Category: '',
        Memo: '',
        userId: useSelector(state => state.regularId)
    })

    function onChangeHandler(event) {
        setExpense({...expense,
            [event.target.name]: event.target.value
        })
    }

    const onClickHandler = () =>{
        axios.post("http://localhost:9007/users", expense)
        .then((response) => {setExpense(response)})
        .catch((error) => console.error(error))
    }

    function test() {
        console.log(expense)
    }

    const categories = ['','Rent', 'Utilities', 'Groceries', 'Subscription', 'Entertainment', 'Dining Out', 'Shopping', 'Misc.'];
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper default-form">
                        <h2> Expense Form </h2>
                        <p>Enter your expense information below.</p>
                        <form method="post" onClick={onClickHandler}>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Date</label>
                                <input type="date" className="form-control col-sm-8" name="Date" value={expense.Date} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Amount</label>
                                <input type="text" className="form-control col-sm-8" name="Amount" value={expense.Amount} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Category</label>
                                <select className="form-control col-sm-8 selectpicker" name="Category" onChange={onChangeHandler}>
                                    {
                                        categories.map(category => <option value={category}>{category}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Memo</label>
                                <input type="text" className="form-control col-sm-8" name="Memo" value={expense.Memo} onChange={onChangeHandler}/>
                            </div>
                            <br />
                            <button type="submit" className="btn col-12 btn-success">Submit</button>
                        </form>
                        <button type="submit" className="btn col-12 btn-success" onClick={test}>Test</button>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default UserExpenseForm;