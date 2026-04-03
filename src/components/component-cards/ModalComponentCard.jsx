import ComponentCard from "../ComponentCard.jsx";
import Modal from "../modal/Modal.jsx";

const ModalComponentCard = () => {
    return (
        <ComponentCard title="Modal">
            <Modal title="Modal Title">
                <h1>hi there</h1>
            </Modal>
        </ComponentCard>
    );
}

export default ModalComponentCard;