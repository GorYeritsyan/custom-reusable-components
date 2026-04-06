import clsx from "clsx";
import {twMerge} from "tailwind-merge";

export const cn = (...classNames) => {
    return twMerge(clsx(...classNames));
}

export const validateFormData = (formData) => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
        if (!value.trim()) {
            newErrors[key] = "This field is required";
        }
    })

    return newErrors;
}