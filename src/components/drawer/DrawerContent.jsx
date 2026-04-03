import {useDrawer} from "./Drawer.jsx";
import {FaXmark} from "react-icons/fa6";
import DrawerClose from "./DrawerClose.jsx";
import {createPortal} from "react-dom";

const DrawerContent = ({ children, title, description, showCloseButton = true }) => {
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
                <div className="absolute top-0 right-0 ring-l ring-zinc-300 shadow-sm shadow-zinc-300 min-w-90 rounded-md h-full bg-white py-3 px-4">
                    <div className="flex flex-col gap-5 h-full">
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