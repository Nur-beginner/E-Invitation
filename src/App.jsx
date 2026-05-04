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
          className="z-0 fixed top-0 left-0"
        />
        <h1 className="uppercase text-white font-Girassol text-6xl tracking-wider mt-5">
          Graduation
        </h1>
        <h2 className="uppercase text-white font-Girassol text-2xl tracking-wider">
          ceremony
        </h2>
        <img src={vin} alt="vin" className="opacity-40 my-5" />
        <img src={hat} alt="hat" width="50%" className="z-1 fixed top-50" />
        <img src={wave} alt="wave" width="50%" className="fixed opacity-50 top-50 z-1" />
        <img src={radial} alt="radial" width="70%" className="fixed opacity-50 top-15" />
        <h1 className="font-barberChop transform-[perspective(100px)_rotateX(10deg)_skewX(2deg)] tracking-wider text-[#f4b04b] text-shadow-black text-shadow-lg text-8xl z-2 ml-5">
          vintavis
        </h1>
        <footer className="flex items-center">
          <div>
            <p className="text-white text-center uppercase font-LeagueSpartan font-bold text-2xl">
              12 mei 2026
            </p>
            <p className="text-white uppercase font-LeagueSpartan font-bold text-2xl w-75 text-center">
              man insan cendekia kota kendari
            </p>
          </div>
        </footer>
        <img
          src={bl}
          alt="BL"
          width="40%"
          className="fixed animate-bl -bottom-20 -left-20"
        />
        <img
          src={br}
          alt="BR"
          width="40%"
          className="fixed animate-br -bottom-10 -rotate-20 -right-15"
        />
      </main>
    </>
  );
}

export default App;
