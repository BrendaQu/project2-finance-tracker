import React from "react"
import EmployeeApproval from "../../componenets/EmployeeApproval"
import NavbarDefault from "../../componenets/NavbarDefault"
import NavbarEmployee from "../../componenets/NavbarEmployee"
import NavbarUser from "../../componenets/NavbarUser"

const EmployeeApprovalPage = () => {
    return (
        <div>
            <NavbarEmployee />
            <EmployeeApproval />
        </div>
    )
}

export default EmployeeApprovalPage