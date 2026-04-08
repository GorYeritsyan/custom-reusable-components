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
            {/* Top Drawer */}
            <Drawer>
                <DrawerTrigger variant="outline">
                    Top
                </DrawerTrigger>

                <DrawerContent direction="top" title="Drawer title" description="Drawer description">
                    <div className="h-full overflow-y-auto">
                        Drawer content
                    </div>

                    <DrawerFooter>
                        <DrawerClose variant="outline">Close</DrawerClose>
                        <DrawerConfirm onConfirm={() => console.log("clicked")}>Save</DrawerConfirm>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            {/* Right Drawer */}
            <Drawer>
                <DrawerTrigger variant="outline">
                    Right
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

            {/* Bottom Drawer */}
            <Drawer>
                <DrawerTrigger variant="outline">
                    Bottom
                </DrawerTrigger>

                <DrawerContent direction="bottom" title="Drawer title" description="Drawer description">
                    <div className="h-full overflow-y-auto">
                        Drawer content
                    </div>

                    <DrawerFooter>
                        <DrawerClose variant="outline">Close</DrawerClose>
                        <DrawerConfirm onConfirm={() => console.log("clicked")}>Save</DrawerConfirm>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            {/* Left Drawer */}
            <Drawer>
                <DrawerTrigger variant="outline">
                    Left
                </DrawerTrigger>

                <DrawerContent direction="left" title="Drawer title" description="Drawer description">
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