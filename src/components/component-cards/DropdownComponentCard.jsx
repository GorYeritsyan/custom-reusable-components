import { FaCheck } from "react-icons/fa";
import ComponentCard from "../ComponentCard.jsx";
import Dropdown from "../dropdown/Dropdown.jsx";

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

const DropdownComponentCard = () => {
    return (
        <ComponentCard title="Dropdown">
            <Dropdown menu={dropdownMenu} trigger="hover">
                Open
            </Dropdown>
        </ComponentCard>
    );
}

export default DropdownComponentCard;