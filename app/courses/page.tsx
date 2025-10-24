"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA
interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Full stack modern',
        heading2: 'javascript',
        name: "Colt stelle",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Design system',
        heading2: 'with React programme',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Design banner',
        heading2: 'with Figma',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursethree.png',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursethree.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
]

// GRID VERSION
export default function CoursesGrid() {
    return (
        <div id="courses">
            <div className='mx-auto max-w-7xl px-6 pt-5'>
                <div className=" text-center mb-12">
                    <h3 className="text-midnightblue text-4xl lg:text-5xl font-semibold text-center">
                        Our Courses
                    </h3>
                   <p className="mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10 pb-3">
                    {postData.map((items, i) => (
                        <div key={i} className='bg-paleblue shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6'>
                            <div className="relative overflow-hidden rounded-2xl">
                                <Image 
                                    src={items.imgSrc} 
                                    alt={items.heading} 
                                    width={389} 
                                    height={262} 
                                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" 
                                />
                                <div className="absolute right-3 -bottom-3 bg-gradient-to-r from-ultramarine to-blue-600 rounded-2xl p-4 shadow-lg">
                                    <h3 className="text-white uppercase text-xs font-bold text-center leading-tight">
                                        best <br /> seller
                                    </h3>
                                </div>
                            </div>

                            <div className="px-2 pt-6">
                                <h4 className='text-xl font-bold text-black leading-tight mb-2'>
                                    {items.heading}
                                </h4>
                                <h4 className='text-xl font-bold text-black leading-tight mb-4'>
                                    {items.heading2}
                                </h4>

                                <h3 className='text-base font-medium text-gray-700 mb-6'>
                                    {items.name}
                                </h3>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-3">
                                        <h3 className=" text-2xl font-bold ">
                                            {items.rating}
                                        </h3>
                                        <div className="flex text-gold">
                                            {[...Array(5)].map((_, index) => (
                                                <StarIcon 
                                                    key={index}
                                                    className={`h-5 w-5 ${index < Math.floor(items.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            ${items.price}
                                        </h3>
                                    </div>
                                </div>

                                <hr className="border-gray-200 mb-6" />

                                <div className="flex justify-between">
                                    <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <Image 
                                            src={'/assets/courses/book-open.svg'} 
                                            alt="classes" 
                                            width={20} 
                                            height={20} 
                                        />
                                        <span>{items.classes} classes</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <Image 
                                            src={'/assets/courses/users.svg'} 
                                            alt="students" 
                                            width={20} 
                                            height={20} 
                                        />
                                        <span>{items.students} students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
            </div>
        </div>
    );
}
