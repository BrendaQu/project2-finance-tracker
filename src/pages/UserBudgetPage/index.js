import React from "react";
import NavbarUser from '../../componenets/NavbarUser';
import UserBudgetForm from '../../componenets/UserBudgetForm';
import Footer from '../../componenets/Footer';

const UserBudgetPage = () => {
    return (
        <>
            <NavbarUser />
            <UserBudgetForm />
            <Footer />
        </>
    )
}

export default UserBudgetPage;