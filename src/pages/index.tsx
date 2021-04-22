import React from "react";
import { Link } from "gatsby";
import { Page, Terminal } from "../components";

const IndexPage = () => {
  return (
    <Page>
      <div>
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">hey yo! que tal?</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Website is currently under construction. Hit the Get started
              button to see a sneak peak of my first blog. Enjoy.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/atomic-habits/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mx-20">
          <Terminal />
        </div>
      </div>
    </Page>
  );
};

export default IndexPage;
