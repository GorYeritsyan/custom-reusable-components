import {LuLoaderCircle} from "react-icons/lu";
import {cn} from "../../utils/index.js";
import {cloneElement} from "react";

const spinnerConfig = {
    default: "animate-spin size-5 text-base",
    sizes: {
        xs: "size-3 text-xs",
        sm: "size-4 text-sm",
        lg: "size-8 text-lg",
        xl: "size-12 text-xl"
    }
}

const Spinner = ({ size, description, className, icon, ...props }) => {
    const spinnerClassName = cn(spinnerConfig.default, spinnerConfig.sizes?.[size], className);

    return (
        <div className="flex flex-col items-center gap-2">
            {icon ? (
                cloneElement(icon, { className: spinnerClassName })
            ) : (
                <LuLoaderCircle
                    className={spinnerClassName}
                    {...props}
                />
            )}

            {/* Spinner Description - example: Loading, Updating, etc... */}
            {description && (
                <span className={cn(spinnerConfig.sizes?.[size], "font-medium size-fit")}>Loading</span>
            )}
        </div>
    );
}

export default Spinner;