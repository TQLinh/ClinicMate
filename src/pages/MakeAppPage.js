import React from "react";
import { fakeListMakeApp } from "../common/data/datafaker";
import Button from "../components/button/Button";
import HomeHeader from "../module/home/HomeHeader";

const MakeAppPage = () => {
  return (
    <div>
      <HomeHeader />

      <div className="max-w-[1156px] mx-auto mt-[5rem]">
        <h3 className="text-[5.6rem] font-semibold text-gradient">
          Make appointments
        </h3>

        <div className="mt-[3rem]">
          {fakeListMakeApp.length > 0 &&
            fakeListMakeApp.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-[2.5rem_5.6rem] items-center flex rounded-[1.6rem] shadow-lg"
                >
                  <div className="text-center border-r-[0.15rem] text-gradient pr-[3.5rem] border-grayborder">
                    <div>February</div>
                    <div className="font-bold">13th</div>
                  </div>
                  <div className="flex justify-between items-center flex-1 ml-[3.5rem]">
                    <div className="flex flex-col">
                      <h3 className="text-[2rem] font-semibold text-subhead whitespace-nowrap">
                        {item.title}
                      </h3>
                      <span className="text-[1.4rem] text-gray2">
                        {item.name}
                      </span>
                      <span className="text-[1.4rem] text-gray2">
                        {item.hospital}
                      </span>
                      <time className="text-warning text-[1.4rem]">9:15</time>
                    </div>
                    <div>
                      <Button type={"button"} className="!rounded-[0.8rem]">
                        View Report
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MakeAppPage;
