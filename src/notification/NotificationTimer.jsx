const NotificationTimer = ({ duration }) => {
    return (
        <div className="absolute bottom-0 left-0 w-full h-0.75 flex items-center justify-start rounded-b-lg overflow-x-hidden">
            <div
                className="bg-blue-500 h-full animate-progress"
                style={{ animationDuration: `${Math.floor(duration/1000)}s` }}
            />
        </div>
    );
}

export default NotificationTimer;