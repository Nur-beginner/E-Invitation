import book from "../assets/book.svg";
import border from "../assets/border.webp";
import tborder from "../assets/TBorder.webp";
import Navbar from "../Navbar.jsx";

function Detail() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-primary flex flex-col items-center justify-between relative">
        <header className="h-20 flex items-center justify-center  w-full">
          <div className="absolute left-10 overflow-hidden w-full">
            <img
              src={tborder}
              alt="Text Border"
              width="80%"
              className="opacity-50"
            />
          </div>
          <h1 className="text-shadow-lg text-shadow-black text-white font-bold uppercase font-Girassol tracking-widest text-3xl">
            invitation
          </h1>
        </header>
        <img
          src={border}
          alt="Border"
          width="100%"
          className="absolute md:w-screen h-screen top-0 left-0 object-cover"
        />
        <div className="text-white border-2 rounded-lg mx-5 md:text-lg p-5 flex flex-col">
          <p>
            Puji syukur kita panjatkan ke hadirat Allah SWT. atas limpahan
            rahmat, nikmat, dan karunia-Nya kepada kita semua. Shalawat serta
            salam semoga senantiasa tercurah kepada Nabi Muhammad SAW., beserta
            keluarga, sahabat, dan para pengikutnya hingga akhir zaman. Aamiin.
          </p>
          <br />
          <p>
            Sehubungan dengan akan diselenggarakannya kegiatan Graduation
            Ceremony Kelas XII Angkatan 8 MAN Insan Cendekia Kota Kendari,
            dengan hormat kami selaku Badan Pengurus Harian Angkatan 8
            mengundang Bapak/Ibu untuk berkenan menghadiri kegiatan tersebut
          </p>
        </div>
        <img src={book} alt="Book" width="70%" className="animate-book" />
      </main>
      <Navbar />
    </>
  );
}

export default Detail;
