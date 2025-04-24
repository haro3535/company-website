"use client";

import { useState } from "react";

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("");


  function MeasurementListItem() {
    return (
        <div className="w-full py-2 px-3 cursor-pointer hover:bg-[#313131]">
            <h3 className="text-lg font-bold">Measurement</h3>
            <p className="text-sm">Desc</p>
        </div>
    )
  }

  const items = [
    { name: "pH", value: "Value 1" },
    { name: "NPK", value: "Value 2" },
    { name: "Temp & Humidity", value: "Value 3" },
    { name: "Ec", value: "Value 4" },
  ];

  return (
    <div className="w-full flex flex-col py-8 px-8 md:py-10 md:px-15">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-lg">Welcome to the Dashboard!</p>

      <div className="w-full md:w-1/2 min-h-[25vh] flex justify-between bg-[#212121] rounded-lg  shadow-md p-6 mt-6">
        <div className="w-full md:w-1/3 mb-4">
            <label htmlFor="select-box" className="block text-sm font-medium ">
                Select a Hex Command
            </label>
            <select
            id="select-box"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 cursor-pointer  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
            <option className="bg-black" value="" disabled>
                -- Select an Option --
            </option>
            {items.map((item, index) => (
                <option className="bg-black cursor-pointer" key={index} value={item.value}>
                {item.name}
                </option>
            ))}
            </select>

            <button type="button" className="mt-4 cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                Submit
            </button>
        </div>

        <div className="w-full md:w-1/2 px-4 pb-2 mb-2">
            <h2 className="">Response</h2>
            <div className="h-full border border-gray-300 rounded-md shadow-sm">

            </div>
        </div>
      </div>


      <div className="w-full flex justify-between  mt-6 min-h-[30vh]">
        <div className="w-full md:w-1/3 bg-[#212121] p-3 mb-4 rounded-lg shadow-md">
            <div className="w-full flex justify-between mb-4 pb-3 border-b-1 border-gray-300">
                <button type="button" id="btn_measure" className=" py-2 px-3 border-2 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black">Measure</button>
                <button type="button" id="btn_clear" className=" py-2 px-4 border-2 border-red-600 text-red-600 rounded-md font-bold cursor-pointer hover:bg-red-600 hover:text-white">Clear</button>
            </div>

            <div className="w-full min-h-[25vh] overflow-y-auto">
                <MeasurementListItem />
                <MeasurementListItem />
                <MeasurementListItem />
            </div>

            <div className="w-full flex justify-between mb-4 pt-3 border-t-1 border-gray-300">
                <button type="button" className="ml-auto cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Send to Server</button>
            </div>
        </div>

        <div className="w-full md:w-5/8 bg-[#212121] p-3 mb-4 rounded-lg shadow-md ">
            <h2 className="">Measurement Details</h2>
            <div className="">
                
            </div>
        </div>
      </div>
    </div>
  );
}