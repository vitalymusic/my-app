'use client';
import React from "react";
import Slider from "react-slick";


import Image from 'next/image'

export default function MySlider() {
 const items = [
    { label: "Mountain", image: "https://picsum.photos/id/1015/300/180" },
    { label: "Forest", image: "https://picsum.photos/id/1011/300/180" },
    { label: "City", image: "https://picsum.photos/id/1012/300/180" },
    { label: "River", image: "https://picsum.photos/id/1016/300/180" },
    { label: "Beach", image: "https://picsum.photos/id/1013/300/180" },
    { label: "Road", image: "https://picsum.photos/id/1020/300/180" },
    { label: "Bridge", image: "https://picsum.photos/id/1035/300/180" },
    { label: "Snow", image: "https://picsum.photos/id/1041/300/180" },
    { label: "Sunset", image: "https://picsum.photos/id/1069/300/180" },
    { label: "Lake", image: "https://picsum.photos/id/1056/300/180" }
  ];



 const settings = {
    className: "center",
    dots:true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <Slider {...settings}>
      
        {items.map((item, i)=>{
         return (
          <div key={i}>
            <h3>{item.label}</h3>
             <Image
            src={item.image}
            width={500}
            height={500}
            alt="Picture of the author"
            loading="lazy"
            // priority = {true}
          />
          </div>
          )
        })}
    </Slider>
  );
}