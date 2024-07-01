import React from 'react';

function Collection() {
  const myApi = [
    {
      name: 'Top trading stport',
      image:
        'https://images.squarespace-cdn.com/content/v1/5ccec69c523958d3c510f0b7/2b970446-2cb6-4e1c-998e-1f3b0239290b/Prawn+and+Egg+Noodle+Salad+in+a+restaurant+with+chopstick+photo+taken+by+Matt+Madden+Photography+and+styled+by+Kate+Wesson.jpg',
      Itemdetails: 'Best food  food zone',
    },
    {
      name: 'Top trading stport',
      image:
        'https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg',
      Itemdetails: 'Best food  food zone',
    },
    {
      name: 'Top trading stport',
      image:
        'https://www.peerspace.com/resources/wp-content/uploads/best-cleveland-food-photographers.jpg',
      Itemdetails: 'Best food  food zone',
    },
    {
      name: 'Top trading stport',
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg',
      Itemdetails: 'Best food  food zone',
    },
  ];

  return (
    <div className="flex flex-col px-20 mt-20">
      <h1 className="text-4xl">Collection</h1>
      <p>
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Bengaluru, based on trends
      </p>
      <div className="flex  flex-row gap-5 ">
        {myApi.map((item) => {
          return (
            <div class=" items-center mt-10 mb-10 w-1/4  h-80 rounded-lg overflow-hidden relative ">
              <img
                class="absolute -z-10 object-cover h-full w-full "
                src={item.image}
                alt=""
              />
              <div class="bg-black/20  h-full flex flex-col justify-end p-4">
                <h1 class="text-3xl text-white font-bold">{item.name}</h1>
                <span class="text-white">{item.Itemdetails}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
