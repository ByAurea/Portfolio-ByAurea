function App() {
  return (
    <>
      {/* Fundo animado */}
    <section>
      <div className="blob-outer-container">
        <div className="blob-inner-container">
          <div className="blob"></div>
        </div>
      </div>
    </section>
      {/* Conteúdo principal da home */}

      <div className="relative z-50 flex items-center justify-center min-h-screen">
        <div className="text-white text-center drop-shadow-lg">
          <h1 className="text-4xl font-bold pb-3 text-shadow-[0_0_20px_white]">Hello, i'm ByAurea</h1>
          <p className="pb-1">I'm currently a Software Engineering student at FIAP, and i just love making landing-pages.</p>
          <p className="pb-1">Here you can check out some of my projects and also get to know some more about me!</p>
          <div className="border-b opacity-65"></div>
          <p className="pt-3 pb-2 animate-pulse font-medium text-lg">What would you like to do first?</p>
          <a href="" className="mr-7 text-xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">My Projects</a>
          <a href="" className="ml-7 text-xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">About me</a>
        </div>
      </div>

    </>
  );
}

export default App;