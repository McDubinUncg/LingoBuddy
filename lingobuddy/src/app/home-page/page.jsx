const HomePage = () => {
    return (
      
        <div className="bg-cover bg-center h-1/2 w-screen flex items-center justify-center">
          <img src="/travelbanner.jpg" alt="Background" className="h-full w-full object-cover opacity-95" />
          <div className= "absolute">
          <h1 className="text-4xl font-bold text-black text-center" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>Your Best Friend For Spanish Learning!</h1>
          </div>
          <div className="absolute flex justify-center mt-4">
          <input type="text" placeholder="Enter text to translate" className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Translate</button>
        </div>
        </div>
    )
};

export default HomePage;