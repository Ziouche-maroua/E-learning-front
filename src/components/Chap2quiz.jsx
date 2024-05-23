import React, { useState } from 'react';

const Chap2quiz = () => {
    const questions = [
        {
            question: "Which of the following transformations is linear?",
            options: ["Scaling", "Rotation", "Reflection", "Shearing"],
            correctAnswer: "Scaling"
        },
        {
            question: "What is the kernel of the linear transformation f(x) = 3x?",
            options: ["{0}", "{x | x ≠ 0}", "{x | x ≠ 3}", "{x | x ≠ 1}"],
            correctAnswer: "{0}"
        },
        {
            question: "What is the image of the linear transformation f(x) = 3x?",
            options: ["{0}", "R", "R^2", "R^3"],
            correctAnswer: "R"
        },
        {
            question: "Which property does a linear transformation satisfy?",
            options: ["Additivity", "Associativity", "Commutativity", "Distributivity"],
            correctAnswer: "Additivity"
        },
        {
            question: "What type of linear transformation is an isomorphism?",
            options: ["Surjective", "Injective", "Bijective", "Endomorphism"],
            correctAnswer: "Bijective"
        },
        {
            question: "What is the dimension of the kernel of an injective linear transformation?",
            options: ["0", "1", "2", "Depends on the transformation"],
            correctAnswer: "0"
        },
        {
            question: "What is the dimension of the image of a surjective linear transformation?",
            options: ["0", "1", "2", "Depends on the transformation"],
            correctAnswer: "2"
        },
        {
            question: "What is the characteristic property of an endomorphism?",
            options: ["Maps a vector space to itself", "Is invertible", "Is surjective", "Is injective"],
            correctAnswer: "Maps a vector space to itself"
        },
        // New questions
        {
            question: "Which of the following transformations preserves angles?",
            options: ["Scaling", "Shearing", "Rotation", "Reflection"],
            correctAnswer: "Rotation"
        },
        {
            question: "What is the kernel of the linear transformation f(x, y) = (2x - y, x + y)?",
            options: ["{(0, 0)}", "{(x, y) | x = y}", "{(x, y) | x = 2y}", "{(x, y) | y = 2x}"],
            correctAnswer: "{(x, y) | x = 2y}"
        },
        {
            question: "What is the image of the linear transformation f(x, y) = (x + y, y)?",
            options: ["{(0, 0)}", "{(x, y) | x = y}", "{(x, y) | y = 0}", "{(x, y) | x = 0}"],
            correctAnswer: "{(x, y) | y = 0}"
        }
    ];

    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [showAnswers, setShowAnswers] = useState(false);

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const checkAnswers = () => {
        setShowAnswers(true);
    };

    const calculateScore = () => {
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                score++;
            }
        });
        return score;
    };

    return (
        <div>
            {questions.map((question, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>{question.question}</div>
                    {question.options.map((option, optionIndex) => (
                        <div 
                            key={optionIndex} 
                            style={{ 
                                marginBottom: '5px', 
                                padding: '5px', 
                                borderRadius: '5px',
                                backgroundColor: showAnswers 
                                    ? (answers[index] === option 
                                        ? (answers[index] === question.correctAnswer 
                                            ? 'rgba(144, 238, 144, 0.3)' 
                                            : 'rgba(255, 182, 193, 0.3)')
                                        : (option === question.correctAnswer 
                                            ? 'rgba(144, 238, 144, 0.3)' 
                                            : ''))
                                    : '' 
                            }}
                        >
                            <input
                                type="radio"
                                name={`option-${index}`}
                                value={option}
                                checked={answers[index] === option}
                                onChange={() => handleAnswerChange(index, option)}
                                disabled={showAnswers}
                            />
                            <label style={{ marginLeft: '5px' }}>{option}</label>
                            {showAnswers && answers[index] === question.correctAnswer && (
                                <span style={{ marginLeft: '10px', color: 'green' }}>✔️</span>
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={checkAnswers} style={{ marginTop: '20px', backgroundColor: '#007bff', color: '#ffffff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Check Answers</button>
            {showAnswers && (
                <div style={{ marginTop: '20px', fontSize: '20px' }}>
                    Total points: {calculateScore()} 😊
                </div>
            )}
        </div>
    );
};

export default Chap2quiz;
