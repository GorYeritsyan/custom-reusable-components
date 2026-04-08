import { useDrawer } from "./Drawer.jsx";
import Button from "../button/Button.jsx";

const DrawerConfirm = ({ children, onConfirm, variant }) => {
    const { closeDrawer } = useDrawer();

    function handleDrawerSubmit() {
        onConfirm();
        closeDrawer();
    }

    return (
        <Button variant={variant} onClick={handleDrawerSubmit}>
            {children}
        </Button>
    );
}

export default DrawerConfirm;