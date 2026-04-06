import {useNotification} from "./NotificationProvider.jsx";
import Notification from "./Notification.jsx";
import {cn} from "../utils/index.js";

const notificationConfig = {
    positions: {
        ["top-left"]: "top-4 left-4",
        top: "top-4 left-1/2 -translate-x-1/2",
        ["top-right"]: "top-4 right-4",

        ["bottom-left"]: "bottom-4 left-4",
        bottom: "bottom-4 left-1/2 -translate-x-1/2",
        ["bottom-right"]: "bottom-4 right-4",
    }
}

const Notifications = () => {
    const { notifications, position = "top-left" } = useNotification();

    if (notifications.length === 0) return;

    return (
        <div className={cn("fixed z-1 flex flex-col gap-2", notificationConfig?.positions?.[position])}>
            {notifications.map(notification => (
                <Notification key={notification.id} notification={notification} />
            ))}
        </div>
    );
}

export default Notifications;