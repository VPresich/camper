import { useRef, useEffect } from "react";
import css from "./ModalWrapper.module.css";
import iconsPath from "../../assets/img/icons.svg";

const ModalWrapper = ({ children, onClose }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleDocumentKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.modalWrapper} onClick={handleClickOutside}>
      <div className={css.modal} ref={wrapperRef}>
        <button className={css.closeBtn} onClick={onClose}>
          <svg
            className={css.icon}
            width="32"
            height="32"
            aria-label="close button icon"
          >
            <use href={`${iconsPath}#icon-x-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
