import { useState } from "react";
import { cn } from "../../utils/index.js";
import AccordionItem from "./AccordionItem.jsx";


const Accordion = ({ defaultValue, type, data, className }) => {
    // Initialize items with isOpen state
    const [items, setItems] = useState(data.map(item => item.value === defaultValue ? ({...item, isOpen: true}) : item));

    // Function to Trigger items based on Accordion type - multiple, single (default)
    function handleTriggerItem(value) {
        setItems(prev => prev.map(item =>
            item.value === value ? (
                {...item, isOpen: !item.isOpen}
            ) : (
                type === "multiple" ? item : {...item, isOpen: false}
            )
        ));
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