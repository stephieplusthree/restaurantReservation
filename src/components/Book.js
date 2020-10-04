import React, { useState } from "react";
import {
    Row,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Button
} from "reactstrap";

import Table from "./Table";

const Book = _ => {
    const [totalTables, setTotalTables] = useState([]);
    
    //User's Selections
    const [selection, setSelectrion] = useState({
        table: {
            name: null,
            id: null
        },
        date: new Date(),
        time: null,
        location: "Any Location",
        size: 0
    });

    // User's booking default
    const [booking, setBooking] = useState({
        name: "",
        phone: "",
        email: ""
    });
    
    //Potential locations
    const [locations] = useState(["Any Location", "Patio", "Inside", "Bar"])
    const [times] = useState([

    ]);
    
    return (
        <div>
            <p>Booking Page</p>
        </div>
    );
};

export default Book;