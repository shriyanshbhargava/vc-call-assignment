import React from "react";
import {
  faArrowRight,
  faShuffle,
  faEye,
  faPalette,
  faHome,
  faFlag,
  faMedkit,
  faCarAlt,
  faHandPaper,
  faPaperPlane,
  faBoxesPacking,
  faHouseChimneyMedical,
  faBook,
  faTreeCity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../Carousel/Carousel";
import FaqSection from "../Faq/faq";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
const Home = () => {
  return (
    <div>
      {" "}
      <div class="announcement-cta-wrapper pl-3 pr-1 p-2 py-1 text-sm bg-white-100 hover:bg-neutral-200/60 border w-fit rounded-full flex flex-row items-center gap-2 cursor-pointer mx-auto mt-28 mb-8 font-bold">
        No Signup Needed !
        <div class="flex flex-row px-3 py-2 bg-blue-500 text-white w-fit rounded-full text-xs text-bold">
          Free Forever
        </div>
      </div>
      <div className="text-center text-black mt-2 text-6xl font-bold font-Inter tracking-tight leading-tight ">
        <span className="">
          Let's find you relevant reports about India<br></br> to cut your
          research time in half.
        </span>
        <div className="midSection">
          <div>
            <button class="flex flex-row items-center justify-center gap-1.5 hover:gap-2 transition-all bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-md hover:brightness-125 px-6 py-3 font-medium rounded-xl text-lg mt-12">
              Browse Reports
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right w-4 h-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
          {/* <div className="midSectionCarousel mt-56 ml-5">
          <Carousel />
        </div> */}
          <div>
            <div className="text-5xl mt-32 text-black">Explore Reports By.</div>

            <div className="logoGrid">
              <div className="logoGridDiv">
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/1jlyWNfa8mnYxJtmzu5lpV/4072e10330206f9057fe77ab19ce1bca/doordash.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/2VtWKmfmToo8n3X7BY0WwA/ccdcd719ee3bc3fa76148eae11d97c51/nike.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/6dIueLe6mDK6HhNObFq2On/a6cd5c6aa443fe0fc69386522acf7b70/amazon.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/6WgTu82608DIXfxu9KliYL/326d36bbde762fd9c1800872db81244c/pinterest.png"
                ></img>
              </div>
              <div className="logoGridDiv">
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/LnKYnStAE4vKs51ejLRj2/69cb3e0382538d4c925208ea24f253f5/General_Electric_logo.svg__1_.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/3o80U1VqLr5X1nE4kWlZM5/7d1493bad9ba1bd0adf0cf21b6751dd2/uber.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/2owwRqFrnSdM98Js9Itzih/15cca0ca61fbbaadfeef6b70108ffb42/plaid.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/346udUCJm76OzP8M0yI78w/81099c4f771df9286782581fe18d0efc/snowflake.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png"
                ></img>
              </div>
              <div className="logoGridDiv">
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png"
                ></img>
                <img
                  alt="iamge"
                  src="https://images.ctfassets.net/spoqsaf9291f/4AmP2cmuZ2kUwbeSw3ukj9/91ee33f40debced0e8188a0847cb65af/robinhood_logo.png"
                ></img>
              </div>
            </div>
          </div>

          <div className="w-75">
            <div className="text-5xl mt-20 text-black tracking-tight leading-tight">
              India’s largest reports repository for making <br></br> sense of
              opportunities in India.
            </div>
            <div className="flex justify-center">
              <div className="midContainer w-50">
                <div className="mt-24">
                  <Carousel />
                </div>
              </div>
              <div className="midContainer w-25 p-5 ">
                <div>
                  <FontAwesomeIcon
                    icon={faTreeCity}
                    color="#0B85D0"
                    width={30}
                  />
                  <div className="font-bold text-lg text-left tracking-tight text-black">
                    Agriculture & Allied Sector
                  </div>
                  <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                    <a href="https://www.notion.so/customers">
                      {" "}
                      Get Reports{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "blue-700", paddingLeft: "1px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-12">
                  <FontAwesomeIcon icon={faCarAlt} color="#0B85D0" width={30} />
                  <div className="font-bold text-lg text-left tracking-tight text-black">
                    Automobile
                  </div>
                  <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                    <a href="https://www.notion.so/customers">
                      {" "}
                      Get Reports{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "blue-700", paddingLeft: "1px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-12">
                  <FontAwesomeIcon icon={faMedkit} color="#0B85D0" width={30} />
                  <div className="font-bold text-lg text-left tracking-tight text-black">
                    Health Sector
                  </div>
                  <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                    <a href="https://www.notion.so/customers">
                      {" "}
                      Get Reports{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "blue-700", paddingLeft: "1px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="midContainer w-25 p-5">
                <div>
                  <FontAwesomeIcon
                    icon={faBoxesPacking}
                    color="#0B85D0"
                    width={30}
                  />
                  <div className="font-bold text-lg text-left tracking-tight text-black">
                    Paper and Packaging
                  </div>
                  <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                    <a href="https://www.notion.so/customers">
                      {" "}
                      Get Reports{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "blue-700", paddingLeft: "1px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-12">
                  <FontAwesomeIcon
                    icon={faHouseChimneyMedical}
                    color="#0B85D0"
                    width={30}
                  />
                  <div className="font-bold text-lg text-left tracking-tight text-black">
                    Chemicals
                  </div>
                  <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                    <a href="https://www.notion.so/customers">
                      {" "}
                      Get Reports{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "blue-700", paddingLeft: "1px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-12">
                  <FontAwesomeIcon icon={faBook} color="#0B85D0" width={30} />
                  <div className="font-bold text-lg text-left tracking-tight text-black">
                    Education
                  </div>
                  <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                    <a href="https://www.notion.so/customers">
                      {" "}
                      Get Reports{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "blue-700", paddingLeft: "1px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-5xl mt-16 text-black leading-tight">
            Made for investors, founders and analysts.
            <br />
            Find your use case. Now.
          </div>
          <div className="midContainerParentDiv mt-5">
            <MDBCarousel showControls showIndicators className="w-75">
              <MDBCarouselItem itemId={1}>
                <img
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvcnBvcmF0ZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                  className="d-block w-100"
                  alt="iamge"
                />
                <div className="text-base tracking-tight text-black p-2">
                  Lorem Ipsum Lorem Ipsum
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <img
                  src="https://watermark.lovepik.com/photo/20211201/large/lovepik-business-team-office-talking-about-work-picture_501327053.jpg"
                  className="d-block w-100"
                  alt="iamge"
                />
                <div className="text-base tracking-tight text-black p-2">
                  Lorem Ipsum Lorem Ipsum
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <img
                  src="https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390_640.jpg"
                  className="d-block w-100"
                  alt="iamge"
                />
                <div className="text-base tracking-tight text-black p-2">
                  Lorem Ipsum Lorem Ipsum
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVF0lqs7GIdyt6Cw6NxM48CvUwsMzW8XQCd6_TN6Q6wQ&s"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="text-base tracking-tight text-black p-2">
                  Lorem Ipsum Lorem Ipsum
                </div>
              </MDBCarouselItem>
            </MDBCarousel>
          </div>
          <FaqSection />

          <div className="getStartedSection mb-5">
            <div className="text-6xl mt-8 text-black">Get started for free</div>
            <div className="text-base mt-3 text-black tracking-normal font-normal">
              Deep diving into sub-sectors within sectors.
            </div>
            <div className="flex justify-center m-4">
              <button
                type="button"
                class="text-white font-semibold tracking-normal bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-blue-800 "
              >
                Try for free{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FFFFFF", paddingLeft: "3px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
