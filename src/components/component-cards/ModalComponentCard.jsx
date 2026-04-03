import ComponentCard from "../ComponentCard.jsx";
import Modal from "../modal/Modal.jsx";
import ModalContent from "../modal/ModalContent.jsx";
import ModalTrigger from "../modal/ModalTrigger.jsx";
import ModalClose from "../modal/ModalClose.jsx";
import ModalConfirm from "../modal/ModalConfirm.jsx";

const ModalComponentCard = () => {
    return (
        <ComponentCard title="Modal">
            <Modal>
                {/* Modal Trigger - (Button to open modal) */}
                <ModalTrigger variant="outline">
                    Open Modal
                </ModalTrigger>

                {/* Modal Content - (Modal Itself)*/}
                <ModalContent title="Modal Title" description="Modal description">
                    <p>Modal Content</p>

                    <div className="flex items-center justify-end gap-2 w-full">
                        {/* Button to close Modal */}
                        <ModalClose variant="outline">
                            Close
                        </ModalClose>

                        {/* Button to handle modal confirm and close modal */}
                        <ModalConfirm onClick={() => console.log("clicked")}>
                            Confirm
                        </ModalConfirm>
                    </div>
                </ModalContent>
            </Modal>
        </ComponentCard>
    );
}

export default ModalComponentCard;