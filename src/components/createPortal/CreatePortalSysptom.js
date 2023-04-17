import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Popup from "../propup/Popup";
const list = [
  { id: 1, specialty: "Dental" },
  { id: 2, specialty: "General suraery " },
  { id: 3, specialty: "Dematology" },
  { id: 4, specialty: "Endocrinology" },
  { id: 5, specialty: "Cardiology" },
  { id: 6, specialty: "test " },
  { id: 7, specialty: "test " },
  { id: 8, specialty: "test " },
  { id: 9, specialty: "test " },
  { id: 10, specialty: "test " },
  { id: 11, specialty: "test " },
];
const CreatePortalSysptom = ({ visible, onClose, handleClose }) => {
  return (
    <CSSTransition
      in={visible}
      timeout={200}
      unmountOnExit
      classNames="my-node"
    >
      {(state) =>
        createPortal(
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-5  ${
              visible ? "" : "opacity-0 invisible"
            }`}
          >
            <div
              className="absolute inset-0 bg-black1 bg-opacity-40 overlay"
              onClick={handleClose}
            ></div>
            <div className="bg-white z-50 p-[2rem_3rem] shadow-md content absolute rounded-lg max-w-[70rem] w-full">
              <Popup
                listData={list}
                handleClose={onClose}
                header="Symptom list"
                describe="Choose a symptom"
              ></Popup>
            </div>
          </div>,
          document.body
        )
      }
    </CSSTransition>
  );
};

export default CreatePortalSysptom;
