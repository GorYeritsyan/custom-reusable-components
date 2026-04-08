import { useDrawer } from "./Drawer.jsx";
import Button from "../button/Button.jsx";

const DrawerClose = ({ children, variant, size }) => {
    const { closeDrawer } = useDrawer();

    return (
        <Button type="button" onClick={closeDrawer} variant={variant} size={size}>
            {children}
        </Button>
    );
}

export default DrawerClose;