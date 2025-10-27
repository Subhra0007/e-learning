"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// ======================
// CAROUSEL DATA
// ======================
interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc:"/assets/testimonial/image5.svg" ,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/image4.svg",
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/images3.svg",
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/image6.svg",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/image7.svg",
  },
  
];

// ======================
// CAROUSEL COMPONENT
// ======================
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 800,
      cssEase: "linear",
      pauseOnHover: false,      
      pauseOnFocus: false,      
      pauseOnDotsHover: false,  
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
       <div className="mx-auto max-w-7xl px-6">
      <div className="pt-20 " id="testimonial">
       
            <h3 className="mb-5 text-3xl md:text-4xl font-semibold text-gray-900 text-center">Testimonials</h3>
          <Slider {...settings} className="py-6">
            {postData.map((items, i) => (
              <div key={i}>
                <div
  className={`bg-white m-4 p-6 mt-20 mb-2 relative border border-white/10 rounded-xl shadow-md w-[320px] h-[320px]  flex flex-col justify-between ${
    i % 2 ? "middleDiv" : "testimonial-shadow "
  }`}
>

                  <div className="absolute top-[-45px]">
                    <Image
                      src={items.imgSrc}
                      alt={items.name}
                      width={100}
                      height={100}
                      className="inline-block rounded-full  w-10 h-10"
                    />
                  </div>

                  <h4 className="text-base font-normal text-darkgray my-4">
                    {items.comment}
                  </h4>

                  <hr style={{ color: "#D7D5D5" }} />

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">
                        {items.profession}
                      </h3>
                    </div>
                    <div className="flex">
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-lightgray" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
