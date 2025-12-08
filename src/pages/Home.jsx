import React from "react";
import Rectangle35 from "../assets/img/Rectangle35.png";
import Rectangle36 from "../assets/img/Rectangle36.svg";
import Rectangle37 from "../assets/img/Rectangle37.svg";
import Rectangle38 from "../assets/img/Rectangle38.png";
import GG233 from "../assets/img/GG233.svg";
// import Vector from "../assets/img/Vector.svg";
import GG235 from "../assets/img/GG235.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Navbar/>
      <div className="w-full min-h-screen flex items-center px-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="space-y-4">
            <p className="text-xl font-semibold text-blue-700 tracking-wide">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </p>

            <h1 className="text-4xl font-bold leading-snug">
              Experience the Magic of Cinema: <br />
              Book Your Tickets Today
            </h1>

            <p className="text-gray-400">
              Sign up and get the ticket with a lot of discount
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-4">
              <img src={Rectangle35} alt="poster" className=" rounded-xl" />

              <img src={Rectangle36} alt="poster" className="rounded-xl" />
            </div>

            <div className="flex flex-col gap-4">
              <img src={Rectangle37} alt="poster" className="  rounded-xl" />

              <img src={Rectangle38} alt="poster" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="m-20">
        <p className="text-xl font-semibold text-blue-700 tracking-wide">
          WHY CHOOSE US
        </p>
        <h2 className="text-4xl font-bold leading-snug">
          Unleashing the Ultimate <br />
          Movie Experience
        </h2>

        <div className="flex gap-3 mt-20">
          <div>
            <img src={GG233} alt="" />
            <h3 className="mt-3">Guaranteed</h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus vel cumque cupiditate provident ex voluptatum
              exercitationem ratione iste mollitia culpa?
            </p>
          </div>
          <div>
            <img src={GG233} alt="" />
            <h3 className="mt-3"> Affordable</h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus vel cumque cupiditate provident ex voluptatum
              exercitationem ratione iste mollitia culpa?
            </p>
          </div>
          <div>
            <img src={GG235} alt="" />
            <h3 className="mt-3">24/7 Customer Support</h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus vel cumque cupiditate provident ex voluptatum
              exercitationem ratione iste mollitia culpa?
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
