import ButtonComponentCard from "../components/component-cards/ButtonComponentCard.jsx";
import ModalComponentCard from "../components/component-cards/ModalComponentCard.jsx";
import DrawerComponentCard from "../components/component-cards/DrawerComponentCard.jsx";
import SpinnerComponentCard from "../components/component-cards/SpinnerComponentCard.jsx";
import NotificationComponentCard from "../components/component-cards/NotificationComponentCard.jsx";
import TabsComponentCard from "../components/component-cards/TabsComponentCard.jsx";
import EmptyComponentCard from "../components/component-cards/EmptyComponentCard.jsx";
import AccordionComponentCard from "../components/component-cards/AccordionComponentCard.jsx";
import FormComponentCard from "../components/component-cards/FormComponentCard.jsx";
import TableComponentCard from "../components/component-cards/TableComponentCard.jsx";
import PaginationComponentCard from "../components/component-cards/PaginationComponentCard.jsx";
import DropdownComponentCard from "../components/component-cards/DropdownComponentCard.jsx";

const Components = () => {
    return (
        <div className="flex flex-col gap-10 items-center py-10">
            {/* Button */}
            <ButtonComponentCard />

            {/* Dropdown Component */}
            <DropdownComponentCard />

            {/* Empty State */}
            <EmptyComponentCard />

            {/* Accordion - Collapsible Panel */}
            <AccordionComponentCard />

            {/* Tabs */}
            <TabsComponentCard />

            {/* NotificationProvider */}
            <NotificationComponentCard />

            {/* Spinner */}
            <SpinnerComponentCard />

            {/* Drawer */}
            <DrawerComponentCard />

            {/* Modal */}
            <ModalComponentCard />

            {/* Form */}
            <FormComponentCard />

            {/* Table */}
            <TableComponentCard />

            {/* Pagination */}
            <PaginationComponentCard />
        </div>
    )
}

export default Components;