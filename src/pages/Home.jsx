import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ShareBtn from "../helper/ShareBtn";


const Home = () => {
  return (
    <div className="bg min-h-screen text-white w-screen">
      <nav className=" p-4 pl-4 text-2xl">
       <ShareBtn/>
      </nav>

      <section className="flex justify-center flex-col items-center mt-8">
        <img
          src="/tapa.webp"
          alt="img"
          className="w-36 rounded-full"
        />
        <h2 className="font-semibold text-xl pt-5">Tapadyoti Das</h2>
        <p className="text-sm pt-1">MIXING ENGINEER & GUITARIST</p>
      </section>

      <section className="flex items-center justify-center mt-12">
        <a href="https://instagram.com/tapadyotidas" target="_blank">
          <button className="bg-white text-black border-xl border rounded-3xl p-3 w-56">
            Online Guitar Lessons
          </button>
        </a>
      </section>

      <section className="flex gap-3 text-3xl mt-5 justify-center">
        <a href="https://instagram.com/tapadyotidas">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556220398684&mibextid=ZbWKwL">
          <FaFacebook />
        </a>
        <a href="https://youtube.com/c/TapadyotiDas">
          <FaYoutube />
        </a>

        <a href="https://www.linkedin.com/in/tapadyoti">
          <FaLinkedin />
        </a>

        <a href="https://open.spotify.com/artist/2jkXzixknyNtrBVrIUAwkP?si=qFkp-TCQRHq4eFsa2_PGMA">
          <FaSpotify />
        </a>
      </section>

      <section className="text-center mt-14 animate-up-down">
        <a href="mailto:dtapadyoti@gmail.com">
          <button className="border-xl border rounded-3xl p-3 w-40 bg-black">
            Contact Me
          </button>
        </a>
      </section>
      {/* Mixing Services Section */}
<section className="mt-16 px-4 flex flex-col items-center text-center">

  {/* Heading */}
  <h2 className="text-2xl font-semibold mb-3">
    Professional Mixing & Mastering
  </h2>

  <p className="text-sm text-gray-300 max-w-md mb-6">
    Get your songs mixed and mastered with clarity, punch, and industry-level quality. 
    Perfect for artists who want a clean and professional sound.
  </p>

  {/* Price */}
  <div className="bg-white text-black rounded-2xl px-6 py-4 mb-6 shadow-lg">
    <p className="text-sm line-through text-gray-500">₹1499</p>
    <h3 className="text-2xl font-bold">₹899</h3>
    <p className="text-xs mt-1">Limited Offer</p>
  </div>

  {/* CTA Button */}
  <a href="https://instagram.com/tapadyotidas" target="_blank">
    <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-3xl text-white font-medium hover:scale-105 transition duration-300">
      Send Message on Instagram
    </button>
  </a>

  {/* Works Section */}
  <div className="mt-10 w-full max-w-lg">
    <h3 className="text-lg font-semibold mb-4">My Works</h3>

    <div className="flex flex-col gap-4">

      <audio controls className="w-full rounded-lg">
        <source src="/mix1.mp3" type="audio/mpeg" />
      </audio>

      <audio controls className="w-full rounded-lg">
        <source src="/mix2.mp3" type="audio/mpeg" />
      </audio>

    

    </div>
  </div>

</section>
    </div>
  );
};

export default Home;
