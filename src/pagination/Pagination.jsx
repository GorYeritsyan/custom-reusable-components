import PaginationPrevButton from "./PaginationPrevButton.jsx";
import PaginationButton from "./PaginationButton.jsx";
import Button from "../components/button/Button.jsx";
import PaginationNextButton from "./PaginationNextButton.jsx";


const Pagination = ({ currentPage= 1, onChangePage, totalPages = 10 }) => {
    const offset = 1;
    const centerOffsetLength = offset * 2 + 1;

    // Pagination start length is startOffset
    const paginationCenter = Array.from({ length: centerOffsetLength })
        .map((_, i) => currentPage - offset + i)
        .filter(page => page > 0 && page <= totalPages);

    function incrementPage() {
        onChangePage(currentPage + 1);
    }

    function decrementPage() {
        onChangePage(currentPage - 1);
    }

    return (
        <>
            {totalPages > 1 && (
                <div className="flex gap-4 items-center justify-center">
                    {currentPage > 1 && (
                        <PaginationPrevButton onDecrementPage={decrementPage} />
                    )}

                    {/* Pagination start buttons */}
                    {currentPage > offset * 2 && (
                        <PaginationButton currentPage={currentPage} onChangePage={onChangePage} page={1} />
                    )}

                    {currentPage > centerOffsetLength && <Button readOnly variant="ghost">...</Button>}

                    {/* Pagination center buttons */}
                    {paginationCenter.map((page, index) => (
                        <PaginationButton currentPage={currentPage} onChangePage={onChangePage} key={index} page={page} />
                    ))}

                    {currentPage < (totalPages - 2 * offset) && (
                        <Button readOnly variant="ghost">...</Button>
                    )}

                    {/* Pagination end buttons */}
                    {currentPage < totalPages - offset && (
                        <PaginationButton currentPage={currentPage} onChangePage={onChangePage} page={totalPages} />
                    )}

                    {currentPage < totalPages && (
                        <PaginationNextButton onIncrementPage={incrementPage} totalPages={totalPages} />
                    )}
                </div>
            )}
        </>
    );
}

export default Pagination;