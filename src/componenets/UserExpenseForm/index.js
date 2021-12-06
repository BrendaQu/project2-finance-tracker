//Brenda
import userEvent from "@testing-library/user-event";
import React, {useState} from "react";

const UserExpenseForm = () => {
    const [expense, setExpense] = useState({
        Date: '',
        Amount: '',
        Category: '',
        Memo: ''
    })

    function onChangeHandler(event) {
        setExpense({...expense,
            [event.target.name]: event.target.value
        })
    }

    const categories = ['Rent', 'Utilities', 'Groceries', 'Subscription', 'Entertainment', 'Dining Out', 'Shopping', 'Misc.'];
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper default-form">
                        <h2> Expense Form </h2>
                        <p>Enter your expense information below.</p>
                        <form>
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
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default UserExpenseForm;