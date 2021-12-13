//Brenda
import React, {useState, useEffect} from "react";
import axios from 'axios';

const UserBudgetForm = () => {
    const [budget, setBudget] = useState({
        rent: '1200',
        utilities: '300',
        groceries: '400',
        subscriptions: '100',
        entertainment: '200',
        dining: '200',
        shopping: '150',
        misc: '100'
    })

    //Need to update user_id, right now it's hard coded
    function onSubmitHandler(e) {
        axios.get('http://localhost:9007/budgets/' + sessionStorage.getItem("userId"), budget)
        .then(response => {
            if(!response.data || response.data.length == 0){
                axios.post('http://localhost:9007/budgets/2', budget)
                .then(response => {
                    window.location.pathname = ('/userbudget')
                    setBudget(response.data)
                    console.log(response.data)
                },
                    error => {
                        console.log(error)
                    })
                    .catch(error => console.error(error))
            } else {
                axios.put('http://localhost:9007/budgets/' + sessionStorage.getItem("userId"), budget)
                .then(response => {
                    window.location.pathname = ('/userbudget')
                    setBudget(response.data)
                    console.log(response.data)
                },
                    error => {
                        console.log(error)
                    })
                    .catch(error => console.error(error))
            }
        })
        .catch(error => console.error(error))
    }

    function onChangeHandler(event) {
        setBudget({...budget,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper default-form">
                        <h2>Budget Form</h2>
                        <p>Below are you current budget for each category. Please enter any changes and click update.</p>
                        <form method='post' onSubmit={onSubmitHandler}>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Rent</label>
                                <input type="text" className="form-control col-sm-8" name="rent" placeholder={budget.rent} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Utilities</label>
                                <input type="text" className="form-control col-sm-8" name="utilities" placeholder={budget.utilities} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Groceries</label>
                                <input type="text" className="form-control col-sm-8" name="groceries" placeholder={budget.groceries} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Subscriptions</label>
                                <input type="text" className="form-control col-sm-8" name="subscriptions" placeholder={budget.subscriptions} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Entertainment</label>
                                <input type="text" className="form-control col-sm-8" name="entertainment" placeholder={budget.entertainment} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Dining Out</label>
                                <input type="text" className="form-control col-sm-8" name="dining" placeholder={budget.dining} onChange={onChangeHandler}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Shopping</label>
                                <input type="text" className="form-control col-sm-8" name="shopping" placeholder={budget.shopping} onChange={onChangeHandler}/>
                            </div> 
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="">Misc.</label>
                                <input type="text" className="form-control col-sm-8" name="misc" placeholder={budget.misc} onChange={onChangeHandler}/>
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