import { useState } from "react";
import DropdownItem from "./DropdownItem.jsx";
import Button from "../button/Button.jsx";
import { cn } from "../../utils/index.js";

const dropdownConfig = {
    positions: {
        ["left-top"]: "right-full bottom-0",
        ["left"]: "right-full top-1/2 -translate-y-1/2",
        ["left-bottom"]: "right-full top-0",

        ["right-top"]: "left-full bottom-0",
        ["right"]: "left-full top-1/2 -translate-y-1/2",
        ["right-bottom"]: "left-full top-0",

        ["bottom-left"]: "top-full right-0",
        ["bottom"]: "top-full left-1/2 -translate-x-1/2",
        ["bottom-right"]: "top-full left-0",
    }
}

const Dropdown = ({ children, menu, position = "bottom-right", trigger = "click" }) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleDropdownOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div
            {...(trigger === "hover" && { onMouseEnter: handleDropdownOpen, onMouseLeave: handleDropdownOpen })}
            className="relative group"
        >
            <Button
                {...(trigger === "click" && { onClick: handleDropdownOpen })}
            >
                {children}
            </Button>

            {isOpen && (
                <div className={cn("absolute border border-gray-300 min-w-75 bg-white rounded-md p-2", dropdownConfig?.positions?.[position])}>
                    {menu.map((item, index) => (
                        <DropdownItem key={index} disabled={item.disabled} danger={item.danger} icon={item?.icon}>
                            {item?.icon}
                            {item.label}
                        </DropdownItem>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;