import ComponentCard from "../ComponentCard.jsx";
import Button from "../button/Button.jsx";
import { useNotification } from "../../notification/NotificationProvider.jsx";

const NotificationComponentCard = () => {
    const { notification } = useNotification();

    function showNotification(position, variant) {
        notification({
            title: "Notifications Title",
            description: "Notifications description",
            position,
            variant,
        });
    }

    return (
        <ComponentCard title="Notification">
            <Button className="bg-green-200 hover:bg-green-300 text-green-700" onClick={() => showNotification("top-right", "success")}>
                Success
            </Button>
            <Button variant="danger" onClick={() => showNotification("top-right", "error")}>
                Error
            </Button>
            <Button className="bg-blue-100 hover:bg-blue-200 text-blue-600" onClick={() => showNotification("top-right", "warning")}>
                Warning
            </Button>

            <Button variant="outline" onClick={() => showNotification("top-left", "success")}>Top Left</Button>
            <Button variant="outline" onClick={() => showNotification("top", "error")}>Top</Button>
            <Button variant="outline" onClick={() => showNotification("top-right", "warning")}>Top Right</Button>
            <Button variant="outline" onClick={() => showNotification("bottom-left")}>Bottom Left</Button>
            <Button variant="outline" onClick={() => showNotification("bottom")}>Bottom</Button>
            <Button variant="outline" onClick={() => showNotification("bottom-right")}>Bottom Right</Button>

        </ComponentCard>
    );
}

export default NotificationComponentCard;