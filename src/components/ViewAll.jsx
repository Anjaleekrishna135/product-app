import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, setData] = useState(
        [
            {
                "productcode": 1,
                "productname": "kurti",
                "price": 500,
                "customernumber": 78778778
            }
        ]

    )
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">productcode</th>
                                    <th scope="col">productname</th>
                                    <th scope="col">price</th>
                                    <th scope="col">customernumber</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.productcode}</td>
                                        <td>{value.productname}</td>
                                        <td>{value.price}</td>
                                        <td>{value.customernumber}</td>






                                    </tr>
                                 ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll