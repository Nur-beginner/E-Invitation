import pattern from "../assets/pattern.svg";
import kem from "../assets/kem.svg";
import ic from "../assets/ic.svg";
import bl from "../assets/bl.svg";
import tl from "../assets/tl.svg";
import br from "../assets/br.svg";
import spark from "../assets/spark.webp";
import hat from "../assets/hat.webp";
import wave from "../assets/wave.webp";
import radial from "../assets/radialYellow.webp";
import vin from "../assets/vinLogo-removebg-preview.webp";
import Navbar from "../Navbar.jsx";

function Home() {
  return (
    <>
      <main className="min-h-screen md:overflow-visible overflow-hidden bg-primary flex flex-col md:justify-between items-center">
        <img
          src={tl}
          alt="TL"
          className="absolute w-[40%] md:w-[20%] animate-tl -top-5 -rotate-20 -left-15"
        />

        <header className="bg-[#bd8c1c] animate-bgLogo w-50 h-10 rounded-b-xl flex flex-row-reverse justify-center items-center">
          <img src={kem} alt="Kem" width="20%" />
          <img src={ic} alt="IC" width="20%" />
        </header>

        <img
          src={pattern}
          alt="Pattern"
          width="100%"
          className="w-screen h-screen fixed top-0 left-0 object-cover"
        />

        <div className="relative w-full ">
          <h1 className="uppercase text-white text-center font-Girassol text-6xl tracking-wider mt-5">
            Graduation
          </h1>
          <img
            src={spark}
            alt="Spark"
            width="40%"
            className="absolute animate-pulse -top-4 right-17.5"
          />
          <h2 className="uppercase text-white text-center font-Girassol text-2xl tracking-wider">
            ceremony
          </h2>
        </div>

        <div className="relative my-5">
          <img src={vin} alt="vin" className="opacity-40" />
          <img
            src={hat}
            alt="hat"
            width="100%"
            className="z-1 absolute top-0"
          />
          <img
            src={wave}
            alt="wave"
            width="100%"
            className="absolute opacity-50 top-0 z-1"
          />
          <img
            src={radial}
            alt="radial"
            width="100%"
            className="absolute -top-20"
          />
        </div>
        <h1 className="font-barberChop transform-[perspective(100px)_rotateX(10deg)_skewX(2deg)_translateX(5px)] tracking-wider text-shine text-shadow-black text-shadow-lg text-8xl z-2 text-center p-5">
          vintavis
        </h1>
        <div className="flex text-white text-center uppercase flex-col justify-center font-LeagueSpartan font-bold text-2xl items-center md:text-3xl mb-5">
          <p>
            12 mei 2026
          </p>
          <p className="md:w-100 w-75">
            man insan cendekia kota kendari
          </p>
        </div>
        <img
          src={bl}
          alt="BL"
          className="fixed w-[40%] md:w-[30%] lg:w-[18%] animate-bl bottom-0 -left-15"
        />
        <img
          src={br}
          alt="BR"
          className="fixed w-[40%] md:w-[30%] lg:w-[20%] animate-br bottom-0 -right-15"
        />
      </main>
      <Navbar />
    </>
  );
}

export default Home;
