import React from "react";
import { BiRupee } from "react-icons/bi";

const Quotations3 = () => {
  return (
    <div className="border border-gray-400 rounded-md mx-[1%] my-[2%] py-[2%]">
      <div className="flex items-center justify-between p-2 border-b border-b-[#4348BD]">
        <div className="space-y-1">
          <h5 className="text-[12px]">Quote No</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">98864</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Customer Name</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">XXXXX</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Property Type</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">
            Commercial/Residential
          </p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Date</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">28-8-2024</p>
        </div>
        <div className="">
          <button className="bg-[#0BB68D] rounded-md text-white text-[14px] py-2 px-5">
            Submit
          </button>
        </div>
      </div>
      {/*----top-section---*/}
      <div className="p-3">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100 text-[#7A7A7A] text-[13px] font-[400] text-left">
              <th className="p-2">Components</th>
              <th className="p-2">Technical Specification</th>
              <th className="p-2">Total Cost (Without Tax)</th>
              <th className="p-2">Tax Slab</th>
            </tr>
          </thead>
          <tbody>
            {/*----first row data---*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>Solar Photovoltaic Module (Panels) (W/Units)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----second row----*/}
            <tr className="bg-blue-300 py-4">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>Panels Quantity</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Value"
                  />
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----3rd row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>System Capacity(kW)*</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <span className="font-[500]">B9*B10/1000</span>
                </div>
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
            {/*----4th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="my-2">
                      <span>Area Requirement</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Value"
                  />
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----5th row----*/}
            <tr className="py-4">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="my-2">
                      <span>Panels Brand</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                  <textarea
                    className="border border-[#7A7A7A] py-2 px-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td></td> {/* Empty cell */}
            </tr>
            {/*----6th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Panels Technology</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A]  p-2 w-full rounded-md bg-blue-300">
                    <option value="">Select Technology</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----seventh row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>Solar Inverter Capacity(In Kw)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    placeholder="Enter Value"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----8th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Solar Inverter Type</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A]  p-2 w-full rounded-md bg-blue-300">
                    <option value="">Select Type</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----9th row----*/}
            <tr className="py-4">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="my-2">
                      <span>SOlar Inverter Brand</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                  <textarea
                    className="border border-[#7A7A7A] py-2 px-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td></td> {/* Empty cell */}
            </tr>
            {/*----10th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Battery Capacity(In Kw)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Value"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full bg-blue-300 rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----11th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Battery Technology</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A]  p-2 w-full rounded-md ">
                    <option value="">Select Technology</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----12th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>Number of batteries</span>
                </div>
              </td>
              <td className="p-2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full bg-blue-300 rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Value"
                  />
                </div>
              </td>
              <td></td> {/* Empty cell */}
              <td></td> {/* Empty cell */}
            </tr>
            {/*----13th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Solar Battery Brand</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full  rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Brand"
                  />
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----14th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Module Mounting structure Type</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Type"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full bg-blue-300 rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----15th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Earthing Safety</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A]  p-2 w-full rounded-md ">
                    {" "}
                    <option value="">Select Value</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
              <td>
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
              <td></td>
            </tr>
            {/*----16th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>DC Distribution Box</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
              <td className="p-2"></td>
            </tr>
            {/*----17th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>AC Distribution Box</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
              <td className="p-2"></td>
            </tr>
            {/*----18th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>DC Cables(upto 50 mts.)**</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
              <td className="p-2"></td>
            </tr>
            {/*----19th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>AC Cables(upto 20 mts.)**</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
              <td className="p-2"></td>
            </tr>
            {/*----20th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Panels Warranty (In Years)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Warranty"
                  />
                </div>
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
            {/*----21st row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Inverter Warranty (In Years)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Warranty"
                  />
                </div>
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
            {/*----22nd row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Total BOS Cost</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full bg-blue-300 rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----23rd row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Total System Cost</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full  rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----24th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Installation Cost****</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full bg-blue-300 rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----25th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Net Metering Cost</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full bg-blue-300 rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----26th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Net Metering Liasioning Cost</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 pl-8 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Amount"
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <select className="border border-[#7A7A7A] p-2 w-full bg-blue-300 rounded-md text-[12px] ">
                    <option value="">Select Tax Slab</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
              </td>
            </tr>
            {/*----27th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Total Project Cost(exclusive of Tax)</span>
                    </div>
                  </span>
                </div>
              </td>
              <td></td>
              <td className="p-2">
                <div className="">
                  <p className="flex text-xl font-[700] text-[#4348BD]">
                    <BiRupee className="mt-[3px]" /> 78,000
                  </p>
                </div>
              </td>
              <td></td>
            </tr>
            {/*----28th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Tax</span>
                    </div>
                  </span>
                </div>
              </td>
              <td></td>
              <td className="p-2">
                <div className="">
                  <p className="flex text-xl font-[700] text-[#4348BD]">
                    <BiRupee className="mt-[3px]" /> 30,000
                  </p>
                </div>
              </td>
              <td></td>
            </tr>
            {/*----29th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Total Project Cost</span>
                    </div>
                  </span>
                </div>
              </td>
              <td></td>
              <td className="p-2">
                <div className="">
                  <p className="flex text-xl font-[700] text-[#4348BD]">
                    <BiRupee className="mt-[3px]" /> 1,08,000
                  </p>
                </div>
              </td>
              <td></td>
            </tr>
            {/*----30th row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Delivery Period (In Days)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Days"
                  />
                </div>
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
            {/*----31st row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Scope Of Maintenance Services</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2">
                <div>
                  <p className="text-[14px] font-[500]">
                    Following to be included
                  </p>
                </div>
              </td>
              <td className="p-2"></td>
            </tr>
            {/*----32nd row----*/}
            <tr className="bg-blue-300">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>payment Terms</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-blue-300 placeholder-[#7A7A7A]"
                    placeholder="Enter Description"
                  />
                </div>
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
            {/*----33- row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Price Validity (In Days)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <input
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md  placeholder-[#7A7A7A]"
                    placeholder="Enter Days"
                  />
                </div>
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="border border-gray-300 p-2 space-y-3 mx-2">
        <p className="text-[#4348BD] font-[600] text-[14px]">
          * This is based on the information Provided.Accurate details Will be
          provided after Site Visit
        </p>
        <p className="text-[#4348BD] font-[600] text-[14px]">
          ** Cables over and above the mentioned quantity will be charged
          separately
        </p>
        <p className="text-[#4348BD] font-[600] text-[14px]">
          *** This is tentative and subject to variation by +/- 5%. Final quote
          will be provided after site visit.
        </p>
      </div>
    </div>
  );
};

export default Quotations3;
