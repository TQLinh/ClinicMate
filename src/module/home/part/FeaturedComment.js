import React from "react";
import startImg from "../../../Images/Star.png";
const listCmt = [
  {
    id: 1,
    comment:
      "“Fast application, useful and secure linking feature to look up examination history”",
    avatar:
      "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
    fullname: "Ms. Tam Anh Le",
  },
  {
    id: 2,
    comment: "“Easy appointment. Smart application and utility for users”",
    avatar:
      "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
    fullname: "Mrs. Cam Tu Nguyen",
  },
  {
    id: 3,
    comment: "“Very convenient. Save a lot of time. Simple but effective”",
    avatar:
      "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
    fullname: "Mr. Quoc Phu Bui",
  },
  {
    id: 4,
    comment:
      "“Beautiful interface. Waiting for the next versions. Thanks ClinicMate”",
    avatar:
      "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
    fullname: "Ms. Ha My Nguyen",
  },
];
const FeaturedComment = () => {
  return (
    <div className="grid grid-cols-2 gap-10 py-[20px]">
      {listCmt.length > 0 &&
        listCmt?.map((item) => {
          return (
            <div
              className="p-[32px] bg-white shadow-xl mt-[100px] flex flex-col gap-8 rounded-[32px]"
              key={item.id}
            >
              <span className="font-light italic text-[20px] text-black2">
                {item.comment}
              </span>
              <div className="flex items-center gap-4">
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
                  <img src={item.avatar} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-gradient text-[20px]">
                    {item.fullname}
                  </span>
                  <div className="flex items-center gap-[2px]">
                    {new Array(5).fill(0).map((item, index) => {
                      return (
                        <div key={index} className="w-[19px] h-[19px]">
                          <img src={startImg} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FeaturedComment;
