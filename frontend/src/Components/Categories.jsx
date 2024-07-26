import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from "react-icons/fa";
// import Ellipse1 from '../assets/Ellipse-1.svg'

function Categories() {
    const categories = [
        {
            video: "https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4",
            head: 'SUMO',
            title: 'Strlght',
            content: 'Videos',
            des: '300 + High-Quality Footage',
        },
        {
            video: "https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4",
            head: 'ICON',
            title: 'Janset',
            content: 'Images',
            des: '1000 + Stunning Photos',
        },
        {
            video: "https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4",
            head: 'SKULL CRUSJER',
            title: 'Crushy',
            content: 'Audio',
            des: '300 + Professional-Grade Audio',
        },
        {
            video: "https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4",
            head: 'SECOND SLIDE',
            title: 'Yomot!',
            content: 'Templates',
            des: '500 + Customizable Templates',
        }
    ];

    const [isMuted, setIsMuted] = useState(Array(categories.length).fill(true));
    const videoRefs = useRef([]);

    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, categories.length);
    }, [categories.length]);

    const handleMuteUnmute = (index) => {
        const updatedMutedStatus = [...isMuted];
        updatedMutedStatus[index] = !updatedMutedStatus[index];
        setIsMuted(updatedMutedStatus);

        const video = videoRefs.current[index];
        if (video) {
            video.muted = updatedMutedStatus[index];
        }
    };

    return (
        <div className='relative  text-white px-4 pb-10'>
            <div className='py-5'  data-aos="fade-right">
                <h1 className='text-6xl py-4'>Essential Media Categories</h1>
                <p className='text-lg'>Where is your next project ?</p>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 py-5">
                {categories.map((category, index) => (
                    <div key={index} data-aos="fade-up">
                        <div className="rounded-3xl h-[500px] flex justify-center px-3 items-center relative overflow-hidden">
                            <video
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                src={category.video}
                                autoPlay
                                loop
                                muted={isMuted[index]}
                                ref={el => videoRefs.current[index] = el}
                            />
                            <div className="flex justify-start items-center gap-3 p-3 w-full rounded-xl backdrop-blur-xl z-10">
                                <div className="flex justify-center items-center relative">
                                    <button onClick={() => handleMuteUnmute(index)} className='text-3xl'>
                                        {isMuted[index] ? <FaPlay /> : <FaPause />}
                                    </button>
                                </div>
                                <div className='px-2'>
                                    <h1 className='text-2xl'>{category.head}</h1>
                                    <h1 className='text-md'>{category.title}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 font-light">
                            <h1 className="text-3xl">{category.content}</h1>
                            <h1 className="text-sm">{category.des}</h1>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Categories;

