import ComponentCard from "../ComponentCard.jsx";
import Empty from "../empty/Empty.jsx";

const EmptyComponentCard = () => {
    return (
        <ComponentCard title="Empty State">
            <Empty
                title="No Notifications"
                description="You're all caught up. New notifications will appear here."
            />
        </ComponentCard>
    );
}

export default EmptyComponentCard;