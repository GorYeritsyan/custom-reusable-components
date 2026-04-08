import { useModal } from "./Modal.jsx";
import Button from "../button/Button.jsx";

const ModalClose = ({ children, variant, size }) => {
    const { closeModal } = useModal();

    return (
        <Button variant={variant} size={size} onClick={closeModal}>
            {children}
        </Button>
    );
}

export default ModalClose;