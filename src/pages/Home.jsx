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
          src="./src/assets/tapa.webp"
          alt="img"
          className="w-36 rounded-full"
        />
        <h2 className="font-semibold text-xl pt-5">Tapadyoti Das</h2>
        <p className="text-sm pt-1">FrontEnd-Dev | Guitarist | Music Producer</p>
      </section>

      <section className="flex items-center justify-center mt-12">
        <a href="https://forms.gle/aPPGtfwHnZAe8HY67">
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
    </div>
  );
};

export default Home;
