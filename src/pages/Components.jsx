import ButtonComponentCard from "../components/component-cards/ButtonComponentCard.jsx";
import ModalComponentCard from "../components/component-cards/ModalComponentCard.jsx";
import DrawerComponentCard from "../components/component-cards/DrawerComponentCard.jsx";
import SpinnerComponentCard from "../components/component-cards/SpinnerComponentCard.jsx";
import NotificationComponentCard from "../components/component-cards/NotificationComponentCard.jsx";
import TabsComponentCard from "../components/component-cards/TabsComponentCard.jsx";
import EmptyComponentCard from "../components/component-cards/EmptyComponentCard.jsx";

const Components = () => {
    return (
        <div className="flex flex-col gap-10 items-center py-10">
            <ButtonComponentCard />

            {/*<DropdownComponentCard />*/}

            {/* Modal */}
            <ModalComponentCard />

            {/* Drawer */}
            <DrawerComponentCard />

            {/* Spinner */}
            <SpinnerComponentCard />

            {/* Notification */}
            <NotificationComponentCard />

            {/* Tabs */}
            <TabsComponentCard />

            {/* Empty State */}

            <EmptyComponentCard />
        </div>
    )
}

export default Components;