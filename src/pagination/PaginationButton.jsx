import Button from "../components/button/Button.jsx";

const PaginationButton = ({ currentPage, page, onChangePage }) => {
    return (
        <Button
            size="icon"
            onClick={() => onChangePage(page)}
            variant={currentPage === page ? "outline" : "ghost"}
        >
            {page}
        </Button>
    );
}

export default PaginationButton;
