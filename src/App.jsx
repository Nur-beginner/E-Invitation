import "./App.css";
import pattern from "./assets/pattern.svg";
import kem from "./assets/kem.svg";
import ic from "./assets/ic.svg";
import bl from "./assets/bl.svg";
import tl from "./assets/tl.svg";
import br from "./assets/br.svg";
import spark from "./assets/spark.webp";
import hat from "./assets/hat.webp";
import wave from "./assets/wave.webp";
import radial from "./assets/radialYellow.webp";
import vin from "./assets/vinLogo-removebg-preview.webp";

function App() {
  return (
    <>
      <main className="min-h-screen bg-[#021827] flex flex-col items-center">
        <img
          src={tl}
          alt="TL"
          width="40%"
          className="fixed animate-tl -top-8 -rotate-20 -left-15"
        />
        <img
          src={spark}
          alt="Spark"
          width="40%"
          className="fixed animate-pulse -top-4 right-17.5"
        />

        <header className="bg-[#bd8c1c] animate-bgLogo w-50 h-10 rounded-b-xl flex flex-row-reverse justify-center items-center">
          <img src={kem} alt="Kem" width="20%" />
          <img src={ic} alt="IC" width="20%" />
        </header>

        <img
          src={pattern}
          alt="Pattern"
          width="100%"
          className="w-full z-0 fixed top-0 left-0"
        />
        <h1 className="uppercase text-white font-Girassol text-6xl tracking-wider mt-5">
          Graduation
        </h1>
        <h2 className="uppercase text-white font-Girassol text-2xl tracking-wider">
          ceremony
        </h2>
        <div className="relative my-5">
          <img src={vin} alt="vin" className="opacity-40" />
          <img src={hat} alt="hat" width="100%" className="z-1 absolute top-0" />
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
        <h1 className="font-barberChop transform-[perspective(100px)_rotateX(10deg)_skewX(2deg)] tracking-wider text-[#f4b04b] text-shadow-black text-shadow-lg text-8xl z-2 ml-5">
          vintavis
        </h1>
        <footer className="grid grid-cols-3 border-red-500 border-2 items-center w-full h-fit">
          <img
            src={bl}
            alt="BL"
            width="100%"
            className="border-2 border-red-500 animate-bl -bottom-20 -left-20"
          />
          <div className="border-2 border-blue-500 flex flex-col items-center">
            <p className="text-white text-center uppercase font-LeagueSpartan font-bold text-2xl">
              12 mei 2026
            </p>
            <p className="text-white uppercase font-LeagueSpartan font-bold text-2xl w-75 text-center">
              man insan cendekia kota kendari
            </p>
          </div>
          <img
            src={br}
            alt="BR"
            width="100%"
            className="border-2 justify-self-end border-red-500 animate-br -bottom-15 -right-20"
          />
        </footer>
      </main>
    </>
  );
}

export default App;
