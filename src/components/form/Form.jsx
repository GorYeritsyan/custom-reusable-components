import { createContext, useContext, useRef } from "react";
import { cn } from "../../utils/index.js";

export const FormContext = createContext({})

const Form = ({ children, onSubmit, className }) => {
    const formRef = useRef({});

    const handleChange = (key, value) => {
        formRef.current[key] = value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formRef.current);
    }

    return (
        <FormContext.Provider value={{ handleChange }}>
            <form onSubmit={handleSubmit} className={cn("w-full flex flex-col gap-4", className)}>
                {children}
            </form>
        </FormContext.Provider>

    );
}

export const useForm = () => {
    const context = useContext(FormContext);

    if (!context) throw new Error("useForm must be used within the Form");

    return context;
}

export default Form;