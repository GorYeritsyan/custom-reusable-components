import { FaAngleLeft } from "react-icons/fa6";
import Button from "../components/button/Button.jsx";

const PaginationPrevButton = ({ onDecrementPage }) => {
    return (
        <Button
            variant="ghost"
            onClick={onDecrementPage}
        >
            <FaAngleLeft />
            Prev
        </Button>
    );
}

export default PaginationPrevButton;