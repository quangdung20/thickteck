'use client';

import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import numeral from 'numeral';
import { FaCartPlus } from 'react-icons/fa6';
import Slider from 'react-slick';

// CAROUSEL DATA

interface DataType {
  id: string;
  heading: string;
  imgSrc: string;
  oldPrice: number;
  price: number;
}
function formatNumber(price: number) {
  // tiền tệ việt nam
  return numeral(price).format('0,0');
}
const postData: DataType[] = [
  {
    id: '1',
    heading: 'Full stack rnass',
    oldPrice: 599000,
    imgSrc: '/assets/courses/courseone.png',
    price: 299000,
  },
  {
    id: '2',
    heading: 'Design system',
    oldPrice: 599000,
    imgSrc: '/assets/courses/coursetwo.png',
    price: 299000,
  },
  {
    id: '3',
    heading: 'Design banner',
    oldPrice: 599000,
    imgSrc: '/assets/courses/coursethree.png',
    price: 299000,
  },
  {
    id: '4',
    heading: 'We Launch Delia',
    oldPrice: 599000,
    imgSrc: '/assets/courses/courseone.png',
    price: 299000,
  },
  {
    id: '5',
    heading: 'We Launch Delia',
    oldPrice: 599000,
    imgSrc: '/assets/courses/coursetwo.png',
    price: 299000,
  },
  {
    id: '6',
    heading: 'We Launch Delia',
    oldPrice: 599000,
    imgSrc: '/assets/courses/coursethree.png',
    price: 299000,
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      speed: 500,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1200,
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
      <div id="courses">
        <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8">
          <div className="sm:flex justify-between items-center">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Sản phẩm nổi bật</h3>
            <Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">
              Xem tất cả&nbsp;&gt;&nbsp;
            </Link>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-courses rounded-2xl">
                  <div className="relative rounded-3xl">
                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                    <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                      <h3 className="text-white uppercase text-center text-sm font-medium">
                        best <br /> seller
                      </h3>
                    </div>
                  </div>
                  <div className="px-3">
                    <h4 className="text-2xl font-bold pt-6 text-black max-h-[70px] overflow-hidden text-ellipsis">
                      {items.heading}
                    </h4>
                    <div className="flex justify-between items-center py-6">
                      <div className="flex gap-4">
                        <h3 className="text-base font-normal opacity-75 line-through">
                          {formatNumber(Number(items.oldPrice))}đ
                        </h3>
                      </div>
                      <div>
                        <h3 className="text-3xl font-medium text-red">{formatNumber(Number(items.price))}đ</h3>
                      </div>
                    </div>

                    <hr style={{ color: '#C4C4C4' }} />
                    {/* <div className="flex justify-between pt-6">
                      <div className="flex gap-4">
                        <Image
                          src={'/assets/courses/book-open.svg'}
                          alt="users"
                          width={24}
                          height={24}
                          className="inline-block m-auto"
                        />
                        <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                      </div>
                      <div className="flex gap-4">
                        <Image
                          src={'/assets/courses/users.svg'}
                          alt="users"
                          width={24}
                          height={24}
                          className="inline-block m-auto"
                        />
                        <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                      </div>
                    </div> */}
                    <div className="flex justify-between items-center pt-6">
                      <Button className="bg-gray-300 text-gray-700 font-medium p-2 flex items-center gap-2 rounded transition hover:bg-ultramarine hover:text-white">
                        <FaCartPlus fontSize={25} />
                        Add to Cart
                      </Button>

                      {/* Liên kết xem chi tiết */}
                      <Link
                        href={`/client/products/${items.id}`}
                        className="text-base text-gray-800 hover:opacity-75 transition"
                      >
                        View Details
                      </Link>
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
