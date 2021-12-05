import React from "react"
import EmployeeDelete from "../../componenets/EmployeeDelete"
import NavbarDefault from "../../componenets/NavbarDefault"
import NavbarEmployee from "../../componenets/NavbarEmployee"

const EmployeeApprovalPage = () => {
    return (
        <div>
            <NavbarEmployee />
            <EmployeeDelete />
        </div>
    )
}

export default EmployeeApprovalPage