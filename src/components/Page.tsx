import React from "react";

interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <div className="max-w-screen-lg mx-auto">{children}</div>;
};
