import { useContext, useEffect, useState } from "react";
import { cn } from "../../../utils/index.js";
import { FormContext } from "../Form.jsx";

const Input = ({ name, errors, ...props }) => {
    const [value, setValue] = useState("");

    const { handleChange } = useContext(FormContext);

    useEffect(() => {
        handleChange(name, value)
    }, [value]);

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <input
            id={name}
            name={name}
            className={cn("px-3 py-1.5 rounded-md border border-zinc-300 focus:border-zinc-600 outline-none focus:ring-4 focus:ring-zinc-300 transition-border duration-300 w-full", errors?.[name] && "border-red-500! focus:ring-red-300")}
            onChange={handleInputChange}
            value={value}
            {...props}
        />
    );
}

export default Input;