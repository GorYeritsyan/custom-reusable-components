import { cn } from "../../utils/index.js";

const DropdownItem = ({ children, disabled, danger }) => {
    return (
        <div className={cn("py-2 px-3 flex items-center gap-2 hover:bg-gray-100 rounded-sm font-semibold cursor-pointer", disabled && "text-gray-200! bg-transparent! cursor-not-allowed", danger && "text-red-500 hover:text-red-600 bg-red-100 hover:bg-red-200")}>
            {children}
        </div>
    );
}

export default DropdownItem;