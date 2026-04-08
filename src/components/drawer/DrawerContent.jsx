import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import { useDrawer } from "./Drawer.jsx";
import DrawerClose from "./DrawerClose.jsx";
import {cn} from "../../utils/index.js";

const drawerDirections = {
    top: "top-0 left-0 rounded-b-md max-h-70 size-full justify-center",
    left: "top-0 left-0 rounded-r-md min-w-90 h-full",
    right: "top-0 right-0 rounded-l-md min-w-90 h-full",
    bottom: "bottom-0 left-0 rounded-t-md max-h-70 size-full"
}

const DrawerContent = ({ children, title, description, direction = "right", showCloseButton = true }) => {
    const { isDrawerOpen, closeDrawer } = useDrawer();

    function handleDrawerClose(e) {
        if (e.target.id === "drawer") {
            closeDrawer();
        }
    }

    if (!isDrawerOpen) return;

    return (
        createPortal((
            <div id="drawer" onClick={handleDrawerClose} className="fixed top-0 size-full bg-zinc-500/40 backdrop-blur-xs">
                <div className={cn("absolute ring ring-zinc-400 shadow-sm shadow-zinc-300 bg-white py-3 px-4", drawerDirections?.[direction])}>
                    <div className="flex flex-col justify-start gap-5 h-full">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="font-medium text-wrap">{description}</p>
                            </div>

                            {showCloseButton && (
                                <DrawerClose variant="ghost" size="icon">
                                    <FaXmark />
                                </DrawerClose>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 h-full">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        ), document.body)
    );
}

export default DrawerContent;