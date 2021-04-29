import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

import { Link } from "react-router-dom";
export default function IndexPage({ name, link, image }) {
  return (
    <>
      <div className="bg-gray-50">
        {/* PLease install Pure React Carousel using "npm i pure-react-carousel" in order to use this component */}
        <div className="flex items-center justify-center w-full h-full py-8 px-4">
          <div className="w-80">
            <div className="flex items-center rounded-t-3xl justify-between bg-white p-6">
              <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={125}
                totalSlides={1}
                isIntrinsicHeight={true}
                infinite={true}
                className="flex items-center justify-between w-full"
              >
                <Slider className="w-40">
                  <Slide className="flex items-center justify-center">
                    <img alt="book" src={image} className="w-40 h-56" />
                  </Slide>
                </Slider>
              </CarouselProvider>
            </div>
            <div className="border-t p-6 bg-white dark:bg-gray-800 rounded-b-3xl">
              <h1 className="text-base font-medium leading-4 text-left mb-4 text-gray-500 dark:text-gray-400">
                {name}
              </h1>
              {/* <Link to={{ pathname: { link } }} target="_blank"> */}
              <a
                href={link}
                className="mt-9 text-indigo-700 bg-transparent border-indigo-700 dark:text-gray-100 dark:bg-indigo-700 border px-4 py-2 text-sm font-medium leading-3 rounded focus:outline-none  hover:opacity-50"
              >
                Buy
              </a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
