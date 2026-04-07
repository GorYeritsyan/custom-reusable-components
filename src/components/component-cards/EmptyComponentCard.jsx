import { FaRegBell } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import ComponentCard from "../ComponentCard.jsx";
import Empty from "../empty/Empty.jsx";
import Button from "../button/Button.jsx";

const EmptyComponentCard = () => {
    return (
        <ComponentCard title="Empty State">
            {/* Custom Empty State */}
            <Empty
                icon={<FaRegBell />}
                title="No Notifications"
                description="You're all caught up. New notifications will appear here."
            >
                <Button variant="outline" size="sm">
                    <BiRefresh className="size-5" />
                    Refresh
                </Button>
            </Empty>

            {/* Default Empty State */}
            {/*<Empty />*/}
        </ComponentCard>
    );
}

export default EmptyComponentCard;