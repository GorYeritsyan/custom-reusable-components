import Button from "../button/Button.jsx";
import {useDrawer} from "./Drawer.jsx";

const DrawerTrigger = ({ children, variant }) => {
    const { triggerDrawer } = useDrawer();

    return (
        <Button variant={variant} onClick={triggerDrawer}>
            {children}
        </Button>
    );
}

export default DrawerTrigger;