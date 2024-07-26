// src/components/ChatIcon.jsx

import React, { useState } from 'react';
// import ChatWindow from './ChatWindow';
import { PiChatsCircleDuotone  } from "react-icons/pi";

const ChatIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatWindow = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div
                className="fixed bottom-5 z-30 right-5 bg-gradient-to-r from-[#4546ED] to-[#272887] hover:w-14 duration-200 hover:h-14 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg cursor-pointer text-3xl"
                onClick={toggleChatWindow}
            >
                <PiChatsCircleDuotone  />
            </div>
            {/* {isOpen && <ChatWindow />} */}
        </div>
    );
};

export default ChatIcon;
