import ComponentCard from "../ComponentCard.jsx";
import Dropdown from "../dropdown/Dropdown.jsx";
import Button from "../button/Button.jsx";
import {FaCheck} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa6";
import DropdownItem from "../dropdown/DropdownItem.jsx";
import {useState} from "react";
import dropdownItem from "../dropdown/DropdownItem.jsx";
import {cn} from "../../utils/index.js";

const dropdownMenu = [
    {
        label: "1st menu item"
    },
    {
        label: "2nd menu item",
        icon: <FaCheck />,
        disabled: true,
    },
    {
        label: "3rd menu item",
        danger: true
    }
];

const dropdownConfig = {
    positions: {
        ["left-top"]: "right-full bottom-0",
        left: "right-full top-1/2 -translate-y-1/2",
        ["left-bottom"]: "right-full top-0",

        ["right-top"]: "left-full bottom-0",
        right: "left-full top-1/2 -translate-y-1/2",
        ["right-bottom"]: "left-full top-0",

        ["bottom-left"]: "top-full right-0",
        bottom: "top-full left-1/2 -translate-x-1/2",
        ["bottom-right"]: "top-full left-0",
    }
}

const DropdownComponentCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const position = "bottom-right";

    function handleDropdownOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <ComponentCard title="Dropdown">
            <Dropdown menu={dropdownMenu}>
                <Button onClick={handleDropdownOpen}>Open</Button>

                {isOpen && (
                    <div className={cn("absolute border border-gray-300 min-w-75 bg-white rounded-md p-2", dropdownConfig?.positions?.[position])}>
                        {dropdownMenu.map((item, index) => (
                            <DropdownItem key={index} disabled={item.disabled} danger={item.danger} icon={item?.icon}>
                                {item?.icon}
                                {item.label}
                            </DropdownItem>
                        ))}
                    </div>
                )}
            </Dropdown>
        </ComponentCard>
    );
}

export default DropdownComponentCard;