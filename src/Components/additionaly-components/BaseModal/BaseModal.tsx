import React from "react";
import s from "./BaseModal.module.scss"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return isOpen ? (
        <div className={s.modalOverlay} onClick={handleOverlayClick}>
            <div className={s.modal}>
                <button className={s.modalClose} onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;