import React from "react";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen py-6 sm:py-12">
        <div className="flex justify-center "> <span className=" text-[19px] font-bold mb-8">Roadmap</span> </div>
      <div className="w-full px-2 py-3 sm:max-w-2xl sm:mx-auto sm:px-0">
        <div className="relative text-sm antialiased font-semibold text-gray-700">
          {/* Vertical bar running through middle */}
          <div className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-secondary sm:block left-1/2" />
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-end w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 font-normal text-gray-950 shadow bg-brandblack rounded-[10px]">
                    Pixowl is founded
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-[25px] h-[25px] transform -translate-x-1/2 -translate-y-4 bg-white border-[6px] rounded-full border-secondary left-1/2 sm:translate-y-0">
                <div className="absolute flex right-12 flex-start text-secondary">
                  2011
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 font-normal text-gray-950 shadow bg-brandblack rounded-[10px]">
                    The Sandbox franchise launches on IOS
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-[25px] h-[25px]  transform -translate-x-1/2 -translate-y-4  bg-white border-[6px] border-secondary rounded-full left-1/2 sm:translate-y-0">
                <div className="absolute flex left-12 flex-start text-secondary">
                  2012
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-end w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 font-normal text-gray-950 shadow bg-brandblack rounded-[10px]">
                    The Sandbox is released for Android (1st title)
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-[25px] h-[25px] transform -translate-x-1/2 -translate-y-4 bg-white border-[6px] rounded-full border-secondary left-1/2 sm:translate-y-0">
                <div className="absolute flex right-12 flex-start text-secondary">
                  2013
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 font-normal text-gray-950 shadow bg-brandblack rounded-[10px]">
                    The Sandbox surpasses 10M downloads
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-[25px] h-[25px]  transform -translate-x-1/2 -translate-y-4  bg-white border-[6px] border-secondary rounded-full left-1/2 sm:translate-y-0">
                <div className="absolute flex left-12 flex-start text-secondary">
                  2014
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-end w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 font-normal text-gray-950 shadow bg-brandblack rounded-[10px]">
                    The Sandbox Evolution is announced at GDC conference (2nd
                    title)
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-[25px] h-[25px] transform -translate-x-1/2 -translate-y-4 bg-white border-[6px] rounded-full border-secondary left-1/2 sm:translate-y-0">
                <div className="absolute flex right-12 flex-start text-secondary">
                  2015
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 font-normal text-gray-950 shadow bg-brandblack rounded-[10px]">
                    The Sandbox Evolution released on iOS, Android & Steam
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-[25px] h-[25px]  transform -translate-x-1/2 -translate-y-4  bg-white border-[6px] border-secondary rounded-full left-1/2 sm:translate-y-0">
                <div className="absolute flex left-12 flex-start text-secondary">
                  2016
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-end w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 font-normal text-gray-950 shadow bg-brandblack rounded-[10px]">
                  The Sandbox Evolution receives 2 big partnerships
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-[25px] h-[25px] transform -translate-x-1/2 -translate-y-4 bg-white border-[6px] rounded-full border-secondary left-1/2 sm:translate-y-0">
                <div className="absolute flex right-12 flex-start text-secondary">
                  2017
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 font-normal text-gray-950 shadow bg-brandblack rounded-[10px]">
                  The Sandbox surpasses 40M downloads and 70M player creations
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-[25px] h-[25px]  transform -translate-x-1/2 -translate-y-4  bg-white border-[6px] border-secondary rounded-full left-1/2 sm:translate-y-0">
                <div className="absolute flex left-12 flex-start text-secondary">
                  2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
