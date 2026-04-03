import { useModal } from "./Modal.jsx";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import ModalClose from "./ModalClose.jsx"

const ModalContent = ({ children, title, description, showCloseButton = true }) => {
    const { isModalOpen, closeModal } = useModal();

    function handleCloseModal(e) {
        if (e.target.id === "modal") {
            closeModal();
        }
    }

    if (!isModalOpen) return;

    return (
        createPortal((
            <div id="modal" onClick={handleCloseModal} className="fixed top-0 size-full bg-gray-500/40 flex items-center justify-center backdrop-blur-xs">
                <div className="relative min-w-110 max-w-120 px-5 py-3 overflow-y-auto bg-white rounded-lg ring ring-gray-400 shadow-sm shadow-gray-300 space-y-2">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="font-medium truncate text-wrap">{description}</p>
                        </div>

                        {showCloseButton && (
                            <ModalClose variant="ghost" size="icon-sm">
                                <FaXmark />
                            </ModalClose>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        {children}
                    </div>
                </div>
            </div>
        ), document.body)
    );
}

export default ModalContent;