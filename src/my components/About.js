import React from "react";
import img from "./img1.jpeg";
export const About = () => {
  let aboutstyle = {
    minHeight: "85vh",
  };
  return (
    <>
      {" "}
      <h1 className="text-center py-6 aboutheading"> ABOUT THIS APPLICATION  </h1>
      <section class="text-gray-600 body-font" style={aboutstyle}>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Notes Taking / Todo List
              <br class="hidden lg:inline-block" />
              By:- Ashish Magadum
            </h1>
            <p class="mb-8 leading-relaxed parastyle">
              This app is made with the react js . You can add or delete your
              Notes / Todo list in this application.
              The To-Do List is an interface that allows the registration of
              buildings and components that the pioneer planned to create, so
              that the required materials can be calculated and be viewed. If
              several items are added, the player can view the summary of the
              total components required to make all of it. Each time an item on
              the list is made or built, one will be subtracted from the list.
              If all are done crafting or built, the To-Do List will be closed.
            </p>
            <div class="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};
