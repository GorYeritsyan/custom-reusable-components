import { FaChevronDown } from "react-icons/fa6";

const AccordionItem = ({ item, onTrigger }) => {
    return (
        <div className="flex flex-col border-b border-gray-300 last:border-none">
            <div onClick={() => onTrigger(item.value)} className="flex items-center justify-between group cursor-pointer py-4">
                <h3 className="font-semibold underline-offset-2 group-hover:underline">
                    {item.title}
                </h3>

                <FaChevronDown className={item.isOpen && "rotate-180"} />
            </div>

            {item.isOpen && (
                <div className="pb-3 font-normal">
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    );
}

export default AccordionItem;