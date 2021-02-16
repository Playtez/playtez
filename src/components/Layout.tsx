import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header>
        <Header />
      </header>
      <main className="mb-auto pb-6">{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};
