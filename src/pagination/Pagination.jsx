import PaginationPrevButton from "./PaginationPrevButton.jsx";
import PaginationButton from "./PaginationButton.jsx";
import Button from "../components/button/Button.jsx";
import PaginationNextButton from "./PaginationNextButton.jsx";

const Pagination = ({ currentPage= 1, onChangePage, visibleButtonsNumber = 10, totalPages = 10, isEllipsis = true }) => {
    const offset = 1;
    const centerOffsetLength = offset * 2 + 1;
    const halfOfVisibleButtons = visibleButtonsNumber / 2;

    const paginationArrayLength = isEllipsis ? centerOffsetLength : visibleButtonsNumber;
    let paginationCenter = Array.from({ length: paginationArrayLength });

    if (isEllipsis) {
        // Pagination start length is startOffset
        paginationCenter = paginationCenter
            .map((_, i) => currentPage - offset + i)
            .filter(page => page > 0 && page <= totalPages);
    } else {
        paginationCenter = paginationCenter
            .map((_, i) => currentPage > halfOfVisibleButtons && currentPage <= totalPages - halfOfVisibleButtons ? (
                currentPage - halfOfVisibleButtons + i
            ) : currentPage >= totalPages - halfOfVisibleButtons ? totalPages - visibleButtonsNumber + i + 1 :  i + 1)
            .filter(page => page > 0 && page <= totalPages);
    }

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
                    {isEllipsis && currentPage > offset * 2 && (
                        <PaginationButton currentPage={currentPage} onChangePage={onChangePage} page={1} />
                    )}

                    {isEllipsis && currentPage > centerOffsetLength && <Button readOnly variant="ghost">...</Button>}

                    {/* Pagination center buttons */}
                    {paginationCenter.map((page, index) => (
                        <PaginationButton currentPage={currentPage} onChangePage={onChangePage} key={index} page={page} />
                    ))}

                    {isEllipsis && currentPage < (totalPages - 2 * offset) && (
                        <Button readOnly variant="ghost">...</Button>
                    )}

                    {/* Pagination end buttons */}
                    {isEllipsis && currentPage < totalPages - offset && (
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