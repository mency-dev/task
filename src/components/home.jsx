import { MdNavigateBefore, MdLocationOn, MdNavigateNext } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import image from "../assets/image1.png";
import { IoMdHeart } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './home-style.css';
export default function Home() {
  const fundData = [
    {
      raised: 1200,
      goal: 2400,
    },
  ];
  return (
    <>
      <div>
        <div className="relative ">
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            alt=""
            className="w-full h-150 object-fill"
          />

          <div className="absolute bg-green-500/70 inset-0 backdrop-opacity-10 text-center px-15 py-50 ">
            <div className="absolute top-72 right-19 text-white text-[30px]  rounded-full bg-green-700 flex items-center justify-center w-12 h-12">
              <MdNavigateNext />
            </div>
            <div className="absolute top-72 left-19 text-white text-[30px]  rounded-full bg-green-700 flex items-center justify-center w-12 h-12">
              <MdNavigateBefore />
            </div>
            <h1 className="text-[33px] font-extrabold pb-5 ">
              CHILDREN NEED YOUR HELP
            </h1>
            <p className="text-[15px] pb-11 leading-7 px-42">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              aspernatur inventore repudiandae porro molestias blanditiis
              voluptatem in numquam aliquam ea, hic odit perspiciatis non
              incidunt delectus, facere corporis explicabo provident.
            </p>
            <div>
              <button className="bg-white text-green-500 px-10 py-3 font-semibold rounded-full mr-3">
                DONATE NOW
              </button>
              <button className="border-1 px-10 py-3 rounded-full font-semibold">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-26 bg-white text-gray-700 dark:text-gray-400">
        <div className="flex justify-center flex-col items-center pb-17  ">
          <h1 className="text-[30px] font-semibold pb-2">OUR ACTIVITY</h1>
          <span className="block border-1 w-19 border-green-500 ml-3 text-center"></span>
          <p className="text-[15px] px-100 text-center pt-9 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus ab neque sequi, fugit ut suscipit sit quisquam totam
            minus dolore.
          </p>
        </div>
        <div className="bg-white text-gray-700 dark:text-gray-400 pt-11 pb-8">
          <div className="flex px-26 gap-25">
            <div className="relative  shadow-[0_2px_25px_rgba(0,0,0,0.1)] px-8 py-8 rounded-xl">
              <div
                className="absolute flex justify-center items-center text-[29px] -top-9 left-28 z-10 
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
          <div className="absolute bg-green-500/90 inset-0 backdrop-opacity-10 text-center flex justify-center px-78 py-23">
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
              <div className="px-4 pb-15">
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
      <div className="py-26 bg-white text-gray-700 dark:text-gray-400">
        <div className="flex justify-center flex-col items-center pb-17  ">
          <h1 className="text-[30px] font-semibold pb-2">UPCOMING EVENTS</h1>
          <span className="block border-1 w-19 border-green-500 ml-3 text-center"></span>
          <p className="text-[15px] text-center px-100 pt-9 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex px-25 gap-17">
          <div className="w-221">
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
          <div className="w-221">
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
          <div className="w-221">
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
            className="w-full h-80 object-fill"
          />
          <div className="absolute bg-green-500/90 inset-0 backdrop-opacity-10 text-center flex justify-center px-80 py-15">
            <div className="flex">
              <div className="flex flex-col items-center py-5">
                <IoMdHeart className="text-6xl mb-3" />
                <p className="text-[35px] font-semibold pb-1">3018</p>
                <p className="text-[15px]">CAUSES</p>
              </div>
              <span className="border border-green-400 py-19 mx-28"></span>
              <div className="flex flex-col items-center py-5">
                <TbWorld className="text-6xl mb-3" />
                <p className="text-[35px] font-semibold pb-1">4524</p>
                <p className="text-[15px]">PLACES</p>
              </div>
              <span className="border border-green-400 py-19 mx-28"></span>
              <div className="flex flex-col items-center py-5">
                <IoMdPersonAdd className="text-[55px] mb-3" />
                <p className="text-[35px] font-semibold pb-1.5">1509</p>
                <p className="text-[15px]">VOLUNTEERS</p>
              </div>
              <span className="border border-green-400 py-19 mx-28"></span>
              <div className="flex flex-col items-center py-5">
                <MdPeople className="text-6xl mb-3" />
                <p className="text-[35px] font-semibold pb-1">6032</p>
                <p className="text-[15px]">SAVED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-26 bg-white text-gray-700 dark:text-gray-400">
        <div className="flex justify-center flex-col items-center pb-17 ">
          <h1 className="text-[30px] font-semibold pb-2">OUR CAUSES</h1>
          <span className="block border-1 w-19 border-green-500 ml-3 text-center"></span>
          <p className="text-[15px] text-center px-100 pt-9 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className=" px-20 pb-10">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={50}
            navigation
            
            loop
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
                  className="object-cover w-307 rounded-t-xl h-47"
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
                  className="object-cover w-307 rounded-t-xl h-47"
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
    </>
  );
}
