import ComponentCard from "../ComponentCard.jsx";
import Accordion from "../accordion/Accordion.jsx";

const data = [
    {
        value: "notifications",
        title: "NotificationProvider Settings",
        description:
            "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
    },
    {
        value: "privacy",
        title: "Privacy & Security",
        description:
            "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
    },
    {
        value: "billing",
        title: "Billing & Subscription",
        description:
            "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
    },
];

const AccordionComponentCard = () => {
    return (
        <ComponentCard title="Collapsible Panel">
            <Accordion
                defaultValue="billing"
                data={data}
                className="max-w-100"
            />
        </ComponentCard>
    );
}

export default AccordionComponentCard;