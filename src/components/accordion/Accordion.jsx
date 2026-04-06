import {useEffect, useState} from "react";
import {cn} from "../../utils/index.js";
import AccordionItem from "./AccordionItem.jsx";


const Accordion = ({ defaultValue, type, data, showAllItems, className }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (showAllItems) {
            setItems(data.map(item => ({...item, isOpen: true})));
            return;
        }

        setItems(data.map(item => item.value === defaultValue ? ({...item, isOpen: true}) : item));
    }, []);

    // Open only one item
    function handleTriggerItem(value) {
        if (type === "multiple") {
            setItems(prev => prev.map(item => item.value === value ? {...item, isOpen: !item.isOpen} : item));
            return;
        }

        setItems(prev => prev.map(item => item.value === value ? {...item, isOpen: !item.isOpen} : {...item, isOpen: false}));
    }

    return (
        <div className={cn("flex flex-col max-w-125 w-full", className)}>
            {items.map(item => (
                <AccordionItem
                    key={item.value}
                    item={item}
                    onTrigger={handleTriggerItem}
                />
            ))}
        </div>
    );
}
export default Accordion;