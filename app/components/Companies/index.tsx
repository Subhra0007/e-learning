"use client";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// ======================
// IMAGES DATA FOR CAROUSEL
// ======================
interface Data {
  imgSrc: string;
}

const data: Data[] = [
  { imgSrc: "/assets/carousel/airbnb.svg" },
  { imgSrc: "/assets/carousel/fedex.svg" },
  { imgSrc: "/assets/carousel/google.svg" },
  { imgSrc: "/assets/carousel/hubspot.svg" },
  { imgSrc: "/assets/carousel/microsoft.svg" },
  { imgSrc: "/assets/carousel/walmart.svg" },
  { imgSrc: "/assets/carousel/airbnb.svg" },
  { imgSrc: "/assets/carousel/fedex.svg" },
];

// ======================
// CAROUSEL COMPONENT
// ======================
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      pauseOnHover: false,      // ✅ keeps autoplay running on hover
      pauseOnFocus: false,      // ✅ keeps autoplay running on click
      pauseOnDotsHover: false,  // ✅ keeps autoplay running on dots hover
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="text-center mt-20 mb-10">
        <div className="mx-auto max-w-7xl px-6 ">
          <h2 className="text-midnightblue text-5xl font-semibold">Our Partners</h2>
          <div className="py-14">
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i}>
                  <Image
                    src={item.imgSrc}
                    alt={`partner-${i}`}
                    width={116}
                    height={36}
                    className="mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
