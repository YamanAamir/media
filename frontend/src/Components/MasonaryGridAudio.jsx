import React, { useState } from "react";
import { FaPlay, FaPause, FaShieldAlt, FaMedal, FaClock, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const randomData = [
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://via.placeholder.com/300x50.png?text=Waveform+Image",
  },
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://via.placeholder.com/300x50.png?text=Waveform+Image",
  },
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://via.placeholder.com/300x50.png?text=Waveform+Image",
  },
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://via.placeholder.com/300x50.png?text=Waveform+Image",
  },
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://via.placeholder.com/300x50.png?text=Waveform+Image",
  },
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://via.placeholder.com/300x50.png?text=Waveform+Image",
  },
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://via.placeholder.com/300x50.png?text=Waveform+Image",
  },
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://via.placeholder.com/300x50.png?text=Waveform+Image",
  },
  // Add more random data objects here if needed
];

const MasonaryGridAudio = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = (audioSrc) => {
    if (currentAudio) {
      currentAudio.pause();
      if (currentAudio.src === audioSrc) {
        setIsPlaying(false);
        setCurrentAudio(null);
        return;
      }
    }

    const audio = new Audio(audioSrc);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('ended', () => setIsPlaying(false));
    audio.play()
      .then(() => {
        setCurrentAudio(audio);
        setIsPlaying(true);
        setIsMuted(false);
      })
      .catch((error) => {
        console.error('Failed to play the audio:', error);
      });
  };

  const handleMuteToggle = () => {
    if (currentAudio) {
      currentAudio.muted = !currentAudio.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      {randomData.map((data, index) => (
        <div key={index} className="flex w-full items-center justify-center gap-5 my-5 p-4 border rounded-full shadow-lg">
          <button className="text-blue-600" onClick={() => handlePlayPause(data.audio)}>
            {currentAudio && currentAudio.src === data.audio && isPlaying ? (
              <FaPause size={18} />
            ) : (
              <FaPlay size={18} />
            )}
          </button>
          <img
            src="https://via.placeholder.com/50"
            alt="Album Art"
            className="w-12 h-12 ml-4 rounded-md"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-green-600">{data.title}</h3>
            <div className="flex flex-row items-center justify-center gap-5">
              <p className="text-gray-600">{data.artist}</p>
              <p className="text-white">Price {data.price}</p>
            </div>
          </div>
          <img
            src={data.waveform}
            alt="Waveform"
            className="h-10 mx-4 w-2/5"
          />
          <div className="flex items-center space-x-2 text-gray-500">
            <FaShieldAlt />
            <FaMedal />
            <FaClock />
            <span>{data.duration}</span>
          </div>
          <button className="ml-4 px-3 py-1 text-white bg-blue-600 rounded-md">
            Download
          </button>
          {currentAudio && currentAudio.src === data.audio && (
            <button className="ml-4 px-3 py-1 text-white bg-blue-600 rounded-md" onClick={handleMuteToggle}>
              {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MasonaryGridAudio;
