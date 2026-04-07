import { useDrawer } from "./Drawer.jsx";
import Button from "../button/Button.jsx";

const DrawerTrigger = ({ children, variant }) => {
    const { triggerDrawer } = useDrawer();

    return (
        <Button variant={variant} onClick={triggerDrawer}>
            {children}
        </Button>
    );
}

export default DrawerTrigger;