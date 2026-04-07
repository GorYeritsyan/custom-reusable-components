import { LuLoaderCircle } from "react-icons/lu";
import { cn } from "../../utils/index.js";

const spinnerConfig = {
    default: "animate-spin *:size-5 text-base flex items-center justify-center",
    sizes: {
        xs: "*:size-3 text-xs",
        sm: "*:size-4 text-sm",
        lg: "*:size-8 text-lg",
        xl: "*:size-12 text-xl"
    }
}

const Spinner = ({ size, description, className, icon, ...props }) => {
    const spinnerClassName = cn(spinnerConfig.default, spinnerConfig.sizes?.[size], className);

    return (
        <div className="flex flex-col items-center gap-2">
            {icon ? (
                <span className={spinnerClassName}>
                    {icon}
                </span>
            ) : (
                <span className={spinnerClassName}>
                    <LuLoaderCircle
                        {...props}
                    />
                </span>
            )}

            {/* Spinner Description - example: Loading, Updating, etc... */}
            {description && (
                <span className={cn(spinnerConfig.sizes?.[size], "font-medium size-fit")}>{description}</span>
            )}
        </div>
    );
}

export default Spinner;