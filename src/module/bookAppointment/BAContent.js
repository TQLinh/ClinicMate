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
import InputInfo from "../../components/input/InputInfo";
import IconPen from "../../icon/IconPen";
import IconPhone from "../../icon/IconPhone";
import IconBirthday from "../../icon/IconBirthday";
import IconGender from "../../icon/IconGender";
import IconDown from "../../icon/IconDown";
import Booking from "../../components/booking/Booking";
import IconPolyclinicvl from "../../icon/IconPolyclinicvl";
import IconDoctorvl from "../../icon/IconDoctorvl";
import IconSysptomvl from "../../icon/IconSysptomvl";
import IconSysptom from "../../icon/IconSysptom";
import CreatePortalSysptom from "../../components/createPortal/CreatePortalSysptom";
import CreatePortalDoctor from "../../components/createPortal/CreatePortalDoctor";

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
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
  };
  const [show, setShow] = useState(false);
  const [showSysptom, setShowSysptom] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  return (
    <div className="max-w-[1156px] mx-auto mt-[8rem]">
      <CreatePortalSpecialty
        open={show}
        onClose={() => setShow(false)}
        visible={show}
        handleClose={() => setShow(false)}
      ></CreatePortalSpecialty>
      <CreatePortalSysptom
        open={showSysptom}
        onClose={() => setShowSysptom(false)}
        visible={showSysptom}
        handleClose={() => setShowSysptom(false)}
      ></CreatePortalSysptom>
      <CreatePortalDoctor
        open={showDoctor}
        onClose={() => setShowDoctor(false)}
        visible={showDoctor}
        handleClose={() => setShowDoctor(false)}
      ></CreatePortalDoctor>
      <h3 className="text-[32px] font-semibold text-gradient">Appointment</h3>
      <div className="mt-[10rem]">
        <Header number={1}>Booking person information</Header>
        <div className="mt-[4.4rem]">
          <div className="grid grid-cols-2 gap-x-[12.2rem] gap-y-[3rem]">
            <InputInfo icon={<IconPen />} placeholder="Your name"></InputInfo>
            <InputInfo
              icon={<IconPhone />}
              placeholder="Your phone"
            ></InputInfo>
            <InputInfo
              icon={<IconBirthday />}
              placeholder="Your Birthday"
            ></InputInfo>
            <div className="relative flex gap-[2.4rem] py-[1.6rem] items-center border-b border-grayborder">
              <span>
                <IconGender />
              </span>
              <div className="flex gap-[3.3rem] items-center">
                <div className="flex items-center gap-[0.8rem]">
                  <input
                    className="w-[1.6rem] h-[1.6rem]"
                    type="checkbox"
                    checked={selectedCheckbox === "male"}
                    onChange={handleCheckboxChange}
                    name="gender"
                    value="male"
                    id="male"
                  />
                  <label htmlFor="male" className="font-semibold">
                    {" "}
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-[0.8rem]">
                  <input
                    id="female"
                    className="w-[1.6rem] h-[1.6rem]"
                    type="checkbox"
                    checked={selectedCheckbox === "female"}
                    onChange={handleCheckboxChange}
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="female" className="font-semibold">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[0.8rem]">
              <input
                id="foreigner"
                className="w-[1.6rem] h-[1.6rem]"
                type="checkbox"
                name="gender"
                value="foreigner"
              />
              <label htmlFor="foreigner" className="font-semibold">
                Book for a foreigner
              </label>
            </div>
          </div>
        </div>
      </div>
      <Header number={2} className="mt-[6.4rem]">
        Appointment information
      </Header>
      <div className="mt-[4.4rem]">
        <div className="flex items-center justify-between border border-grayborder p-[1.9rem_2.4rem] rounded-[1.6rem]">
          <div className="flex items-center gap-[1.6rem]">
            <span className="text-black1">
              <IconClinic />
            </span>
            <span className="text-gradient font-bold text-[1.8rem]">
              Choose place
            </span>
          </div>
          <span>
            <IconDown></IconDown>{" "}
          </span>
        </div>
      </div>
      <h4 className="text-[1.8rem] my-[3.2rem]">
        Preferred method booking <span className="text-error">*</span>
      </h4>
      <div className="flex items-center gap-[59px] justify-between">
        <SelectCard
          styleIcon="text-[#27AE60] bg-[#27AE60]"
          icon={<IconSysptom />}
          title="Sysptom"
          describe="Select a Sysptom"
          onClick={() => setShowSysptom(true)}
        ></SelectCard>
        <SelectCard
          onClick={() => setShow(true)}
          styleIcon="text-[#855FCE] bg-[#855FCE]"
          icon={<IconSpecialty />}
          title="Specialty"
          describe="Select a Specialty"
        ></SelectCard>

        <SelectCard
          onClick={() => setShowDoctor(true)}
          styleIcon="text-[#2F80ED] bg-[#2F80ED]"
          icon={<IconDoctor />}
          title="Doctor"
          describe="Select a doctor"
        ></SelectCard>
      </div>
      <div className="mt-[3.2rem] shadow-md p-[3.6rem_2.6rem] rounded-[3.2rem]">
        <div className="grid grid-cols-3 gap-[4rem]">
          <Booking icon={<IconSysptomvl />} value="Alzheimer"></Booking>
          <Booking icon={<IconPolyclinicvl />} value="Polyclinic"></Booking>
          <Booking
            icon={<IconDoctorvl />}
            value="Dr. Nguyen Hung"
          ></Booking>{" "}
        </div>
        <div className="mt-[2.4rem] text-[1.8rem] gap-[10.4rem] flex justify-end font-bold">
          <span className="text-gradient">Estimated examination fee</span>
          <span className="text-warning">300.000đ</span>
        </div>
      </div>
      <div className="mt-[6.4rem] gap-[80px] flex justify-between">
        <div className="flex-1">
          <Header number={3}>Select a data</Header>
          <div className="p-[3.8rem_4.3rem] shadow-lg date_picker rounded-[24px] mt-[3.8rem]">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
        <div className="flex-1">
          <Header number={4}>Select a time</Header>
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
      <div className="mt-[6.4rem] ">
        <Header number={5}>Select a time</Header>
        <div className="flex gap-[3rem] mt-[4.4rem] shadow-md rounded-[2.4rem] p-[2.8rem_3.2rem]">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2808 19.3922L20.1557 10.5173C18.6625 9.89388 17.3065 8.98305 16.1646 7.83658C15.0176 6.69448 14.1064 5.338 13.4827 3.84433L4.60783 12.7192C3.91545 13.4116 3.56867 13.7584 3.27108 14.14C2.91962 14.5903 2.61825 15.0775 2.37231 15.5931C2.16472 16.0299 2.00992 16.4955 1.70033 17.4242L0.0659923 22.3237C-0.00922858 22.548 -0.0203887 22.7889 0.033766 23.0192C0.0879207 23.2495 0.205244 23.4601 0.372547 23.6275C0.53985 23.7948 0.750502 23.9121 0.980824 23.9662C1.21115 24.0204 1.45201 24.0092 1.67633 23.934L6.57576 22.2997C7.50573 21.9901 7.97011 21.8353 8.40689 21.6277C8.92288 21.3817 9.41006 21.0805 9.86004 20.7289C10.2416 20.4313 10.5884 20.0845 11.2808 19.3922ZM22.618 8.05498C23.5029 7.17009 24 5.96992 24 4.7185C24 3.46707 23.5029 2.26691 22.618 1.38202C21.7331 0.497126 20.5329 9.32383e-09 19.2815 0C18.0301 -9.32383e-09 16.8299 0.497126 15.945 1.38202L14.8807 2.44638L14.9263 2.57957C15.4508 4.08038 16.3091 5.44255 17.4366 6.56343C18.591 7.72463 20.0008 8.59989 21.5536 9.11934L22.618 8.05498Z"
                fill="black"
              />
            </svg>
          </span>
          <textarea
            className="w-full h-[24rem]"
            name=""
            id=""
            placeholder="Detailed description your symptoms or your needs "
          ></textarea>
        </div>
      </div>
      <div className="pb-[6.4rem]">
        <ButtonIcon
          iconLeft={<IconCal />}
          className="!rounded-[1.6rem] p-[1.6rem_4rem] w-max mt-[6.4rem] "
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
