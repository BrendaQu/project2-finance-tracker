import React from "react";
import axios from "axios";

const BudgetBars = (props) => {
    //Budget progress percentages
    const total = props.data.rent + props.data.utilities + props.data.groceries + props.data.subscriptions + props.data.entertainment + props.data.dining + props.data.shopping + props.data.misc;
    
    //percentage calculations
    let p_rent = props.data.rent / total *100;
    let p_utl = props.data.utilities / total * 100;
    let p_groc = props.data.groceries / total * 100;
    let p_subs = props.data.subscriptions / total * 100;
    let p_ent = props.data.entertainment / total * 100;
    let p_din = props.data.dining / total * 100;
    let p_shop = props.data.shopping / total * 100;
    let p_misc = props.data.misc / total * 100;

    //convert to string
    p_rent = p_rent.toString() + '%';
    p_utl = p_utl.toString() + '%';
    p_groc = p_groc.toString() + '%';
    p_subs = p_subs.toString() + '%';
    p_ent = p_ent.toString() + '%';
    p_din = p_din.toString() + '%';
    p_shop = p_shop.toString() + '%';
    p_misc = p_misc.toString() + '%';


    return (
        <div className="progress">
                <div class="progress-bar bar-rent" role="progressbar" style={{ width: p_rent }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {props.data.rent}</div>
                <div class="progress-bar bar-utl" role="progressbar" style={{ width: p_utl }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {props.data.utilities}</div>
                <div class="progress-bar bar-groc" role="progressbar" style={{ width: p_groc }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {props.data.groceries}</div>
                <div class="progress-bar bar-subs" role="progressbar" style={{ width: p_subs }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {props.data.subscriptions}</div>
                <div class="progress-bar bar-ent" role="progressbar" style={{ width: p_ent }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {props.data.entertainment}</div>
                <div class="progress-bar bar-din" role="progressbar" style={{ width: p_din }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {props.data.dining}</div>
                <div class="progress-bar bar-shop" role="progressbar" style={{ width: p_shop }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {props.data.shopping}</div>
                <div class="progress-bar bar-misc" role="progressbar" style={{ width: p_misc }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {props.data.misc}</div>
        </div>
    )
}

export default BudgetBars;