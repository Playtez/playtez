import React from "react";
import { Page } from "../components";

const About = () => {
  return (
    <Page>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                About<span className="text-indigo-600">Me</span>
              </h2>
              <h3 className="text-xl md:text-3xl mt-10">Coming Soon</h3>
              <p className="text-md md:text-xl mt-10">
                <a className="hover:underline" href="about">
                  About page
                </a>{" "}
                is a website help you provide simple productivity tools for your
                daily need online for free. not really...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default About;
