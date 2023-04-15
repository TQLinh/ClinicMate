import IconClose from "../../icon/IconClose";
import IconSearch from "../../icon/IconSearch";
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
const Popup = ({ header, describe, handleClose }) => {
  return (
    <div className="p-[3.2rem_7.4rem] rounded-[1.6rem] bg-white">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[3.2rem] text-black1 font-semibold">{header}</h3>{" "}
        <span onClick={handleClose} className="cursor-pointer">
          <IconClose></IconClose>
        </span>
      </div>
      <span className="mt-[0.8rem] text-[#8D8B8B]">{describe}</span>
      <div className="mt-[3.3rem]">
        <div className="p-[1.4rem_2.5rem] border border-[#8D8B8B] relative rounded-[0.8rem]">
          <input
            className="ml-[5rem] "
            placeholder="Search specialties"
            type="search"
          />
          <div className="absolute top-2/4 left-[2.4rem] -translate-y-2/4">
            <IconSearch></IconSearch>{" "}
          </div>
        </div>
        <div className="overflow-auto gap-[0.8rem] max-h-[40rem] mt-[2.4rem]">
          {list.length > 0 &&
            list.map((item) => {
              return (
                <div
                  key={item.id}
                  className="shadow-md font-semibold text-[2rem] p-[2.7rem_4.7rem] rounded-[1.6rem] cursor-pointer"
                >
                  {item.specialty}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Popup;
