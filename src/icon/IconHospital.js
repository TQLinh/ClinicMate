import React from "react";

const IconHospital = () => {
  return (
    <svg
      width={62}
      height={62}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_1_411)">
        <circle cx={31} cy={27} r={12} fill="url(#paint0_linear_1_411)" />
      </g>
      <rect
        x="28.3911"
        y="20.2174"
        width="5.21739"
        height="13.5652"
        rx="0.782609"
        fill="white"
      />
      <rect
        x="37.7825"
        y="24.3912"
        width="5.21739"
        height="13.5652"
        rx="0.782609"
        transform="rotate(90 37.7825 24.3912)"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_di_1_411"
          x={0}
          y={0}
          width={62}
          height={62}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0862745 0 0 0 0 0.470588 0 0 0 0 0.94902 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_411"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_411"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1_411"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_411"
          x1="17.1317"
          y1="5.58823"
          x2="71.6783"
          y2="11.4568"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A8EF6" />
          <stop offset={1} stopColor="#6F3AFA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconHospital;
