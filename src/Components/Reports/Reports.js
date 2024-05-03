import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Checkbox } from "antd";

import { Card, Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const { Meta } = Card;
const items = [
  {
    label: 2024,
    key: "0",
  },
  {
    label: 2023,
    key: "1",
  },
  {
    label: 2022,
    key: "2",
  },
  {
    label: 2021,
    key: "3",
  },
];

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Reports = () => (
  <div className="py-20 h-screen px-2 ">
    {" "}
    {/* Moved the div here */}
    <div className="max-w-md mx-auto bg-gray-700 rounded-lg overflow-hidden md:max-w-xl">
      <div className="md:flex">
        <div className="w-full p-2">
          <div className="relative">
            <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
            <input
              type="text"
              className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
              name=""
            />
            <span className="absolute top-4 right-5 border-l pl-4">
              <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="">
      <Dropdown
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded m-1"
        overlay={
          <Menu>
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <Checkbox onChange={onChange}>{item.label}</Checkbox>
              </Menu.Item>
            ))}
          </Menu>
        }
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space className="mt-8">
            Select Year
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <Dropdown
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded m-1"
        overlay={
          <Menu>
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <Checkbox onChange={onChange}>{item.label}</Checkbox>
              </Menu.Item>
            ))}
          </Menu>
        }
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space className="mt-8">
            Authors
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>{" "}
      <Dropdown
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded m-1"
        overlay={
          <Menu>
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <Checkbox onChange={onChange}>{item.label}</Checkbox>
              </Menu.Item>
            ))}
          </Menu>
        }
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space className="mt-8">
            Categories
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <Dropdown
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded m-1"
        overlay={
          <Menu>
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <Checkbox onChange={onChange}>{item.label}</Checkbox>
              </Menu.Item>
            ))}
          </Menu>
        }
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space className="mt-8">
            Sub-Categories
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
    <div className="mt-12 flex justify-center">
      <Row gutter={24}>
        <Col span={8}>
          <div class="mx-auto w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg w-70">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/55.png"
              alt="Product Image"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Demystifing Kirana Ecommerce In India: eE2B Report
              </h2>
              <p class="mb-2 text-base dark:text-gray-500 text-gray-700">
                by RedSeer
              </p>
              <div class="flex items-center pt-2">
                <button
                  class="s font-bold  uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full m-2"
                  type="button"
                >
                  Consumer Tech
                </button>
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-3 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                  type="button"
                >
                  B2B
                </button>
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-3 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                  type="button"
                >
                  2022
                </button>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Read More <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </button>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div class="mx-auto w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg w-70">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/55.png"
              alt="Product Image"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Demystifing Kirana Ecommerce In India: eE2B Report
              </h2>
              <p class="mb-2 text-base dark:text-gray-500 text-gray-700">
                by RedSeer
              </p>
              <div class="flex items-center pt-2">
                <button
                  class="s font-bold  uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full m-2"
                  type="button"
                >
                  Consumer Tech
                </button>
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-3 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                  type="button"
                >
                  B2B
                </button>
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-3 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                  type="button"
                >
                  2022
                </button>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Read More <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </button>
            </div>
          </div>
        </Col><Col span={8}>
          <div class="mx-auto w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg w-70">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/55.png"
              alt="Product Image"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Demystifing Kirana Ecommerce In India: eE2B Report
              </h2>
              <p class="mb-2 text-base dark:text-gray-500 text-gray-700">
                by RedSeer
              </p>
              <div class="flex items-center pt-2">
                <button
                  class="s font-bold  uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full m-2"
                  type="button"
                >
                  Consumer Tech
                </button>
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-3 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                  type="button"
                >
                  B2B
                </button>
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-3 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                  type="button"
                >
                  2022
                </button>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Read More <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);
export default Reports;
