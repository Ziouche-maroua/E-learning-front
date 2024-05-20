import React, { useState } from 'react';

const Chatbox = () => {
    const [state, setState] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const toggleState = () => {
        setState(!state);
    };

    const onSendButton = () => {
        if (inputValue === "") return;

        let newMessage = { name: "User", message: inputValue };
        setMessages([...messages, newMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate a bot response with a delay
        setTimeout(() => {
            let botMessage = { name: "BOT", message: "Your question will be replied soon." };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setIsTyping(false);
        }, 1000); // 1 second delay
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 flex flex-col items-end">
            {state && (
                <div className="flex flex-col bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden max-h-96 w-full mb-4">
                    <div className="flex-1 p-2 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 p-2 rounded-xl ${msg.name === "User" ? 'bg-yellow-400 text-white self-end' : 'bg-gray-200 text-black self-start'}`}>
                                {msg.message}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-center items-center">
                                <span className="w-2 h-2 mx-1 bg-yellow-300 rounded-full animate-blink"></span>
                                <span className="w-2 h-2 mx-1 bg-yellow-300 rounded-full animate-blink"></span>
                                <span className="w-2 h-2 mx-1 bg-yellow-300 rounded-full animate-blink"></span>
                            </div>
                        )}
                    </div>
                    <div className="p-2 flex items-center border-t border-gray-300 bg-yellow-100">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyUp={e => e.key === 'Enter' && onSendButton()}
                            className="flex-1 p-2 border border-gray-300 rounded"
                            placeholder="Type a message..."
                        />
                        <button onClick={onSendButton} className="ml-2 bg-yellow-500 text-white p-2 cursor-pointer rounded-lg">Send</button>
                    </div>
                </div>
            )}
            <button 
                onClick={toggleState} 
                className="bg-yellow-500 text-white py-1 px-2 rounded w-20 h-8 text-xs flex justify-center items-center"
            >
                {state ? 'Close Chat' : 'Open Chat'}
            </button>
            <style>
                {`
                @keyframes blink {
                    0% { opacity: 0.2; }
                    20% { opacity: 1; }
                    100% { opacity: 0.2; }
                }
                .animate-blink {
                    animation: blink 1.4s infinite both;
                }
                `}
            </style>
        </div>
    );
};

export default Chatbox;
