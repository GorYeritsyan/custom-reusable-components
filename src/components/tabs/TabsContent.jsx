const TabsContent = ({ children, value, activeTab }) => {
    if (activeTab !== value) return;

    return (
        <div className="font-medium">
            {children}
        </div>
    );
}

export default TabsContent;