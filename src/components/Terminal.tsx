import React from "react";

export const Terminal = () => {
  const [timer, setTimer] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 2000);
  }, []);

  return (
    <div className="w-full">
      <div
        className="px-5 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
        bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
      >
        <div className="top mb-2 flex">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-yellow-600 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="h-56">
          <div className="mt-4 flex">
            <span className="text-green-400">computer:~$</span>
            <p className="flex-1 typing items-center pl-2">
              Hello World
              <br />
            </p>
          </div>
          <div className="transition duration-700 ease-in-out">
            {timer ? (
              <div className="flex">
                <span className="text-green-400">computer:~$</span>
                <p className="flex-1 typing items-center pl-2">
                  check out the blog
                  <br />
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
