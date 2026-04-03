import ComponentCard from "../ComponentCard.jsx";
import Spinner from "../spinner/Spinner.jsx";

const SpinnerComponentCard = () => {
    return (
        <ComponentCard title="Loading Spinner">
            <Spinner size="lg" />
        </ComponentCard>
    );
}

export default SpinnerComponentCard;