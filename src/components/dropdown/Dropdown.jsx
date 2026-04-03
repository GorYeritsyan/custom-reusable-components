import DropdownItem from "./DropdownItem.jsx";

const Dropdown = ({ children, menu }) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute top-full left-0 border border-gray-300 min-w-75 bg-white rounded-md p-2 hidden group-hover:block">
                {menu.map((item, index) => (
                    <DropdownItem key={index} disabled={item.disabled} danger={item.danger} icon={item?.icon}>
                        {item.label}
                    </DropdownItem>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;