import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import avatarDoctor from "../../Images/avatar.png";
import PopupDoctor from "../propup/PopupDoctor";
const listDoctor = [
  { id: 1, doctor: "Dental", avatar: avatarDoctor },
  { id: 2, doctor: "General suraery ", avatar: avatarDoctor },
  { id: 3, doctor: "Dematology", avatar: avatarDoctor },
  { id: 4, doctor: "Endocrinology", avatar: avatarDoctor },
  { id: 5, doctor: "Cardiology", avatar: avatarDoctor },
  { id: 6, doctor: "test ", avatar: avatarDoctor },
  { id: 7, doctor: "test ", avatar: avatarDoctor },
  { id: 8, doctor: "test ", avatar: avatarDoctor },
  { id: 9, doctor: "test ", avatar: avatarDoctor },
  { id: 10, doctor: "test ", avatar: avatarDoctor },
  { id: 11, doctor: "test ", avatar: avatarDoctor },
];
const CreatePortalDoctor = ({ visible, onClose, handleClose }) => {
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
              <PopupDoctor
                listData={listDoctor}
                handleClose={onClose}
                header="Doctor list"
                describe="Select a Doctor"
              ></PopupDoctor>
            </div>
          </div>,
          document.body
        )
      }
    </CSSTransition>
  );
};

export default CreatePortalDoctor;
