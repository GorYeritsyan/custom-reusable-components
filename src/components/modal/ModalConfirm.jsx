import { useModal } from "./Modal.jsx";
import Button from "../button/Button.jsx";

const ModalConfirm = ({ children, onClick, variant, ...props}) => {
    const { closeModal } = useModal();

    function handleConfirmClick() {
        onClick();
        closeModal();
    }

    return (
        <Button onClick={handleConfirmClick} variant={variant} {...props}>
            {children}
        </Button>
    );
}

export default ModalConfirm;