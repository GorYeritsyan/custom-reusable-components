import {cn} from "../../utils/index.js";
import {useTabs} from "./Tabs.jsx";

const tabsTriggerVariants = {
    default: "bg-white rounded-lg text-zinc-900 border border-zinc-300 shadow-xs shadow-zinc-300",
    variants: {
        line: "border-b-2 border-b-zinc-800 text-zinc-900",
    },
    orientation: {
        vertical: "border-b-none border-r-2 border-r-zinc-900 py-0 text-zinc-900",
    }
}

const TabsTrigger = ({ children, variant, activeTab, value, orientation, onTabChange }) => {
    // const { activeTab, setActiveTab } = useTabs();

    // function handleTabChange() {
    //     setActiveTab(value);
    // }

    return (
        <button onClick={onTabChange} className={cn(
            "text-zinc-400 hover:text-zinc-900 font-semibold px-2 py-0.5 cursor-pointer",
            activeTab === value && tabsTriggerVariants.default,
            activeTab === value && tabsTriggerVariants.variants?.[variant ?? "default"] && tabsTriggerVariants?.orientation[orientation],
            // activeTab === value &&
            )}>
            {children}
        </button>
    );
}

export default TabsTrigger;