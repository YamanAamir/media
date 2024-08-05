import React, { useState } from "react";
import { FaPlay, FaPause, FaShieldAlt, FaMedal, FaClock, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const randomData = [
  {
    title: "Nightfall / Future Bass Music",
    artist: "SoulProdMusic",
    price: "$55",
    duration: "2:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    waveform: "https://www.dizziland.com/wp-content/uploads/2018/02/audio-wave.gif", // Waveform GIF
  },
  {
    title: "Sunset Dreams",
    artist: "DreamWave",
    price: "$45",
    duration: "3:45",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    waveform: "https://www.dizziland.com/wp-content/uploads/2018/02/audio-wave.gif", // Waveform GIF
  },
  {
    title: "Chill Vibes",
    artist: "CoolTune",
    price: "$60",
    duration: "4:02",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    waveform: "https://www.dizziland.com/wp-content/uploads/2018/02/audio-wave.gif", // Waveform GIF
  },
  // Add more random data objects here if needed
];

const MasonaryGridAudio = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = (audioSrc, waveformSrc) => {
    if (currentAudio) {
      currentAudio.pause();
      if (currentAudio.src === audioSrc) {
        setIsPlaying(false);
        setCurrentAudio(null);
        return;
      }
    }

    const audio = new Audio(audioSrc);
    audio.addEventListener('play', () => {
      setIsPlaying(true);
      setCurrentAudio(audio);
    });
    audio.addEventListener('pause', () => {
      setIsPlaying(false);
    });
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    audio.play()
      .then(() => {
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
    <div className="flex justify-center">
      <div className="w-full">
      {randomData.map((data, index) => (
        <div key={index} className="flex justify-evenly flex-wrap w-full items-center gap-5 my-5 px-2 py-4 md:border rounded-full shadow-lg">
          <button className="left-0 text-blue-600 z-10" onClick={() => handlePlayPause(data.audio, data.waveform)}>
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
            <div className="flex flex-row items-center gap-5">
              <p className="text-gray-600">{data.artist}</p>
              <p className="text-white">Price {data.price}</p>
            </div>
          </div>
          {currentAudio && currentAudio.src === data.audio && isPlaying && (
            <img
              src={data.waveform} // Show waveform GIF only for the playing audio
              alt="Waveform"
              className="h-10 mx-4 w-80"
              style={{ background: 'transparent' }}
            />
          )}
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
            <button className="right-0 ml-4 px-3 py-1 text-white bg-blue-600 rounded-md cursor-pointer z-20" onClick={handleMuteToggle}>
              {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
            </button>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default MasonaryGridAudio;

