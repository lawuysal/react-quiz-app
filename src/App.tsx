function App() {
  return (
    <div className="flex h-screen justify-center bg-blue-950">
      <div className="mt-8 flex h-3/4 w-3/4 flex-col items-center rounded-lg bg-blue-800 p-4 shadow-md transition-all duration-300 hover:shadow-xl md:mt-12 md:w-8/12 lg:mt-16 lg:h-4/5 lg:w-1/2">
        <h1 className="flex justify-center text-center text-xl font-extrabold text-blue-100 transition-all duration-300 md:text-2xl lg:mt-8 lg:text-3xl">
          REACT QUIZ APP
        </h1>

        <div className="mt-6 rounded-lg p-4 transition-all duration-300 sm:w-5/6 md:mt-8">
          <span className="flex flex-col transition-all duration-300">
            <h2 className="flex justify-center text-blue-300 transition-all duration-300">
              Question 1:
            </h2>
            <p className="flex justify-center text-lg font-bold text-blue-100 transition-all duration-300">
              What is the capital of France?
            </p>
          </span>
          <div className="mt-8 flex flex-col items-center gap-2">
            <button className="w-5/6 rounded-full bg-blue-950 p-2 text-blue-300 transition-all duration-200 hover:bg-blue-300 hover:text-blue-950">
              Paris
            </button>
            <button className="w-5/6 rounded-full bg-blue-950 p-2 text-blue-300 transition-all duration-200 hover:bg-blue-300 hover:text-blue-950">
              Berlin
            </button>
            <button className="w-5/6 rounded-full bg-blue-950 p-2 text-blue-300 transition-all duration-200 hover:bg-blue-300 hover:text-blue-950">
              Madrid
            </button>
            <button className="w-5/6 rounded-full bg-blue-950 p-2 text-blue-300 transition-all duration-200 hover:bg-blue-300 hover:text-blue-950">
              London
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
