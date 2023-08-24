

const Navbar = () => {
  return (
    <nav className=" rounded-xl sticky top-0 bg-opacity-70 backdrop-blur-lg py-4 z-10 bgbody bg-opacity-62">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Logo</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent border rounded-md py-1 px-3 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
          />
          <button className="text-white">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
