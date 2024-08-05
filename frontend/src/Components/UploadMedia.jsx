import React, { useState } from 'react';
import ImageForm from './ImageForm';
import VideoForm from './VideoForm';
import AudioForm from './AudioForm';
import TemplateForm from './TemplateForm';

function UploadMedia() {
    const [media, setMedia] = useState('images');
    
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center items-center my-10 p-1 md:gap-5 gap-1 rounded-full border text-white">
                <button onClick={() => setMedia('images')} className='bg-gradient-to-r from-[#4546ED] to-[#272887] p-2 md:px-6 text-sm font-krona rounded-full hover:px-10 md duration-300'>
                    IMAGES
                </button>
                <button onClick={() => setMedia('videos')} className='bg-gradient-to-r from-[#4546ED] to-[#272887] p-2 md:px-6 text-sm font-krona rounded-full hover:px-10 md duration-300'>
                    VIDEOS
                </button>
                <button onClick={() => setMedia('audios')} className='bg-gradient-to-r from-[#4546ED] to-[#272887] p-2 md:px-6 text-sm font-krona rounded-full hover:px-10 md duration-300'>
                    AUDIOS
                </button>
                <button onClick={() => setMedia('templates')} className='bg-gradient-to-r from-[#4546ED] to-[#272887] p-2 md:px-6 text-sm font-krona rounded-full hover:px-10 md duration-300'>
                    TEMPLATES
                </button>
            </div>
            {
                media === 'images' && <ImageForm />
            }
            {
                media === 'videos' && <VideoForm />
            }
            {
                media === 'audios' && <AudioForm />
            }
            {
                media === 'templates' && <TemplateForm />
            }
        </div>
    );
}

export default UploadMedia;
