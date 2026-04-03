import {FaRegBell} from "react-icons/fa";

const EmptyMedia = ({ children, variant }) => {

    if (variant === "icon") return (
        <div className="bg-zinc-100 rounded-lg items-center justify-center p-2 w-fit">
            {children}
        </div>
    )

    return children
}

export default EmptyMedia;