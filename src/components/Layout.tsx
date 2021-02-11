import React from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-gray-300">
        <div className="flex-1 overflow-auto focus:outline-none" tabIndex={0}>
          <Header />
          <div className="max-w-screen-lg mx-auto mt-16 bg-gray-100 rounded-md pb-6 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
