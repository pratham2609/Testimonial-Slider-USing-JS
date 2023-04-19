import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";
const App = () => {
  return (
    <main className="flex flex-col w-[100vw] h-screen justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-2/5 mx-auto mt-4"></div>
        <Testimonial reviews={reviews}/>
      </div>
    </main>
  );
};

export default App;
