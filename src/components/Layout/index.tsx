import React, { FC } from "react";
import Header from "components/Layout/Header";
import Sidebar from "components/Layout/Sidebar";
import Hot from "components/Widget/Hot";

interface Props {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

const Index: FC<Props> = ({ children, rightSidebar }) => {

  return (
    <div className="max-h-screen overflow-x-hidden">
      <Header />
      <div className="flex h-[1px] bg-darkcharcoal"></div>
      <main className="grid grid-cols-6 grid-rows-1 gap-2 px-5 mx-auto mt-4 max-w-7xl">
        <Sidebar />
        <div className="mt-4 sm:col-span-7 lg:col-span-3">{children}</div>
        {rightSidebar && (
          <div className="hidden mt-4  md:block sm:col-span-2 top-10 scrollbar-thin scrollbar-thumb-black scrollbar-track-white">{rightSidebar}</div>
        )}
      </main>
    </div>
  );
};

export default Index;
