import { cn } from "../../utils/index.js";

const buttonConfig = {
    default: "bg-zinc-900 text-white font-semibold px-4 py-1.5 rounded-lg cursor-pointer active:translate-y-px transition-all duration-100 flex items-center justify-center gap-2 disabled:bg-zinc-900/40 disabled:cursor-default disabled:translate-none outline-none",
    variants: {
        outline: "bg-white hover:bg-zinc-100 ring ring-zinc-200 text-zinc-900 disabled:text-zinc-400 disabled:bg-zinc-100/80",
        secondary: "text-zinc-900 bg-zinc-200 hover:bg-zinc-200/70 disabled:text-zinc-400 disabled:bg-zinc-100",
        ghost: "text-zinc-900 bg-transparent hover:bg-zinc-100 disabled:text-zinc-400 disabled:bg-transparent!",
        danger: "text-red-500 bg-red-100 hover:bg-red-200 disabled:text-red-300 disabled:bg-red-100",
        link: "text-zinc-900 bg-transparent hover:underline underline-offset-4 disabled:bg-transparent disabled:text-zinc-400 disabled:underline"
    },
    sizes: {
        xs: "text-xs px-2 py-1 rounded-md",
        sm: "text-sm px-3 py-1 ",
        lg: "text-xl",

        ["icon-xs"]: "p-1.5 text-xs rounded-md",
        ["icon-sm"]: "p-2",
        icon: "p-1.5 min-w-[36px] min-h-[36px]",
        ["icon-lg"]: "text-base p-3"
    }
}

const Button = ({ children, variant, size, disabled, className, ...props }) => {
    return (
        <button
            disabled={disabled}
            className={cn(
                buttonConfig.default,
                buttonConfig?.variants?.[variant],
                buttonConfig?.sizes?.[size],
                className,
                )}

            {...props}
        >
            {children}
        </button>
    );
}

export default Button;