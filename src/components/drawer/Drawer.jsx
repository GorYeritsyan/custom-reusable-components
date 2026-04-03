import {createContext, useContext, useState} from "react";

const DrawerContext = createContext(null);

const Drawer = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    function triggerDrawer() {
        setIsDrawerOpen(true);
    }

    function closeDrawer() {
        setIsDrawerOpen(false);
    }

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, triggerDrawer, closeDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
}

export const useDrawer = () => {
    const context = useContext(DrawerContext);

    if (!context) throw new Error('useModal must be used within Drawer');

    return context;
}

export default Drawer;