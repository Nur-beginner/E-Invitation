import pattern from "./assets/pattern.svg";

function invitation() {
  return (
    <>
      <main className="min-h-screen bg-primary flex flex-col items-center justify-center">
        <img
          src={pattern}
          alt="Pattern"
          width="100%"
          className="w-screen h-screen fixed top-0 left-0 object-cover"
        />
      </main>
    </>
  );
}

export default invitation;
