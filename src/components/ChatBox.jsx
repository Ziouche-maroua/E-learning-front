import React, { useState, useEffect } from 'react';

const Chatbox = () => {
    const [state, setState] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // List of questions about matrices, linear transformations, and vectors with their responses
    const matrixQuestions = [
        { question: "What is a matrix?", response: "A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns." },
        { question: "What is matrix multiplication?", response: "Matrix multiplication is a binary operation that produces a matrix from two matrices. It is defined if and only if the number of columns of the first matrix is equal to the number of rows of the second matrix." },
        { question: "What is a linear transformation?", response: "A linear transformation is a mapping between two vector spaces that preserves the operations of vector addition and scalar multiplication." },
        { question: "What is a vector?", response: "A vector is a quantity or phenomenon that has two independent properties: magnitude and direction. Vectors are often represented as arrows in a coordinate space." }
        // Add more questions and responses as needed
    ];

    useEffect(() => {
        // Initialize messages with welcome message
        setMessages([{ name: "BOT", message: "Welcome to FikrSight! How can we assist you today?" }]);
    }, []);

    const toggleState = () => {
        setState(!state);
    };

    const onSendButton = () => {
        if (inputValue === "") return;

        // Check if the user's question matches any suggested question
        const matchedQuestion = matrixQuestions.find(question => inputValue.toLowerCase().includes(question.question.toLowerCase()));

        // If a suggested question is found, suggest it to the user without showing its response
        if (matchedQuestion) {
            const suggestion = `Did you mean: "${matchedQuestion.question}"?`;
            setMessages(prevMessages => [...prevMessages, { name: "BOT", message: suggestion }]);
        } else {
            // Save the user's question and response for future reference
            setMessages(prevMessages => [...prevMessages, { name: "User", message: inputValue }]);
            setIsTyping(true);

            // Simulate a bot response with a delay
            setTimeout(() => {
                let botMessage = { name: "BOT", message: "Your question will be replied soon." };
                setMessages(prevMessages => [...prevMessages, botMessage]);
                setIsTyping(false);
            }, 1000); // 1 second delay
        }
        setInputValue('');
    };

    const handleQuestionClick = (question) => {
        // Find the corresponding response for the clicked question
        const matchedResponse = matrixQuestions.find(q => q.question === question)?.response;

        if (matchedResponse) {
            // Show the clicked question as a user message, followed by the response
            setMessages(prevMessages => [
                ...prevMessages,
                { name: "User", message: question },
                { name: "BOT", message: matchedResponse }
            ]);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-96 flex flex-col items-end">
            {state && (
                <div className="flex flex-col bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden max-h-[32rem] w-full mb-4">
                    <div className="flex items-center p-2 bg-yellow-200 text-white">
                        <span className="text-lg text-gray-700  font-semibold">FikrSight</span>
                    </div>
                    <div className="flex-1 p-2 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 p-2 rounded-xl ${msg.name === "User" ? 'bg-yellow-200 text-semibold text-gray-900 self-end' : 'bg-gray-200 text-black self-start'}`}>
                                {msg.message}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-center items-center">
                                <span className="w-2 h-2 mx-1 bg-yellow-200 rounded-full animate-blink"></span>
                                <span className="w-2 h-2 mx-1 bg-yellow-200 rounded-full animate-blink"></span>
                                <span className="w-2 h-2 mx-1 bg-yellow-200 rounded-full animate-blink"></span>
                            </div>
                        )}
                    </div>
                    <div className="p-3 flex items-center border-t border-gray-300 bg-yellow-100">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyUp={e => e.key === 'Enter' && onSendButton()}
                            className="flex-1 p-2 border border-gray-300 rounded"
                            placeholder="Type a message..."
                        />
                        <button onClick={onSendButton} className="ml-2 bg-yellow-200 text-gray-700 p-2 cursor-pointer rounded-lg">Send</button>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-2 border-t border-gray-300">
                            <span className="font-semibold">Suggested Questions:</span>
                            <div className="mt-2">
                                {matrixQuestions.map((question, index) => (
                                    <div key={index} className="cursor-pointer hover:underline" onClick={() => handleQuestionClick(question.question)}>
                                        {question.question}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <button 
                onClick={toggleState} 
                className="bg-yellow-200 text-gray-700 py-1 px-2 rounded w-20 h-8 text-xs flex justify-center items-center"
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