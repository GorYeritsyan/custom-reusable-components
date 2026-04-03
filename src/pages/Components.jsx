import ButtonComponentCard from "../components/component-cards/ButtonComponentCard.jsx";
import DropdownComponentCard from "../components/component-cards/DropdownComponentCard.jsx";
import ModalComponentCard from "../components/component-cards/ModalComponentCard.jsx";
import DrawerComponentCard from "../components/component-cards/DrawerComponentCard.jsx";

const Components = () => {
    return (
        <div className="flex flex-col gap-10 items-center py-10">
            <ButtonComponentCard />

            {/*<DropdownComponentCard />*/}

            <ModalComponentCard />

            <DrawerComponentCard />
        </div>
    )
}

export default Components;