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
          className="absolute w-[40%] md:w-[20%] lg:w-[18%] animate-tl -top-5 -rotate-20 -left-15"
        />

        <header className="bg-[#bd8c1c] lg:h-15 animate-bgLogo w-50 h-10 rounded-b-xl flex flex-row-reverse justify-center gap-2 items-center md:w-100 md:h-20">
          <img src={kem} alt="Kem" className="w-[20%] lg:w-[15%]" />
          <img src={ic} alt="IC" className="w-[20%] lg:w-[15%]" />
        </header>

        <img
          src={pattern}
          alt="Pattern"
          width="100%"
          className="w-screen h-screen fixed top-0 left-0 object-cover"
        />

        <div className="relative w-full uppercase text-white text-center tracking-wider font-Girassol">
          <h1 className="text-6xl md:text-8xl mt-5 lg:text-6xl">Graduation</h1>
          <img
            src={spark}
            alt="Spark"
            className="w-[40%] lg:w-[30%] absolute animate-pulse -top-4 right-17.5"
          />
          <h2 className="text-2xl md:text-4xl lg:text-2xl">ceremony</h2>
        </div>

        <div className="relative my-5">
          <img src={vin} alt="vin" className="opacity-40 md:w-100 lg:w-80" />
          <img src={hat} alt="hat" className="w-full z-1 absolute top-0 lg:w-[70%] lg:top-10 lg:left-10" />
          <img
            src={wave}
            alt="wave"
            className=" w-full absolute opacity-50 top-0 z-1 lg:w-[70%] lg:left-10 lg:top-10"
          />
          <img src={radial} alt="radial" className="w-full absolute -top-20 lg:w-[70%] lg:left-10 lg:-top-5" />
        </div>
        <h1 className="font-barberChop transform-[perspective(100px)_rotateX(10deg)_skewX(2deg)_translateX(5px)] tracking-wider text-shine text-shadow-black text-shadow-lg text-8xl z-2 text-center p-5">
          vintavis
        </h1>
        <div className="flex text-white text-center uppercase flex-col justify-center font-LeagueSpartan font-bold text-2xl items-center md:text-3xl mb-5">
          <p>12 mei 2026</p>
          <p className="md:w-100 w-75">man insan cendekia kota kendari</p>
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
