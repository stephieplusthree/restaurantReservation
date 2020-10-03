import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";

export default props => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand
                className="nav-brand"
                onClick={_ => {
                console.log("Clicked!")
                }}
            >
                Pizza Cabin
            </NavbarBrand>
        </Navbar>
    );
};