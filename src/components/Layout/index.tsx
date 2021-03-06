import React, { FC } from "react";
import Header from "components/Layout/Header";
import Sidebar from "components/Layout/Sidebar";

interface Props {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
  heroContent?: React.ReactNode;
  sol?: boolean;
}

const Index: FC<Props> = ({ children, rightSidebar, heroContent }) => {
  return (
    <div className="max-h-screen overflow-x-hidden transition-all ease-in bg-radical dark:bg-dark">
       <div className="fixed top-0 z-10 w-full bg-black dark:bg-base-100 dark:backdrop-blur-0 bg-opacity-40 backdrop-blur-sm">
      {/* <div className="fixed top-0 z-10 w-full bg-transparent bg-red dark:bg-base-100 dark:backdrop-blur-0 bg-opacity-40 backdrop-blur-sm dark:bg-opacity-0"> */}
        <Header sol />
        <div className="flex h-[1px] bg-transparent dark:bg-darkcharcoal " />
      </div>

      <main className="grid grid-cols-6 grid-rows-1 gap-2 px-5 mx-auto mt-24 max-w-7xl">
        <Sidebar />
        <div className="grid grid-cols-5 gap-1 mt-4 sm:col-span-7 lg:col-span-5">
          {heroContent && <div className="col-span-5 mt-4">{heroContent}</div>}
          <div
            className={`${rightSidebar ? "col-span-3" : "col-span-5"} mt-4`}
            id="container"
          >
            {children}
          </div>
          {rightSidebar && (
            <div className="hidden col-span-2 mt-4 ml-10 md:block top-10 scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
              {rightSidebar}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
