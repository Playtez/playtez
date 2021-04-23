import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header>
        <Header />
      </header>
      <main className="mb-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
