const ComponentCard = ({ children, title }) => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="rounded-lg border border-gray-300 p-5 min-w-115 min-h-60 flex flex-col gap-3 items-center justify-center">
                {children}
            </div>
        </div>
    );
}

export default ComponentCard;