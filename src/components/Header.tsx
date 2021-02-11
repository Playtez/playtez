import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-400">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between">
          <div className="font-semibold ">Aaron Pleitez</div>

          <div className="flex space-x-4 text-lg">
            <div>social media</div>
            <div>social media</div>
            <div>social media</div>
          </div>
        </div>

        <div className="flex justify-center mt-24 pb-10">
          <div className="w-96">
            <h1 className="text-4xl font-bold uppercase">This is my heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              reiciendis deleniti error voluptatem odit molestiae aspernatur in
              ratione mollitia amet doloremque, a quaerat provident illum
              adipisci voluptate optio accusantium magnam? ipsum
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
