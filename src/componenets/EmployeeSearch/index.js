//Milton
import React from "react";

const EmployeeSearch = () => {

    const filterTable = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("userTable");
        tr = table.getElementsByTagName("tr");

        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("th")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    return (

        <div>
            <div className="input-group rounded w-25 p-3">
                <input type="search" className="form-control rounded" placeholder="Enter UserId" aria-label="Search"
                    aria-describedby="search-addon" onKeyUp={filterTable} id='myInput'/>
            </div>

            <table className="table" id="userTable">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>111-111-1111</td>
                        <td>Male</td>
                        <td>USA</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>111-111-1111</td>
                        <td>Male</td>
                        <td>USA</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>111-111-1111</td>
                        <td>Male</td>
                        <td>USA</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeSearch