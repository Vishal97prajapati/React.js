import React from 'react'
function Zomato() {
  return (
    <>
   {/* Main content  */}
    <div className="flex flex-col items-center gap-6 relative bg-black/35 h-96">
       {/* backgorund image  */}
      <img
        className="absolute -z-10 w-full h-96 object-cover object-left-bottom"
        src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00="
        alt="biryani image"
      />
       {/* Navbar */}
      <div
        className="flex flex-row items-center p-4 gap-16 font-medium text-lg w-full text-white"
      >
        <span className="mr-auto ml-12 text-sm">Get the App </span>
        <span>Investor Relation</span>
        <span>Restaurat Add</span>
        <span>Login</span>
        <span>Sign up</span>
      </div>
      {/* zomato logo  */}
      <div className="flex flex-col gap-4 w-full items-center text-white">
        <h1 className="text-8xl font-black italic">Zomato</h1>
        <h3 className="text-4xl">Discover the best food & drinks in Bengaluru</h3>

        <div
          className="flex flex-row items-center justify-center w-1/2 p-4 bg-gray-100 rounded-xl shadow-md gap-3"
        >
          <i className="fa fa-search text-xl text-gray-700" aria-hidden="true"></i>

          <input
            type="text"
            className="outline-none flex-grow bg-transparent text-black"
            placeholder="Search for reaturant or cuisine near you"
          />
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Zomato
