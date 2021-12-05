import React from "react";
import NavbarUser from '../../componenets/NavbarUser';
import UserExpenseForm from '../../componenets/UserExpenseForm';
import Footer from '../../componenets/Footer';

const UserExpensePage = () => {
    return (
        <>
            <NavbarUser />
            <UserExpenseForm />
            <Footer />
        </>
    )
}

export default UserExpensePage;