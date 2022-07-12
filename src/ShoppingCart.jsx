import React, {Component} from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        console.log("cons");
        this.state = {
            products: [],
        };
    };
    
    render () {
        return <div className="container-fluid">
            <h4>Shopping Cart</h4>
            <div className="row">
                {this.state.products.map((product)=>{
                    return <Product key={product.id} product={product} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}> 
                        <button className="btn btn-primary">Purchease</button>
                    </Product>
                })}
            </div>
        </div>
    };

    componentDidMount = async () => {
        var response = await fetch("http://localhost:3000/products", {method: "GET"});
        console.log(response);
        this.setState({products: await response.json()});
    };

    componentDidUpdate (prevProps, prevState) {
    };

    componentWillUnmount () {

    };

    componentDidCatch(error, info) {
        
    };

    handleIncrement = (product, value) => {
        let allProducts = [...this.state.products];
        let i = allProducts.indexOf(product);
        if (allProducts[i].amount < value) {
            allProducts[i].amount=value;
            this.setState({products:allProducts});
        }
    };

    handleDecrement = (product, value) => {
        let allProducts = [...this.state.products];
        let i = allProducts.indexOf(product);
        if (allProducts[i].amount>value) {
            allProducts[i].amount=value;
            this.setState({products:allProducts});
        }
    };

    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let i = allProducts.indexOf(product);
        if (window.confirm("Are you sure to delete?")) {
            allProducts.splice(i,1);
            this.setState({products:allProducts});
        }
    }
}