import clsx from "clsx";
import {twMerge} from "tailwind-merge";

export const cx = (...classNames) => {
    return twMerge(clsx(...classNames));
}