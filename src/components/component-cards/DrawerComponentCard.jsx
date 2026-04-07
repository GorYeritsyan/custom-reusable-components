import ComponentCard from "../ComponentCard.jsx";
import Drawer from "../drawer/Drawer.jsx";
import DrawerTrigger from "../drawer/DrawerTrigger.jsx";
import DrawerContent from "../drawer/DrawerContent.jsx";
import DrawerConfirm from "../drawer/DrawerConfirm.jsx";
import DrawerClose from "../drawer/DrawerClose.jsx";
import DrawerFooter from "../drawer/DrawerFooter.jsx";

const DrawerComponentCard = () => {
    return (
        <ComponentCard title="Drawer">
            <Drawer>
                <DrawerTrigger variant="outline">
                    Open Drawer
                </DrawerTrigger>

                <DrawerContent title="Drawer title" description="Drawer description">
                    <div className="h-full overflow-y-auto">
                        Drawer content
                    </div>

                    <DrawerFooter>
                        <DrawerClose variant="outline">Close</DrawerClose>
                        <DrawerConfirm onConfirm={() => console.log("clicked")}>Save</DrawerConfirm>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </ComponentCard>
    );
}

export default DrawerComponentCard;