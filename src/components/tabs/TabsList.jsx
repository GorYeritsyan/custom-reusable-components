import TabsTrigger from "./TabsTrigger.jsx";
import {cn} from "../../utils/index.js";

const tabsVariants = {
    default: "rounded-xl bg-zinc-200/60 p-1 flex items-center justify-center gap-2",
    variants: {
        line: "bg-transparent",
    },
    orientation: {
        vertical: "flex-col gap-1"
    }
}

const TabsList = ({ tabs, variant, activeTab, orientation, onTabChange }) => {

    return (
        <div className={cn(tabsVariants.default, tabsVariants.variants?.[variant], tabsVariants.orientation?.[orientation])}>
            {tabs.map(tab => (
                <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    activeTab={activeTab}
                    variant={variant}
                    onTabChange={() => onTabChange(tab.value)}
                >
                    {tab.label}
                </TabsTrigger>
            ))}
        </div>
    );
}

export default TabsList;