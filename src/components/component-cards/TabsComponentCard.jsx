import ComponentCard from "../ComponentCard.jsx";
import Tabs from "../tabs/Tabs.jsx";
import TabsList from "../tabs/TabsList.jsx";
import TabsTrigger from "../tabs/TabsTrigger.jsx";
import TabsContent from "../tabs/TabsContent.jsx";

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
            {/*<Tabs defaultTab="reports" tabs={tabs}>*/}
            {/*    <TabsList>*/}
            {/*        <TabsTrigger value="overview">*/}
            {/*            Overview*/}
            {/*        </TabsTrigger>*/}

            {/*        <TabsTrigger value="analytics">*/}
            {/*            Analytics*/}
            {/*        </TabsTrigger>*/}

            {/*        <TabsTrigger value="reports">*/}
            {/*            Reports*/}
            {/*        </TabsTrigger>*/}

            {/*        <TabsTrigger value="settings">*/}
            {/*            Settings*/}
            {/*        </TabsTrigger>*/}
            {/*    </TabsList>*/}

            {/*    <TabsContent value="overview">*/}
            {/*        <p>Overview content</p>*/}
            {/*    </TabsContent>*/}

            {/*    <TabsContent value="analytics">*/}
            {/*        <p>Analytics content</p>*/}
            {/*    </TabsContent>*/}

            {/*    <TabsContent value="reports">*/}
            {/*        <p>Reports content</p>*/}
            {/*    </TabsContent>*/}

            {/*    <TabsContent value="settings">*/}
            {/*        <p>Settings content</p>*/}
            {/*    </TabsContent>*/}
            {/*</Tabs>*/}

            <Tabs tabs={tabs} />
        </ComponentCard>
    );
}

export default TabsComponentCard;