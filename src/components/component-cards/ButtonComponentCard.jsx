import ComponentCard from "../ComponentCard.jsx";
import Button from "../button/Button.jsx";

const ButtonComponentCard = () => {
    return (
        <ComponentCard title="Button">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="link">Link</Button>
        </ComponentCard>
    );
}

export default ButtonComponentCard;