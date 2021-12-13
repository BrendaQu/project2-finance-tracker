import React, { memo } from "react";
import axios from "axios";
import { MemoryRouter } from "react-router";

const ExpenseBars = (props) => {

    let expenses_arr = props.data;

    //filter array object by current month
    let currMonthResult = () => expenses_arr.filter(e => {
        const e_date = new Date(e.date);
        const today = new Date();
        const currentYear = e_date.getFullYear() === today.getFullYear();
        const currentMonth = e_date.getMonth() === today.getMonth();

        return currentYear && currentMonth;
    })

    let curr_expenses_arr = currMonthResult();


    //group array object into different categories
    function groupBy(arr, property) {
        return arr.reduce(function (cat, x) {
            if (!cat[x[property]]) {
                cat[x[property]] = [];
            }
            cat[x[property]].push(x);
            return cat;
        }, {});
    }
    let categories = groupBy(curr_expenses_arr, 'category');
    console.log(categories);

    // //Sum Category: Rent
    categories.Rent.reduce(function (a, b) {
        return { amount: a.amount + b.amount };
    })

    const sum_rent = categories.Rent.reduce((a, b) => ({ amount: a.amount + b.amount }));
    console.log(sum_rent.amount);

    // Sum Category: Utilities
    categories.Utilities.reduce(function (a, b) {
        return { amount: a.amount + b.amount };
    })

    const sum_utl = categories.Utilities.reduce((a, b) => ({ amount: a.amount + b.amount }));
    console.log(sum_utl.amount);

    // //Sum Category: Groceries
    categories.Groceries.reduce(function (a, b) {
        return { amount: a.amount + b.amount };
    })

    const sum_groc = categories.Groceries.reduce((a, b) => ({ amount: a.amount + b.amount }));
    console.log(sum_groc.amount);

    // //Sum Category: Subscriptions 
    categories.Subscription.reduce(function (a, b) {
        return { amount: a.amount + b.amount };
    })

    const sum_subs = categories.Subscription.reduce((a, b) => ({ amount: a.amount + b.amount }));
    console.log(sum_subs.amount);

    // // Sum Category: Entertainment
    categories.Entertainment.reduce(function (a, b) {
        return { amount: a.amount + b.amount };
    })

    const sum_ent = categories.Entertainment.reduce((a, b) => ({ amount: a.amount + b.amount }));
    console.log(sum_ent.amount);

    // Sum Category: Dining Out
    categories['Dining Out'].reduce(function (a, b) {
        return { amount: a.amount + b.amount };
    })

    const sum_din = categories['Dining Out'].reduce((a, b) => ({ amount: a.amount + b.amount }));
    console.log(sum_din.amount);

    // Sum Category: Shopping
    categories.Shopping.reduce(function (a, b) {
        return { amount: a.amount + b.amount };
    })

    const sum_shop = categories.Shopping.reduce((a, b) => ({ amount: a.amount + b.amount }));
    console.log(sum_shop.amount);


    // Sum Category: Misc
    categories['Misc.'].reduce(function (a, b) {
        return { amount: a.amount + b.amount };
    })

    const sum_misc = categories['Misc.'].reduce((a, b) => ({ amount: a.amount + b.amount }));
    console.log(sum_misc.amount);

    const total = sum_rent.amount + sum_utl.amount + sum_groc.amount + sum_subs.amount + sum_ent.amount + sum_din.amount + sum_shop.amount + sum_misc.amount;

        //percentage calculations
        let p_rent = sum_rent.amount / total *100;
        let p_utl = sum_utl.amount / total * 100;
        let p_groc = sum_groc.amount / total * 100;
        let p_subs = sum_subs.amount / total * 100;
        let p_ent = sum_ent.amount / total * 100;
        let p_din = sum_din.amount / total * 100;
        let p_shop = sum_shop.amount / total * 100;
        let p_misc = sum_misc.amount / total * 100;
    
        //convert to string
        p_rent = p_rent.toString() + '%';
        p_utl = p_utl.toString() + '%';
        p_groc = p_groc.toString() + '%';
        p_subs = p_subs.toString() + '%';
        p_ent = p_ent.toString() + '%';
        p_din = p_din.toString() + '%';
        p_shop = p_shop.toString() + '%';
        p_misc = p_misc.toString() + '%';


    console.log(sum_rent.amount / total * 100);

    return (
        <div class="progress">
            <div class="progress-bar bar-rent" role="progressbar" style={{ width: p_rent }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sum_rent.amount}</div>
            <div class="progress-bar bar-utl" role="progressbar" style={{ width: p_utl }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sum_utl.amount}</div>
            <div class="progress-bar bar-groc" role="progressbar" style={{ width: p_groc }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sum_groc.amount}</div>
            <div class="progress-bar bar-subs" role="progressbar" style={{ width: p_subs }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sum_subs.amount}</div>
            <div class="progress-bar bar-ent" role="progressbar" style={{ width: p_ent }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sum_ent.amount}</div>
            <div class="progress-bar bar-din" role="progressbar" style={{ width: p_din }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sum_din.amount}</div>
            <div class="progress-bar bar-shop" role="progressbar" style={{ width: p_shop }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sum_shop.amount}</div>
            <div class="progress-bar bar-misc" role="progressbar" style={{ width: p_misc }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sum_misc.amount}</div>
        </div>
    )
}

export default ExpenseBars;