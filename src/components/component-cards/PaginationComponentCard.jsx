import { useState } from "react";
import ComponentCard from "../ComponentCard.jsx";
import Pagination from "../../pagination/Pagination.jsx";

const PaginationComponentCard = () => {
    const [page, setPage] = useState(1);

    function handlePageChange(nextPage) {
        setPage(nextPage);
    }

    return (
        <ComponentCard title="Pagination">
            <Pagination currentPage={page} onChangePage={handlePageChange} totalPages={10} />
            <Pagination currentPage={page} onChangePage={handlePageChange} totalPages={10} isEllipsis={false} />
        </ComponentCard>
    );
}

export default PaginationComponentCard;