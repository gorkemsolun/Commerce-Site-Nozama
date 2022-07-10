import React, {Component} from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
    state = {
        products: [
            {
                id: 1, name: "Best Monitor", price: 1, amount: 1
            },
            {
                id: 2, name: "Best Telephone", price: 2, amount: 1
            },
            {
                id: 3,  name: "Not Best Telephone", price: 1, amount: 10
            }
        ],
    };
    render () {
        return <div className="container-fluid">
            <h4>Shopping Cart</h4>
            <div className="row">
                {this.state.products.map((product)=>{
                    return <Product key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}/>
                })}
            </div>
        </div>
    };
}