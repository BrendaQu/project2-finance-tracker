//Brenda
import React, {useState, useEffect} from "react";
import './style.css';

const UserBudgetForm = () => {
    const [budget, setBudget] = useState({
        Rent: '1200',
        Utilities: '300',
        Groceries: '400',
        Subscription: '100',
        Entertainment: '200',
        DiningOut: '200',
        Shopping: '150',
        Misc: '100'
    })

    function onChangeHandler(event) {
        setBudget({...budget,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper budget-form">
                        <h2>Budget Form</h2>
                        <p>Below are you current budget for each category. Please enter any changes and click update.</p>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Rent</label>
                                <input type="text" className="form-control col-sm-8" name="Rent" value={budget.Rent} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Utilities</label>
                                <input type="text" className="form-control col-sm-8" name="Utilities" value={budget.Utilities} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Groceries</label>
                                <input type="text" className="form-control col-sm-8" name="Groceries" value={budget.Groceries} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Subscriptions</label>
                                <input type="text" className="form-control col-sm-8" name="Subscription" value={budget.Subscription} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Entertainment</label>
                                <input type="text" className="form-control col-sm-8" name="Entertainment" value={budget.Entertainment} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Dining Out</label>
                                <input type="text" className="form-control col-sm-8" name="DiningOut" value={budget.DiningOut} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Shopping</label>
                                <input type="text" className="form-control col-sm-8" name="Shopping" value={budget.Shopping} onChange={onChangeHandler}/>
                            </div> 
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Misc.</label>
                                <input type="text" className="form-control col-sm-8" name="Misc" value={budget.Misc} onChange={onChangeHandler}/>
                            </div>
                            <button type="submit" className="btn col-12 btn-success">Update</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default UserBudgetForm;