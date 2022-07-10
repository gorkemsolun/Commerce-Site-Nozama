import React, { Component } from "react";

export default class CustomersList extends Component {
    state = {
        pageTitle: "Customers", 
        customerCount: 2,
        customers: [
            {
                id: 1,
                name: "Ayse",
                phoneNo: "1",
                address: { city: "Ankara"},
                photo: "https://picsum.photos/id/1011/50"},
            {
                id: 2,
                name: "Veli",
                phoneNo: null,
                address: { city: "Bolu"},
                photo: "https://picsum.photos/id/1010/50"},
        ],
    };

    customerNameStyle = (name) => {
        if (name.startsWith("V")) return "green-highlight";
        else if (name.startsWith("A")) return "aqua-highlight";
        else return "default-highlight";
    }

    render() {
        return <div>
            <h4 className="m-1 p-1">
                <span className="badge badge-secondary m-2">
                    {this.state.customerCount}
                </span>
                {this.state.pageTitle}
                <button className="btn btn-info m-2" onClick={this.onRefreshClick}>
                    Refresh
                </button>
            </h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Phone No</th>
                        <th>From</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getCustomerRow()}
                </tbody>
            </table>

        </div>
    };

    onRefreshClick = () => {
        this.setState({customerCount: this.state.customerCount})
    };
    getPhoneToRender = (no) => {
        return (no == null) ? <div className="bg-warning p-2 text-center"> Unknown </div> : no;
    };
    getCustomerRow = () => {
        return (this.state.customers.map((customer,index) => {
            return (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td className={this.customerNameStyle(customer.name)}>{customer.name}</td>
                    <td>
                        <img src={customer.photo} alt="Customer"/>
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={ () => {
                                this.onChangePictureClick(customer, index);}}>
                                Change Picture
                            </button>
                        </div>
                    </td>
                    <td>{this.getPhoneToRender(customer.phoneNo)}</td>
                    <td>{customer.address.city}</td>
                </tr>
            );
        }));
    };
    onChangePictureClick = (customer, index) => {
        var customerArr = this.state.customers;
        customerArr[index].photo="https://picsum.photos/id/1031/50";
        this.setState({customers:customerArr});
    };
}