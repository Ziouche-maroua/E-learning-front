import React, { useState } from 'react';
import "../../assets/styles/custom.css";

const Chap1quiz = () => {
    const questions = [
        {
            question: "What is a linear combination of vectors?",
            options: ["A sum of vectors", "A product of vectors", "A scalar multiple of a vector", "An inverse of a vector"],
            correctAnswer: "A sum of vectors"
        },
        {
            question: "What does it mean for vectors to be linearly independent?",
            options: ["They are orthogonal to each other", "They cannot be scaled by a scalar", "They cannot be written as a linear combination of each other", "Their magnitudes are equal"],
            correctAnswer: "They cannot be written as a linear combination of each other"
        },
        {
            question: "What is the dimension of a vector space?",
            options: ["The size of the basis", "The number of vectors in the space", "The number of dimensions in the space", "The number of elements in the space"],
            correctAnswer: "The size of the basis"
        },
        {
            question: "What is a basis of a vector space?",
            options: ["A set of vectors that span the space", "A set of linearly dependent vectors", "A set of zero vectors", "A set of orthogonal vectors"],
            correctAnswer: "A set of vectors that span the space"
        },
        {
            question: "What is the kernel of a linear transformation?",
            options: ["The image of the transformation", "The set of vectors mapped to the zero vector", "The inverse of the transformation", "The dimension of the transformation"],
            correctAnswer: "The set of vectors mapped to the zero vector"
        },
        {
            question: "What does it mean for a set of vectors to span a vector space?",
            options: ["They are linearly independent", "They are orthogonal to each other", "They can be used to represent any vector in the space", "They have the same magnitude"],
            correctAnswer: "They can be used to represent any vector in the space"
        },
        {
            question: "What is a subspace of a vector space?",
            options: ["A space with fewer dimensions", "A space contained within another space", "A space with more dimensions", "A space orthogonal to the original space"],
            correctAnswer: "A space contained within another space"
        },
        {
            question: "What is the characteristic property of a subspace?",
            options: ["It contains the zero vector", "It spans the entire space", "It is linearly independent", "It contains only non-zero vectors"],
            correctAnswer: "It contains the zero vector"
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
                    <div style={{ marginBottom: '10px' }}>{question.question}</div>
                    {question.options.map((option, optionIndex) => (
                        <div 
                            key={optionIndex} 
                            style={{ 
                                marginBottom: '5px', 
                                border: '1px solid #ccc', 
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
                            <label style={{ marginLeft: '5px' }}>
                                {option}
                            </label>
                            {showAnswers && (
                                <span style={{ marginLeft: '10px', color: answers[index] === question.correctAnswer ? 'green' : 'black' }}>
                                    {answers[index] === option ? (answers[index] === question.correctAnswer ? '✔️' : '❌') : ''}
                                </span>
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

export default Chap1quiz;