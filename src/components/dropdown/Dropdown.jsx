import DropdownItem from "./DropdownItem.jsx";
import {useState} from "react";

const Dropdown = ({ children, menu, trigger }) => {
    return (
        <div className="relative group">
            {children}
        </div>
    );
}

export default Dropdown;