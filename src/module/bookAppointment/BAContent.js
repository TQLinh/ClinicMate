import React, { useState } from "react";
import Header from "../../components/header/Header";
import IconSpecialty from "../../icon/IconSpecialty";
import SelectCard from "./part/SelectCard";
import IconClinic from "../../icon/IconClinic";
import IconDoctor from "../../icon/IconDoctor";
import ButtonIcon from "../../components/button/ButtonIcon";
import IconCal from "../../icon/IconCal";
import Calendar from "react-calendar";
import CreatePortalSpecialty from "../../components/createPortal/CreatePortalSpecialty";

const hoursList = [
  {
    id: 1,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 2,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 3,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 4,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 5,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 6,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 7,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 8,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 9,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 10,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 11,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 12,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 13,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 14,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 15,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 16,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 17,
    from: "09h00AM",
    to: "09h00AM",
  },
  {
    id: 18,
    from: "09h00AM",
    to: "09h00AM",
  },
];
const BAContent = () => {
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  return (
    <div className="max-w-[1156px] mx-auto mt-[8rem]">
      <CreatePortalSpecialty
        open={show}
        onClose={() => setShow(false)}
        visible={show}
        handleClose={() => setShow(false)}
      ></CreatePortalSpecialty>
      <h3 className="text-[32px] font-semibold">Appointment</h3>
      <Header number={1}>Select appointment details</Header>
      <div className="flex items-center gap-[59px] justify-between mt-[2.4rem]">
        <SelectCard
          onClick={() => setShow(true)}
          styleIcon="text-[#855FCE] bg-[#855FCE]"
          icon={<IconSpecialty />}
          title="Specialty"
          describe="Select a Specialty"
        ></SelectCard>
        <SelectCard
          styleIcon="text-[#27AE60] bg-[#27AE60]"
          icon={<IconClinic />}
          title="Clinic"
          describe="Select a Clinic"
        ></SelectCard>
        <SelectCard
          styleIcon="text-[#2F80ED] bg-[#2F80ED]"
          icon={<IconDoctor />}
          title="Doctor"
          describe="Select a doctor"
        ></SelectCard>
      </div>
      <div className="mt-[18rem] gap-[80px] flex justify-between">
        <div className="flex-1">
          <Header number={2}>Select a data</Header>
          <div className="p-[3.8rem_4.3rem] shadow-lg rounded-[24px] mt-[3.8rem]">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
        <div className="flex-1">
          <Header number={3}>Select a time</Header>
          <div className="p-[3.8rem_4.3rem] shadow-lg flex flex-wrap gap-x-[1rem] gap-y-[0.17rem] rounded-[24px] mt-[3.8rem]">
            {hoursList.length > 0 &&
              hoursList.map((item) => {
                return (
                  <div
                    className={`p-[1.4rem_1.6rem] cursor-pointer border rounded-[0.8rem] border-textColor2 ${
                      item.id === 2
                        ? "bg-gradient-to-tr from-gradientLeft to-gradientRight text-white"
                        : ""
                    }`}
                    key={item.id}
                  >
                    <span>{item.from}</span> - <span>{item.to}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="pb-[6.4rem]">
        <ButtonIcon
          iconLeft={<IconCal />}
          className="!rounded-[1.6rem] p-[1.6rem_4rem] w-max mt-[2.5rem] "
          onClick={() => {
            console.log("hi");
          }}
        >
          Book appointment
        </ButtonIcon>
      </div>
    </div>
  );
};

export default BAContent;
