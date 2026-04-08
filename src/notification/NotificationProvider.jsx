import { createContext, useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark, FaTriangleExclamation } from "react-icons/fa6";

const NotificationContext = createContext(null);

const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [position, setPosition] = useState("top-right");

    function notification({ title, description, position, variant }) {
        const notificationId = crypto.randomUUID();
        let icon;

        switch (variant) {
            case "success":
                icon = <FaCheckCircle className="size-6 text-green-600" />;
                break;

            case "error":
                icon = <FaCircleXmark className="size-6 text-red-600" />;
                break;

            case "warning":
                icon = <FaTriangleExclamation className="size-6 text-blue-600" />;
                break;
        }

        setNotifications(prev => [{ id: notificationId, title, description, icon, position }, ...prev]);
        setPosition(position);
    }

    function removeNotification(id) {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    }

    return (
        <NotificationContext.Provider value={{ notification, removeNotification, position, notifications }}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotification = () => {
    const context = useContext(NotificationContext);

    if (!context) throw new Error("useNotification must be used within NotificationProvider");

    return context;
}

export default NotificationProvider;