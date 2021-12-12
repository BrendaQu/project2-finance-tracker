//Milton
import React, { useState, useEffect } from "react";
import axios from "axios";
import Employee from "./Employee";


const EmployeeSearch = () => {

    const [users, setUser] = useState([])
        
    

    useEffect(() => {
        axios
            .get("http://localhost:9007/users")
            .then((response) => {
                console.log(response.data)
                setUser(response.data);
            })
            .catch((error) => console.error(error));
    }, [])

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

        <div className='container'>
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
                    {
                        users.map(user => <Employee data={user} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeSearch