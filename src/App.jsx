import React, { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar/>
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" exact element={<Login/>}/>
                        <Route path="/cart" exact element={<ShoppingCart/>}/>
                        <Route path="/dashboard" exact element={<Dashboard/>}/>
                        <Route path="/customers" exact element={<CustomersList/>}/>
                        <Route path="*" element={<NoMatchPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}