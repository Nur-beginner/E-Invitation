import book from "../assets/book.svg";
import border from "../assets/border.webp";
import Navbar from "../Navbar.jsx";
import vin from "../assets/vinLogo-removebg-preview.webp";

function Detail() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-primary flex flex-col lg:gap-20 items-center justify-between">
        <header className="h-20 flex items-center justify-center my-2 w-full">
          <h1 className="text-shadow-lg underline decoration-shine underline-offset-8 text-shadow-black text-white font-bold uppercase font-Girassol tracking-widest text-3xl md:text-5xl">
            invitation
          </h1>
        </header>
        <img
          src={border}
          alt="Border"
          className="absolute w-full md:w-screen h-screen top-0 left-0 object-cover"
        />
        <div className="text-white border-4 md:w-[80%] lg:w-[60%] lg:my-10 border-double border-shine rounded-lg mx-5 md:text-3xl lg:text-xl p-5 flex flex-col">
          <p className="z-1">
            Assalamualaikum Warahmatullahi Wabarakatuh Puji syukur kita
            panjatkan ke hadirat Allah SWT atas limpahan rahmat, nikmat, dan
            karunia-Nya kepada kita semua. Shalawat serta salam semoga
            senantiasa tercurah kepada Nabi Muhammad SAW, beserta keluarga,
            sahabat, dan para pengikutnya hingga akhir zaman. Aamiin. Sehubungan
            dengan akan diselenggarakannya kegiatan Graduation Ceremony Kelas
            XII Angkatan 8 MAN Insan Cendekia Kota Kendari, dengan hormat kami
            selaku Badan Pengurus Harian Angkatan 8 mengundang Bapak/Ibu Orang
            Tua/Wali untuk berkenan menghadiri kegiatan tersebut yang insya
            Allah akan dilaksanakan pada:
          </p>
          <img
            src={vin}
            alt="VIN Logo"
            className="absolute opacity-50 right-[50%] left-[50%] transform -translate-x-1/2 md:w-100 md:opacity-40"
          />
        </div>
        <img
          src={book}
          alt="Book"
          className="w-[70%] lg:w-[50%] animate-book"
        />
      </main>
      <Navbar />
    </>
  );
}

export default Detail;
