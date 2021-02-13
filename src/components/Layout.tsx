import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-300">
      <header>
        <Header />
      </header>
      <main className="mb-auto mt-16 pb-6">{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};
