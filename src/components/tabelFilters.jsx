"use client"
import React, { useState } from 'react';
;


function Filters({values,filter}) {




  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <div>
          <button
            id="dropdownActionButton"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          > 
            <span className="sr-only">Action button</span>
            Action
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdownAction"
            className={`${
              isDropdownOpen ? 'block' : 'hidden'
            } overflow-y-scroll h-52 z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul className="  py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
              {
                values.map((elem)=> <li key={elem}  className=' cursor-pointer'>
                <span    data-value={elem}  onClick={filter} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {elem}
                </span>
              </li>
                )
              }
             

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
