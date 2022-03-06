import React, { FC } from "react";
import Header from "components/Layout/Header";
import Sidebar from "components/Layout/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Index: FC<Props> = ({ children }) => {
  return (
    <div className="max-h-screen overflow-hidden">
      <Header />
      <div className="flex h-[1px] bg-[#2F3336]"></div>
      <main className="grid grid-cols-5 grid-rows-1 gap-2 px-5 mt-4 ">
        <Sidebar />
        <div className="col-span-3 mt-4 ">{children}</div>
        <div className="mt-4 ">Right Sidebar</div>
      </main>
    </div>
  );
};

export default Index;
