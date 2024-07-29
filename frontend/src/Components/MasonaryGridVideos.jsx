import { useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";

const images = [
    {  
        image: "https://images.unsplash.com/photo-1722082769464-58b8fc317c98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
        owner: "Owais",
        ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." ,
        video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
      },
      {
        image: "https://images.unsplash.com/photo-1722082095682-510a3ce6d59f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
        price: 130,
        owner: "Henry",
        ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." ,
        video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
      },
      {
        image: "https://images.unsplash.com/photo-1722072977408-0865d9cc3904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
        price: 140,
        owner: "George",
        ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." ,
        video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1676654936177-d9fee86ca807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        owner: "Farhan",
        ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4', 
      },
    {
    image: "https://images.unsplash.com/photo-1721614463453-051bd28367b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    price: 50,
    owner: "John",
    ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." ,
    video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
  },
  {
    image: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    price: 60,
    owner: "Maria",
    ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
    // description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." 
  },
  {  
    image: "https://images.unsplash.com/photo-1721297014035-5fd86e65270f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    price: 70,
    owner: "Ali",
    ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
    // description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." 
  },
  {
    image: "https://images.unsplash.com/photo-1722100351919-86ee668c88db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    price: 80,
    owner: "Umer",
    ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." ,
    video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
  },
  {  
    image: "https://images.unsplash.com/photo-1721297014475-42f2e99d3271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    price: 90,
    owner: "Faris",
    ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." ,
    video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1675011288741-f86047b7ef29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    price: 100,
    owner: "Jackson",
    ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4', 
  },
  {  
    image: "https://images.unsplash.com/photo-1722113515289-72771c520102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    price: 110,
    owner: "Osman",
    ownerImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
  },
];

const MasonryGridVideos = () => {
  const [playingVideos, setPlayingVideos] = useState(Array(images.length).fill(false));

  const handlePlayPause = (index) => {
    const newPlayingVideos = [...playingVideos];
    newPlayingVideos[index] = !newPlayingVideos[index];
    setPlayingVideos(newPlayingVideos);
  };

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 p-4">
      {images.map((imageItem, index) => (
        <div key={index} className="relative mb-4 break-inside group">
          {playingVideos[index] ? (
            <video 
              src={imageItem.video}
              className="w-full rounded-lg shadow-md"
              autoPlay
              controls
            />
          ) : (
            <img
              src={imageItem.image}
              alt={`Random Unsplash ${index}`}
              className="w-full rounded-lg shadow-md"
            />
          )}
          <div 
              className="absolute top-4 p-2 right-4 z-10 cursor-pointer bg-gradient-to-r from-[#5354F4] to-[#2C2DE2] rounded-full hover:border hover:bg-none"
              onClick={() => handlePlayPause(index)}
            >
              {playingVideos[index] ? <CiPause1 className="text-lg text-white" /> : <CiPlay1 className="text-lg text-white" />}
            </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            
            {!playingVideos[index] && (
              <>
                <img 
                  src={imageItem.ownerImage} 
                  alt={imageItem.owner}
                  className="rounded-full w-20 h-20 shadow-lg border-4 border-gray-300 mb-4"
                />
                <p className="text-white text-lg mb-2">{imageItem.owner}</p>
                <p className="text-white text-center text-lg mb-2">{imageItem.description}</p>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-2">
                  <p className="text-white font-bold text-lg">Price: ${imageItem.price}</p>
                  <div className='p-2 cursor-pointer bg-gradient-to-r from-[#5354F4] to-[#2C2DE2] rounded-full hover:border hover:bg-none'>
                    <FaOpencart className="text-white text-2xl" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGridVideos;
