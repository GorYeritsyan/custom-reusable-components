import { FaAngleRight } from "react-icons/fa6";
import Button from "../components/button/Button.jsx";


const PaginationNextButton = ({ totalPages, onIncrementPage, currentPage }) => {

    return (
        <Button
            variant="ghost"
            disabled={currentPage === totalPages}
            onClick={onIncrementPage}
        >
            Next
            <FaAngleRight />
        </Button>
    )
}

export default PaginationNextButton;