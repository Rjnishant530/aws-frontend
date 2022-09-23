import React, { Component } from 'react'
import CustomerService from './CustomerService'
export default class Home extends Component {
    state = {
        list: [],
        selectedId: ""
    }

    getOrderDetails = async () => {
        var service = new CustomerService();
        var result = await service.getAllCustomers();
        // console.log("some result", result)
        this.setState({ ...this.state, list: result })
    }

    componentDidMount() {
        this.getOrderDetails();
    }
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead className="table table-dark ">
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Company Name
                            </th>
                            <th>
                                Contact Name
                            </th>
                            <th>
                                Contact Title
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                Region
                            </th>
                            <th>
                                Postal Code
                            </th>
                            <th>
                                Country
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Fax
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list &&
                            this.state.list.map((value, index) => (
                                <tr key={index}>
                                    <td>
                                        {value.id}
                                    </td>
                                    <td>
                                        {value.companyName}
                                    </td>
                                    <td>
                                        {value.contactName}
                                    </td>
                                    <td>
                                        {value.contactTitle}
                                    </td>
                                    <td>
                                        {value.address}
                                    </td>
                                    <td>
                                        {value.city}
                                    </td>
                                    <td>
                                        {value.region}
                                    </td>
                                    <td>
                                        {value.postalCode}
                                    </td>
                                    <td>
                                        {value.country}
                                    </td>
                                    <td>
                                        {value.phone}
                                    </td>
                                    <td>
                                        {value.fax}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
