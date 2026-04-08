import { createPortal } from "react-dom";
import { useNotification } from "./NotificationProvider.jsx";
import Notification from "./Notification.jsx";
import { cn } from "../utils/index.js";

const notificationConfig = {
    positions: {
        ["top-left"]: "top-4 left-4 flex-col-reverse",
        ["top"]: "top-4 left-1/2 -translate-x-1/2 flex-col-reverse",
        ["top-right"]: "top-4 right-4 flex-col-reverse",

        ["bottom-left"]: "bottom-4 left-4",
        ["bottom"]: "bottom-4 left-1/2 -translate-x-1/2",
        ["bottom-right"]: "bottom-4 right-4",
    }
}

const Notifications = () => {
    const { notifications } = useNotification();

    // Group Notifications by position
    const groupedNotifications = notifications.reduce((acc, notification) => {
        // If there is no notifications for selected position then create array to add notifications
        if (!acc[notification.position]) acc[notification.position] = [];

        // Add notifications for selected position
        acc[notification.position].push(notification);

        return acc;
    }, {});

    const groupedNotificationsArray = Object.entries(groupedNotifications).toSorted();

    if (notifications.length === 0) return;

    return (
        createPortal((
            groupedNotificationsArray.map(([position, groupedNotification]) => (
                <div key={position} className={cn("fixed z-1 flex flex-col gap-2", notificationConfig?.positions?.[position])}>
                    {groupedNotification.map(notification => {
                        return (
                            <Notification key={notification.id} notification={notification} />
                        );
                    })}
                </div>
            ))
        ), document.body)
    );
}

export default Notifications;