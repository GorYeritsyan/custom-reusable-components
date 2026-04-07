import { useState } from "react";
import TabsList from "./TabsList.jsx";
import TabsContent from "./TabsContent.jsx";
import { cn } from "../../utils/index.js";

const tabsOrientation = {
    horizontal: "flex flex-col gap-2",
    vertical: "flex-row",
}

const Tabs = ({ defaultTab, tabs, variant, orientation = "horizontal" }) => {
    const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0].value);

    function handleTabChange(tab) {
        setActiveTab(tab);
    }

    return (
        <div className={cn(tabsOrientation.horizontal, tabsOrientation?.[orientation])}>
            <TabsList
                orientation={orientation}
                variant={variant}
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            {tabs.map(tab => (
                <TabsContent key={tab.value} activeTab={activeTab} value={tab.value}>
                    {tab.children}
                </TabsContent>
            ))}
        </div>
    );
}

export default Tabs;