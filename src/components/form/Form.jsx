import { cn } from "../../utils/index.js";

const Form = ({ children, onSubmit, className }) => {
    return (
        <form onSubmit={onSubmit} className={cn("w-full flex flex-col gap-4", className)}>
            {children}
        </form>
    );
}

export default Form;