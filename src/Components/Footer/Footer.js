import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class=" text-black m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <a
                href="https://thevccompany.com/"
                class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://svgshare.com/i/14d2.svg"
                  class="h-8"
                  alt=" Logo"
                />
                <span class="self-center font-sans text-2xl font-semibold whitespace-nowrap dark:text-black">
                  The VC Company
                </span>
              </a>
              <span class="text-left font-sans text-base font-semibold whitespace-nowrap dark:text-black">
                India's largest research repository for <br></br>investors,
                founders and analysts
              </span>
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#https://thevcproject.in/" class="hover:underline me-4 md:me-6">
                  Reports
                </a>
              </li>
              <li>
                <a href="https://thevcproject.in/" class="hover:underline me-4 md:me-6">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://thevcproject.in/" class="hover:underline me-4 md:me-6">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="https://thevcproject.in/" class="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
          <span>
            *This Project in no way intends to benefit by re-distribution or
            copying of author's report. This is purely for information & ease
            purposes.<br></br> If you'd rather not have your report listed here, please
            contact us to get it removed within 48 Hours.
            <span class="block text-sm text-black sm:text-center mt-3 mb-0 font-bold dark:text-gray-400">
              © 2024{" "}
              <a href="https://google.com/" class="hover:underline">
                The VC Company
              </a>
              . All Rights Reserved.
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
