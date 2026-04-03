import {useTabs} from "./Tabs.jsx";

const TabsContent = ({ children, value, activeTab }) => {
    // const { activeTab } = useTabs();

    if (activeTab !== value) return;

    return (
        <div className="font-medium">
            {children}
        </div>
    );
}

export default TabsContent;