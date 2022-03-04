import React, { FC } from "react";
import Header from "components/Layout/Header";

interface Props {
  children: React.ReactNode;
}

const Index: FC<Props> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="flex h-[1px] bg-[#2F3336] "></div>
      <main>{children}</main>
    </div>
  );
};

export default Index;
