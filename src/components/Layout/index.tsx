import React, { FC } from "react";
import Header from "components/Layout/Header";
import Sidebar from "components/Layout/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Index: FC<Props> = ({ children }) => {
  return (
    <div className="max-h-screen overflow-x-hidden">
      <Header />
      <div className="flex h-[1px] bg-darkcharcoal"></div>
      <main className="grid grid-cols-6 grid-rows-1 gap-2 px-5 mt-4 ">
        <Sidebar />
        <div className="mt-4 sm:col-span-7 lg:col-span-3">{children}</div>
        <div className="hidden mt-4 md:block">Right Sidebar</div>
      </main>
    </div>
  );
};

export default Index;
