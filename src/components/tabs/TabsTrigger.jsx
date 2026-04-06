import {cn} from "../../utils/index.js";
import {useTabs} from "./Tabs.jsx";

const tabsTriggerVariants = {
    variants: {
        default: "bg-white rounded-lg border border-zinc-300 shadow-xs shadow-zinc-300",
        line: "border-b-2 border-b-zinc-800 text-zinc-900",
    }
}

const TabsTrigger = ({ children, variant, activeTab, value, onTabChange }) => {
    // const { activeTab, setActiveTab } = useTabs();

    // function handleTabChange() {
    //     setActiveTab(value);
    // }

    return (
        <button onClick={onTabChange} className={cn(
            "text-zinc-400 hover:text-zinc-900 font-semibold px-2 py-0.5 cursor-pointer w-full",
            activeTab === value && "text-zinc-900",
            activeTab === value && tabsTriggerVariants.variants?.[variant ?? "default"],
            )}>
            {children}
        </button>
    );
}

export default TabsTrigger;