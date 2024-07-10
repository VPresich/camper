import { useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsStack } from "../../../redux/modals/selectors";
import { addModal, removeModal } from "../../../redux/modals/slice";
import ReactDOM from "react-dom";

import css from "./ModalWrapper.module.css";
import iconsPath from "../../../assets/img/icons.svg";

const ModalWrapper = ({ children, onClose, portalId = "portal-root" }) => {
  const dispatch = useDispatch();

  const modalStack = useSelector(selectModalsStack);
  const wrapperRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      event.stopPropagation();
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleDocumentKeyDown = useCallback(
    (event) => {
      if (
        event.key === "Escape" &&
        modalStack[modalStack.length - 1] === portalId
      ) {
        onClose();
      }
    },
    [onClose, modalStack, portalId]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [handleDocumentKeyDown]);

  useEffect(() => {
    dispatch(addModal(portalId));
    return () => {
      dispatch(removeModal());
    };
  }, [dispatch, portalId]);

  return ReactDOM.createPortal(
    <div className={css.modalWrapper} onClick={handleClickOutside}>
      <div
        className={css.modal}
        ref={wrapperRef}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
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
    </div>,
    document.getElementById(portalId)
  );
};

export default ModalWrapper;
