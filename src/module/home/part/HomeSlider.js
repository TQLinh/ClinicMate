import React from "react";
import Slider from "react-slick";
import {
  ArrowNextSlider,
  ArrowPrevSlider,
} from "../../../components/ArrowSlider/ArrowSlider";
const arrSlider = [
  {
    url: "https://png.pngtree.com/thumb_back/fw800/back_pic/03/69/56/2357b5179649523.jpg",
  },
  {
    url: "https://png.pngtree.com/thumb_back/fw800/background/20191207/pngtree-white-christmas-background-with-3d-white-balls-glass-spheres-round-shapes-image_323487.jpg",
  },
  {
    url: "https://www.shutterstock.com/image-vector/new-year-background-white-spruce-260nw-745112284.jpg",
  },
  {
    url: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-trang-dep-cho-may-tinh-dien-thoai-1.jpg",
  },
  {
    url: "https://img.freepik.com/premium-photo/abstract-white-lines-background-minimal-dynamic-shape-3d-rendering_224530-2016.jpg",
  },
];
const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplaySpeed: 4000,
    nextArrow: <ArrowNextSlider />,
    prevArrow: <ArrowPrevSlider />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="home-slider">
      <Slider {...settings}>
        {arrSlider.length > 0 &&
          arrSlider.map((item, index) => {
            return (
              <div key={index} className="w-full h-[420px]">
                <img className="object-cover" src={item.url} alt="" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default HomeSlider;
