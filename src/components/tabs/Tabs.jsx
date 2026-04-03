// import {createContext, useContext, useState} from "react";
//
// const TabsContext = createContext(null);
//
// const Tabs = ({ children, defaultTab, tabs }) => {
//     const [activeTab, setActiveTab] = useState(defaultTab ?? "overview");
//
//     return (
//         <TabsContext.Provider value={{ activeTab, setActiveTab, tabs }}>
//             <div className="flex flex-col gap-2">
//                 {children}
//             </div>
//         </TabsContext.Provider>
//     );
// }
//
// export const useTabs = () => {
//     const context = useContext(TabsContext);
//
//     if (!context) throw new Error('useTabs must be used within Tabs');
//
//     return context;
// }
//
// export default Tabs;

import {createContext, useContext, useState} from "react";
import TabsTrigger from "./TabsTrigger.jsx";
import TabsList from "./TabsList.jsx";
import TabsContent from "./TabsContent.jsx";
import {cn} from "../../utils/index.js";

const TabsContext = createContext(null);

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

export const useTabs = () => {
    const context = useContext(TabsContext);

    if (!context) throw new Error('useTabs must be used within Tabs');

    return context;
}

export default Tabs;