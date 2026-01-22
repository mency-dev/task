import {
  MdNavigateBefore,
  MdLocationOn,
  MdNavigateNext,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { IoIosSend, IoMdMail } from "react-icons/io";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaHeart,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { GoClock } from "react-icons/go";
import image from "../assets/image1.png";
import { IoMdHeart } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./home-style.css";
import logo1 from "../assets/amazon-com-logo-svgrepo-com.svg";
import logo2 from "../assets/envato-svgrepo-com.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";
export default function Home() {
  const fundData = [
    {
      raised: 1200,
      goal: 2400,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const posts = [
    "Consectetur Adipisicing Elit",
    "Consectetur Adipisicing",
    "Consectetur Adipisicing Elit",
    "Consectetur Adipisicing",
    "Consectetur Adipisicing Elit",
  ];

  const { register, handleSubmit } = useForm();
  return (
    <>
      <div>
        <div className="relative overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            alt=""
            className="w-full h-150 object-fill"
          />

          <div className="absolute bg-green-500/70 inset-0 backdrop-opacity-10 text-center px-1 sm:px-15 py-10 sm:py-50 ">
            <div className="hidden sm:flex absolute top-72 right-19 text-white text-[30px] rounded-full bg-green-700 items-center justify-center w-12 h-12">
              <MdNavigateNext />
            </div>

            <div className="hidden sm:flex absolute top-72 left-19 text-white text-[30px] rounded-full bg-green-700 items-center justify-center w-12 h-12">
              <MdNavigateBefore />
            </div>
            <h1 className="sm:text-[33px] text-[25px] font-extrabold pb-5 ">
              CHILDREN NEED YOUR HELP
            </h1>
            <p className="text-[15px] pb-11 leading-7 px-5 sm:px-42">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              aspernatur inventore repudiandae porro molestias blanditiis
              voluptatem in numquam aliquam ea, hic odit perspiciatis non
              incidunt delectus, facere corporis explicabo provident.
            </p>
            <div className="flex sm:flex-row gap-4 flex-col justify-center items-center">
              <button className="bg-white text-green-500 px-10 py-3 font-semibold rounded-full ">
                DONATE NOW
              </button>
              <button className="border px-10 py-3 rounded-full font-semibold">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-26 py-15 bg-white text-gray-700 ">
        <div className="flex justify-center flex-col items-center pb-17  ">
          <h1 className="text-[30px] font-semibold pb-2">OUR ACTIVITY</h1>
          <span className="block border-1 w-19 border-green-500 ml-3 text-center"></span>
          <p className="text-[15px] px-5 sm:px-100 text-center pt-9 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus ab neque sequi, fugit ut suscipit sit quisquam totam
            minus dolore.
          </p>
        </div>
        <div className="bg-white text-gray-700 dark:text-gray-400 pt-11 pb-8">
          <div className="flex flex-col sm:flex-row px-3 sm:px-26 gap-25">
            <div className="relative  shadow-[0_2px_25px_rgba(0,0,0,0.1)] px-8 py-8 rounded-xl">
              <div
                className="absolute flex  justify-center items-center text-[29px] -top-9 left-28 z-10 
              bg-white rounded-full w-19 h-19 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              >
                <IoIosSend />
              </div>
              <div className="px-3 py-5">
                <h1 className=" font-medium text-[22px] ">Fundraising</h1>
                <span className="block border-1 w-32 border-black ml-11 text-center"></span>
                <p className="pt-8 text-gray-500 leading-6 text-center text-[14.5px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                </p>
              </div>
            </div>
            <div className="relative  shadow-[0_2px_25px_rgba(0,0,0,0.1)] px-8 py-8 rounded-xl">
              <div
                className="absolute flex justify-center items-center text-[25px] -top-9 left-28 z-10 
              bg-white rounded-full w-19 h-19 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              >
                <FaHeart />
              </div>
              <div className="px-3 py-5">
                <h1 className=" font-medium text-[22px] ">Volunteering</h1>
                <span className="block border-1 w-32 border-black ml-11 text-center"></span>
                <p className="pt-8 text-gray-500 leading-6 text-center text-[14.5px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                </p>
              </div>
            </div>
            <div className="relative  shadow-[0_2px_25px_rgba(0,0,0,0.1)] px-8 py-8 rounded-xl">
              <div
                className="absolute flex justify-center items-center text-[29px] -top-9 left-28 z-10 
              bg-white rounded-full w-19 h-19 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              >
                <IoIosSend />
              </div>
              <div className="px-3 py-5">
                <h1 className=" font-medium text-[22px] ">Our Programs</h1>
                <span className="block border-1 w-32 border-black ml-11 text-center"></span>
                <p className="pt-8 text-gray-500 leading-6 text-center text-[14.5px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            alt=""
            className="w-full h-148 object-fill"
          />
          <div className="absolute bg-green-500/90 inset-0 backdrop-opacity-10 text-center flex justify-center sm:px-78 px-3 py-10 sm:py-23">
            <div>
              <h1 className="text-[19px] font-medium pb-3">URGENT CAUSE</h1>
              <h1 className="text-[29px] font-semibold pb-7">
                Recent Environmental Disasters
              </h1>
              <p className="text-[15px] px-5 pb-1 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="px-4 pb-4 sm:pb-15">
                {fundData.map((item, index) => {
                  const percentage = (item.raised / item.goal) * 100;

                  return (
                    <div key={index}>
                      <p className="text-[15px] pb-1">
                        {Math.round(percentage)}%
                      </p>
                      <div className="relative h-2.5 w-full bg-green-700 rounded-sm">
                        <div
                          className="absolute h-2.5 bg-white top-0 rounded-l-sm"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between py-4 text-[15px]">
                        <p>Raised: ${item.raised}</p>
                        <p>Goal: ${item.goal}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="bg-white text-green-500 px-10 py-3 font-MEDIUM rounded-full mr-3 text-[16px]">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-26 bg-white text-gray-700">
        <div className="flex justify-center flex-col items-center pb-17  ">
          <h1 className="text-[30px] font-semibold pb-2">UPCOMING EVENTS</h1>
          <span className="block border-1 w-19 border-green-500 ml-3 text-center"></span>
          <p className="text-[15px] text-center px-5 sm:px-100 pt-9 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3 sm:px-25">
          <div className="w-full max-w-sm mx-auto">
            <div>
              <img src={image} alt="" className="" />
            </div>
            <div className="flex justify-between pt-3">
              <div className="flex items-center text-[14px]">
                <GoClock />
                <p className="pl-1">1:00 pm - 3:00 pm</p>
              </div>
              <div className="flex items-center text-[14px]">
                <MdLocationOn />
                <p className="pl-1">California Street</p>
              </div>
            </div>
            <div className=" pt-8">
              <h1 className="text-center text-[18px] font-bold">
                Education For Children
              </h1>
              <p className="leading-8 text-gray-500 pt-1 text-center text-[14px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <div>
              <img src={image} alt="" className="" />
            </div>
            <div className="flex justify-between pt-3">
              <div className="flex items-center text-[14px]">
                <GoClock />
                <p className="pl-1">1:00 pm - 3:00 pm</p>
              </div>
              <div className="flex items-center text-[14px]">
                <MdLocationOn />
                <p className="pl-1">California Street</p>
              </div>
            </div>
            <div className=" pt-8">
              <h1 className="text-center text-[18px] font-bold">
                Education For Children
              </h1>
              <p className="leading-8 pt-1 text-gray-500 text-center text-[14px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <div>
              <img src={image} alt="" className="" />
            </div>
            <div className="flex justify-between pt-3">
              <div className="flex items-center text-[14px]">
                <GoClock />
                <p className="pl-1">1:00 pm - 3:00 pm</p>
              </div>
              <div className="flex items-center text-[14px]">
                <MdLocationOn />
                <p className="pl-1">California Street</p>
              </div>
            </div>
            <div className=" pt-8">
              <h1 className="text-center text-[18px] font-bold">
                Education For Children
              </h1>
              <p className="leading-8 text-gray-500 pt-1 text-center text-[14px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            alt=""
            className="w-full h-100 sm:h-80 object-fill"
          />
          <div className="absolute bg-green-500/90 inset-0 backdrop-opacity-10 text-center  px-0 sm:px-80 py-0 sm:py-15">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x  sm:divide-y-0 divide-green-400">
              {/* CAUSES */}
              <div className="flex flex-col items-center py-8">
                <IoMdHeart className="text-6xl mb-3" />
                <p className="text-[35px] font-semibold">3044</p>
                <p className="text-[15px]">CAUSES</p>
              </div>

              {/* PLACES */}
              <div className="flex flex-col items-center py-8">
                <TbWorld className="text-6xl mb-3" />
                <p className="text-[35px] font-semibold">4566</p>
                <p className="text-[15px]">PLACES</p>
              </div>

              {/* VOLUNTEERS */}
              <div className="flex flex-col items-center pt-8">
                <IoMdPersonAdd className="text-[55px] mb-3" />
                <p className="text-[35px] font-semibold">1522</p>
                <p className="text-[15px]">VOLUNTEERS</p>
              </div>

              {/* SAVED */}
              <div className="flex flex-col items-center pt-8">
                <MdPeople className="text-6xl mb-3" />
                <p className="text-[35px] font-semibold">6088</p>
                <p className="text-[15px]">SAVED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-26 bg-white text-gray-700">
        <div className="flex justify-center flex-col items-center pb-17 ">
          <h1 className="text-[30px] font-semibold pb-2">OUR CAUSES</h1>
          <span className="block border-1 w-19 border-green-500 ml-3 text-center"></span>
          <p className="text-[15px] text-center px-5 sm:px-100 pt-9 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className=" px-4 sm:px-10 lg:px-20 pb-10">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            loop
            slidesPerView={1} // default for mobile
            spaceBetween={10} // default for mobile
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
          >
            <SwiperSlide>
              <div className=" shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full rounded-t-xl h-47"
                />
                <div className="px-7 text-gray-500 pt-26">
                  <h1 className="text-center text-gray-700 text-[19px] pb-8 font-semibold">
                    FUTURES FOR CHILDREN
                  </h1>
                  <p className="text-[15px] leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minima
                  </p>
                  <div className=" pb-9">
                    {fundData.map((item, index) => {
                      const percentage = (item.raised / item.goal) * 100;

                      return (
                        <div key={index}>
                          <p className="text-[14.5px] text-center pb-5">
                            {Math.round(percentage)}%
                          </p>
                          <div className="relative h-2.5 w-full bg-gray-300 rounded-sm">
                            <div
                              className="absolute h-2.5 bg-green-500 top-0 rounded-l-sm"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between py-4 text-[15px]">
                            <p>
                              Raised:{" "}
                              <span className="text-green-500 font-medium">
                                {" "}
                                ${item.raised}
                              </span>
                            </p>
                            <p>
                              Goal:{" "}
                              <span className="text-green-500 font-medium">
                                {" "}
                                ${item.goal}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center pb-10">
                    <button className="border-green-500 border text-green-500 px-10 py-3 font-medium rounded-full text-[15px]">
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full rounded-t-xl h-47"
                />
                <div className="px-7 text-gray-500 pt-26">
                  <h1 className="text-center text-gray-700 text-[19px] pb-8 font-semibold">
                    FUTURES FOR CHILDREN
                  </h1>
                  <p className="text-[15px] leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minima
                  </p>
                  <div className=" pb-9">
                    {fundData.map((item, index) => {
                      const percentage = (item.raised / item.goal) * 100;

                      return (
                        <div key={index}>
                          <p className="text-[14.5px] text-center pb-5">
                            {Math.round(percentage)}%
                          </p>
                          <div className="relative h-2.5 w-full bg-gray-300 rounded-sm">
                            <div
                              className="absolute h-2.5 bg-green-500 top-0 rounded-l-sm"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between py-4 text-[15px]">
                            <p>
                              Raised:{" "}
                              <span className="text-green-500 font-medium">
                                {" "}
                                ${item.raised}
                              </span>
                            </p>
                            <p>
                              Goal:{" "}
                              <span className="text-green-500 font-medium">
                                {" "}
                                ${item.goal}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center pb-10">
                    <button className="border-green-500 border text-green-500 px-10 py-3 font-medium rounded-full text-[15px]">
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full rounded-t-xl h-47"
                />
                <div className="px-7 text-gray-500 pt-26">
                  <h1 className="text-center text-gray-700 text-[19px] pb-8 font-semibold">
                    FUTURES FOR CHILDREN
                  </h1>
                  <p className="text-[15px] leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minima
                  </p>
                  <div className=" pb-9">
                    {fundData.map((item, index) => {
                      const percentage = (item.raised / item.goal) * 100;

                      return (
                        <div key={index}>
                          <p className="text-[14.5px] text-center pb-5">
                            {Math.round(percentage)}%
                          </p>
                          <div className="relative h-2.5 w-full bg-gray-300 rounded-sm">
                            <div
                              className="absolute h-2.5 bg-green-500 top-0 rounded-l-sm"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between py-4 text-[15px]">
                            <p>
                              Raised:{" "}
                              <span className="text-green-500 font-medium">
                                {" "}
                                ${item.raised}
                              </span>
                            </p>
                            <p>
                              Goal:{" "}
                              <span className="text-green-500 font-medium">
                                {" "}
                                ${item.goal}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center pb-10">
                    <button className="border-green-500 border text-green-500 px-10 py-3 font-medium rounded-full text-[15px]">
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full rounded-t-xl h-47"
                />
                <div className="px-7 text-gray-500 pt-26">
                  <h1 className="text-center text-gray-700 text-[19px] pb-8 font-semibold">
                    FUTURES FOR CHILDREN
                  </h1>
                  <p className="text-[15px] leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minima
                  </p>
                  <div className=" pb-9">
                    {fundData.map((item, index) => {
                      const percentage = (item.raised / item.goal) * 100;

                      return (
                        <div key={index}>
                          <p className="text-[14.5px] text-center pb-5">
                            {Math.round(percentage)}%
                          </p>
                          <div className="relative h-2.5 w-full bg-gray-300 rounded-sm">
                            <div
                              className="absolute h-2.5 bg-green-500 top-0 rounded-l-sm"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between py-4 text-[15px]">
                            <p>
                              Raised:{" "}
                              <span className="text-green-500 font-medium">
                                {" "}
                                ${item.raised}
                              </span>
                            </p>
                            <p>
                              Goal:{" "}
                              <span className="text-green-500 font-medium">
                                {" "}
                                ${item.goal}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center pb-10">
                    <button className="border-green-500 border text-green-500 px-10 py-3 font-medium rounded-full text-[15px]">
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className=" px-4 sm:px-10 lg:px-20 bg-white ">
        <div className="flex flex-col sm:flex-row">
          <div className=" bg-green-500 text-white text-center sm:w-full lg:w-1/2 pt-20 pb-15">
            <h1 className="text-[22px] font-semibold">DONATION NOW</h1>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="flex items-center justify-center gap-1 lg:gap-6 py-10 text-[15px] text-gray-100">
                <span className="font-semibold">AMOUNT :</span>
                <label className="flex items-center  lg:gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="20"
                    {...register("amount")}
                    className="bg-white"
                  />
                  20USD
                </label>
                <label className="flex items-center lg:gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="50"
                    {...register("amount")}
                    className="accent-blue"
                  />
                  50USD
                </label>
                <label className="flex items-center lg:gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="100"
                    {...register("amount")}
                    className="accent-blue-500"
                  />
                  100USD
                </label>
              </div>
              <div className="flex items-center justify-center gap-1 lg:gap-6 text-[15px] text-gray-100 pb-5">
                <span className="font-semibold">TYPE :</span>
                <label className="flex items-center lg:gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="one-time"
                    {...register("type")}
                    className="accent-blue-500 text-white bg-white"
                  />
                  ONE TIME
                </label>
                <label className="flex items-center lg:gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="monthly"
                    {...register("type")}
                    className="accent-blue-500"
                  />
                  MONTHLY
                </label>
                <label className="flex items-center lg:gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="yearly"
                    {...register("type")}
                    className="accent-blue-500"
                  />
                  YEARLY
                </label>
              </div>
              <div className="py-5 px-1 lg:px-15 flex justify-center gap-3 lg:gap-7">
                <input
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="border rounded-xl border-white w-full px-4 py-3 text-white"
                />
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="border rounded-xl border-white w-full px-4 py-3 text-white"
                />
              </div>
              <div className="px-1 lg:px-15 pb-15">
                <select
                  {...register("category", { required: true })}
                  className="border rounded-xl border-white w-full px-4 py-4 text-white text-[15px]"
                >
                  <option value="">I Want To Donate For 1</option>
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                </select>
              </div>
              <button className="bg-white text-green-500 px-10 rounded-xl py-3.5 text-[15px]">
                DONATION NOW
              </button>
            </form>
          </div>
          <div className="bg-gray-200 text-black text-center sm:w-full lg:w-1/2 pt-20 pb-">
            <h1 className="text-[21px] font-medium pb-10">FEATURED DONORS</h1>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              loop
            >
              <SwiperSlide>
                <div className="pb-25 flex flex-col items-center">
                  <img
                    src={image}
                    alt=""
                    className="pb-6 rounded-t-xl rounded-xl w-95"
                  />
                  <h1 className="text-[19px] font-medium py-1">
                    Kenneth J. Garnica
                  </h1>
                  <p className="text-[15px] text-gray-600">
                    Donated Amount:{" "}
                    <span className="text-green-500"> 220 USD </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-19 flex flex-col items-center">
                  <img
                    src={image}
                    alt=""
                    className="pb-6 rounded-t-xl rounded-xl w-95"
                  />
                  <h1 className="text-[19px] font-medium py-1">
                    Kenneth J. Garnica
                  </h1>
                  <p className="text-[15px] text-gray-600">
                    Donated Amount:{" "}
                    <span className="text-green-500"> 220 USD </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-19 flex flex-col items-center">
                  <img
                    src={image}
                    alt=""
                    className="pb-6 rounded-t-xl rounded-xl w-95"
                  />
                  <h1 className="text-[19px] font-medium py-1">
                    Kenneth J. Garnica
                  </h1>
                  <p className="text-[15px] text-gray-600">
                    Donated Amount:{" "}
                    <span className="text-green-500"> 220 USD </span>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="py-26 bg-white text-gray-700 ">
        <div className="flex justify-center flex-col items-center pb-17  ">
          <h1 className="text-[30px] font-semibold pb-2">OUR VOLUNTEER</h1>
          <span className="block border-1 w-19 border-green-500 ml-3 text-center"></span>
          <p className="text-[15px] text-center px-5 lg:px-100 pt-9 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-20">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1} // default mobile
            spaceBetween={20} // default mobile
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 30 }, // small tablet
              768: { slidesPerView: 2, spaceBetween: 40 }, // tablet
              1024: { slidesPerView: 2.2, spaceBetween: 210 }, // desktop
            }}
            navigation
            loop
          >
            <SwiperSlide>
              <div className="flex flex-col sm:flex-row justify-center gap-5 shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
                <img
                  src={image}
                  alt=""
                  className="object-cover sm:w-full lg:w-45 rounded-t-xl h-49 rounded-xl"
                />

                <div className=" py-5 text-gray-500">
                  <h1 className=" text-gray-700 text-[20px] pb-1 font-semibold">
                    Albert R. Ardoin
                  </h1>
                  <p className="text-[16px] pb-1">Actor</p>
                  <p className="pb-2 text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisi
                  </p>
                  <div className="flex gap-5 text-[19px]">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaBehance />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex  flex-col sm:flex-row  gap-5  shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
                <img
                  src={image}
                  alt=""
                  className="object-cover sm:w-full lg:w-45 rounded-t-xl h-49 rounded-xl"
                />

                <div className=" py-5 text-gray-500">
                  <h1 className=" text-gray-700 text-[20px] pb-1 font-semibold">
                    Albert R. Ardoin
                  </h1>
                  <p className="text-[16px] pb-1">Actor</p>
                  <p className="pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="flex gap-5 text-[19px]">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaBehance />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex  flex-col sm:flex-row gap-5  shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
                <img
                  src={image}
                  alt=""
                  className="object-cover sm:w-full lg:w-45 rounded-t-xl h-49 rounded-xl"
                />

                <div className="py-5 text-gray-500">
                  <h1 className=" text-gray-700 text-[20px] pb-1 font-semibold">
                    Albert R. Ardoin
                  </h1>
                  <p className="text-[16px] pb-1">Actor</p>
                  <p className="pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="flex gap-5 text-[19px]">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaBehance />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            alt=""
            className="w-full h-160 lg:h-150 object-fill"
          />
          <div className="absolute bg-green-500/90 inset-0 backdrop-opacity-10 text-center px-5 py-10  lg:px-75 lg:py-15">
            <div className="flex items-center justify-center flex-col">
              <img
                src={image}
                alt=""
                className="rounded-full w-35 h-35 object-cover"
              />
              <p className="py-9">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
              <p className="font-['News_Cycle'] text-green-600 text-9xl font-bold">
                ''
              </p>
              <h1 className="text-[17px] font-medium">FLORENCE M. COFER</h1>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-26 bg-white text-gray-700 ">
        <div className="flex justify-center flex-col items-center pb-17  ">
          <h1 className="text-[30px] font-semibold pb-2">LATEST NEWS</h1>
          <span className="block border-1 w-19 border-green-500 ml-3 text-center"></span>
          <p className="text-[15px] text-center px-5 lg:px-100 pt-9 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-7 px-4 sm:px-20">
          <div className=" shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
            <img
              src={image}
              alt=""
              className="object-cover w-107 rounded-t-xl h-47"
            />
            <div className="px-7 text-gray-700 py-7 leading-7">
              <p className="text-[15px] pb-1">30 May, 2017</p>
              <h1 className="text-[16px] font-medium">
                Wood Work Adds Value To
              </h1>
              <h1 className="text-[16px] font-medium">Your Property Five</h1>
              <p className="text-[13.5px] text-left leading-5 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <a href="" className="text-[16px] font-medium">
                READ MORE
              </a>
            </div>
          </div>

          <div className=" shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
            <img
              src={image}
              alt=""
              className="object-cover w-107 rounded-t-xl h-47"
            />
            <div className="px-7 text-gray-700 py-7 leading-7">
              <p className="text-[15px] pb-1">30 May, 2017</p>
              <h1 className="text-[16px] font-medium">
                Wood Work Adds Value To
              </h1>
              <h1 className="text-[16px] font-medium">Your Property Five</h1>
              <p className="text-[13.5px] text-left leading-5 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <a href="" className="text-[16px] font-medium">
                READ MORE
              </a>
            </div>
          </div>

          <div className=" shadow-[0_2px_9px_rgba(0,0,0,0.3)] rounded-xl">
            <img
              src={image}
              alt=""
              className="object-cover w-107 rounded-t-xl h-47"
            />
            <div className="px-7 text-gray-700 py-7 leading-7">
              <p className="text-[15px] pb-1">30 May, 2017</p>
              <h1 className="text-[16px] font-medium">
                Wood Work Adds Value To
              </h1>
              <h1 className="text-[16px] font-medium">Your Property Five</h1>
              <p className="text-[13.5px] text-left leading-5 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <a href="" className="text-[16px] font-medium">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-20 bg-gray-100 ">
        <Swiper
          loop={true}
          
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          slidesPerView={1.5} // default mobile
          spaceBetween={10} // default mobile
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 10 }, // small tablet
            768: { slidesPerView: 3, spaceBetween: 10 }, // tablet
            1024: { slidesPerView: 4, spaceBetween: 10 }, // desktop
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src={logo1} alt="" className="w-35 " />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.freepnglogos.com/uploads/microsoft-logo-png-black-9.png"
              alt=""
              className="w-37 pt-4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo2} alt="" className="w-35" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2013/01/29/22/53/yahoo-76684_1280.png"
              alt=""
              className="w-37 pt-8"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="px-5 lg:px-19 py-20 bg-[#2e2e2e]">
        <div className="flex flex-col sm:flex-row justify-center gap-17">
          <div className="flex-1 min-w-[246px] lg:min-w-[346px] lg:max-w-[400px]">
            <h1 className="text-[23px] font-semibold pb-5">HELP CHARITY</h1>
            <p className="text-[15px] text-[#4a4a4a] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <span className="block border-1  border-[#4a4a4a]  text-center my-9"></span>
            <div className="flex gap-5 items-center text-[#4a4a4a] ">
              <FaFacebookF></FaFacebookF>
              <FaTwitter></FaTwitter>
              <FaBehance className="text-[21px]"></FaBehance>
              <FaDribbble></FaDribbble>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-[20px] font-semibold pb-6">RECENT POST</h1>

            {posts.map((title, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="flex gap-2 py-1 w-full items-center"
                >
                  <span
                    className={`text-md text-[#4a4a4a] transform transition-transform duration-200 ${
                      activeIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <MdKeyboardArrowRight />
                  </span>

                  <p className="text-[15px] text-[#4a4a4a]">{title}</p>
                </button>

                {activeIndex === index && (
                  <div className="absolute left-6 top-full z-50 w-full bg-[#2e2e2e] border shadow-md p-2">
                    <p>Option1</p>
                    <p>Option2</p>
                    <p>Option3</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <h1 className="text-[20px] font-semibold pb-6">USEFUL LINKS</h1>
            <ul className="list-disc text-[15px] text-[#4a4a4a] leading-7">
              <li>Home</li>
              <li>Causes</li>
              <li>Events</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex-1">
            <h1 className="text-[20px] font-semibold pb-6">CONTACT US</h1>
            <div className="flex gap-3 items-center text-[15px] text-[#4a4a4a] pb-2">
              <MdLocationOn />
              <p>423 Some adr, Chicago, Us</p>
            </div>
            <div className="flex gap-3 items-center text-[15px] text-[#4a4a4a] pb-2">
              <IoMdMail />
              <p>Email: mail@mail.com</p>
            </div>
            <div className="flex gap-3 items-center text-[15px] text-[#4a4a4a] pb-2">
              <FaPhoneAlt />
              <p>Phone: +00 151515</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 text-[13px] lg:text-[16.5px] text-gray-300 text-center">
        <p>
          Copyright @ 2027 <span className="text-green-500">DartThemes</span> |
          All Rights Reserved
        </p>
      </div>
    </>
  );
}
