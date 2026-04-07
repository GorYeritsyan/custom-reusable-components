import ComponentCard from "../ComponentCard.jsx";
import Tabs from "../tabs/Tabs.jsx";

const tabs = [
    {
        label: "Overview",
        value: "overview",
        children: "Overview Content"
    },
    {
        label: "Analytics",
        value: "analytics",
        children: "Analytics Content"
    },
    {
        label: "Reporting",
        value: "reporting",
        children: "Report Content"
    },
    {
        label: "Settings",
        value: "settings",
        children: "Settings Content"
    }
];

const TabsComponentCard = () => {
    return (
        <ComponentCard title="Tabs">
            <Tabs tabs={tabs} />
        </ComponentCard>
    );
}

export default TabsComponentCard;