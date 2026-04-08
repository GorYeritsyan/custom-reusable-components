import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

import { useNotification } from "./NotificationProvider.jsx";
import Button from "../components/button/Button.jsx";
import NotificationTimer from "./NotificationTimer.jsx";

const Notification = ({ notification, duration = 3000 }) => {
    const { removeNotification, notifications } = useNotification();

    useEffect(() => {
        // Auto remove notification after 4 seconds
        setTimeout(() => removeNotification(notification.id), duration);
    }, [notifications]);

    return (
        <div className="flex relative items-start gap-3 bg-white border border-zinc-300 rounded-lg shadow-md shadow-zinc-300 px-4 py-3 min-w-75 w-fit">
            {notification?.icon}
            <div className="flex flex-col gap-0.5 w-full">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">
                        {notification.title}
                    </h3>

                    <Button variant="ghost" size="icon-sm" className="rounded-md p-1" onClick={() => removeNotification(notification.id)}>
                        <FaXmark />
                    </Button>
                </div>

                {notification?.description && (
                    <p className="text-zinc-500 font-medium">{notification?.description}</p>
                )}

                <NotificationTimer duration={duration} />
            </div>
        </div>
    );
}

export default Notification;