//Milton
import React from "react"

const EmployeeDelete = () => {
    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Country</th>
                        <th scope="col">Delete</th>
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
                        <td>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>111-111-1111</td>
                        <td>Male</td>
                        <td>USA</td>
                        <td>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>111-111-1111</td>
                        <td>Male</td>
                        <td>USA</td>
                        <td>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeDelete;