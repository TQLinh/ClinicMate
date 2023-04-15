import React from "react";
import ButtonIcon from "../../../components/button/ButtonIcon";
import IconRight from "../../../icon/IconRight";

const SelectCard = ({ icon, title, describe, onClick, styleIcon }) => {
  return (
    <div className="p-[32px] rounded-[24px] shadow-lg flex-1">
      <div
        className={`flex items-center justify-center rounded-full bg-opacity-20 w-[8rem] h-[8rem] ${styleIcon}`}
      >
        {icon}
      </div>
      <div className="mt-[2.4rem]">
        <h4 className="font-medium text-[2.4rem] text-black1">
          {title || "title"}
        </h4>
        <span className="mt-[1.2rem] text-[1.4rem] text-textColor2">
          {describe}
        </span>
      </div>
      <ButtonIcon
        onClick={onClick}
        className="mt-[2.4rem] w-full justify-center"
        iconRight={<IconRight />}
      >
        Select
      </ButtonIcon>
    </div>
  );
};

export default SelectCard;
