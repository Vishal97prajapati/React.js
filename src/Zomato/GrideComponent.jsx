import React from 'react'

function GrideComponent() {
    const apiRes = [
        {
          title: 'Meghna biryani',
          image:
            'https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg',
          description: 'bhaiut badhiya biryani',
        },
        {
          title: 'Andhra biryani',
          image:
            'https://media-cdn.tripadvisor.com/media/photo-s/19/fa/13/d3/paneer-biryani.jpg',
          description: ' bahot jhaal biriyani hai ',
        },

        {
          title: 'Adigas',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfy-HWQCfdD1bkO28nv6rU5P8MkPTHUsZFw&s',
          description: 'adigas is good',
        },
      ];

  return (
    <>
       <div
      id="parentGrid"
      className="flex flex-row justify-center gap-5 mt-6 px-20">
    {apiRes.map((item)=> {
        return (  <div id="grid-Card" className="bg-gray-50 rounded-xl w-96">
            <img
              className="rounded-t-xl h-40 w-full"
              src={item.image}
              alt=""
            />
            <h2 className="haeding font-semibold px-5 pt-2">{item.title}</h2>
            <p class="px-5 pb-4">{item.description}</p>
          </div>
    )})}
    </div>
    </>
  )
}

export default GrideComponent
