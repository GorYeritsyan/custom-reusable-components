import { useState } from "react";
import Button from "../button/Button.jsx";
import {FaXmark} from "react-icons/fa6";

const Modal = ({ children, title }) => {
    return (
        <div className="fixed top-0 size-full bg-gray-500/40 flex items-center justify-center backdrop-blur-xs">
            <div className="relative min-w-110 px-5 py-3 overflow-y-auto bg-white rounded-lg ring ring-gray-400 shadow-sm shadow-gray-300">
                <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    {/*<ModalClose>*/}
                    {/*    <FaXmark />*/}
                    {/*</ModalClose>*/}
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;