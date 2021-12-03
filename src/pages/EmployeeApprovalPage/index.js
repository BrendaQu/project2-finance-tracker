import React from "react"
import EmployeeApproval from "../../componenets/EmployeeApproval"
import NavbarDefault from "../../componenets/NavbarDefault"
import NavbarUser from "../../componenets/NavbarUser"

const EmployeeApprovalPage = () => {
    return (
        <div>
            <NavbarDefault />
            <EmployeeApproval />
        </div>
    )
}

export default EmployeeApprovalPage