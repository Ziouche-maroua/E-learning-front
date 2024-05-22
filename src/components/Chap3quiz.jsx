import React, { useState } from 'react';

const Chap3quiz = () => {
    const questions = [
        {
            question: "What is the determinant of the identity matrix?",
            options: ["0", "1", "-1", "Identity matrix has no determinant"],
            correctAnswer: "1"
        },
        {
            question: "Which of the following is NOT a square matrix?",
            options: ["[L1(12)//L2(34)]", "[L1(123)//L2(456)]", "[L1(10)//L2(01)]", "[L1(12)//L2(34)//L3(56)]"],
            correctAnswer: "[L1(123)//L2(456)]"
        },
        {
            question: "Which property does NOT hold for matrix multiplication?",
            options: ["Commutativity", "Associativity", "Distributivity", "Scalar multiplication"],
            correctAnswer: "Commutativity"
        },
        {
            question: "What is the rank of a zero matrix?",
            options: ["0", "1", "Depends on the size of the matrix", "Infinity"],
            correctAnswer: "0"
        },
        {
            question: "Which of the following matrices is orthogonal?",
            options: ["[L1(10) //L2(01)]", "[L1(11)// L2(01)]", "[L1(1−1)//L2( 11)]", "[L1(100)//L2(010)// L3(001)]"],
            correctAnswer: "[L1(100)//L2(010)// L3(001)]"
        },
        {
            question: "Which of the following is NOT a property of the identity matrix?",
            options: ["It is square", "It has 1s on the diagonal", "It has 0s everywhere except on the diagonal", "Its determinant is always 1"],
            correctAnswer: "Its determinant is always 1"
        },
        {
            question: "What is the inverse of a non-square matrix?",
            options: ["It doesn't have an inverse", "It is always the zero matrix", "It is equal to the original matrix", "It is undefined"],
            correctAnswer: "It doesn't have an inverse"
        },
        {
            question: "What does the transpose of a matrix do?",
            options: ["Interchanges rows and columns", "Negates all elements", "Multiplies each element by its row number", "It has no defined operation"],
            correctAnswer: "Interchanges rows and columns"
        },
        {
            question: "Which of the following is true about eigenvalues and eigenvectors?",
            options: ["Eigenvectors can be zero vectors", "Eigenvalues can be complex numbers", "Every matrix has exactly one eigenvector", "Eigenvalues are always positive"],
            correctAnswer: "Eigenvalues can be complex numbers"
        },
        {
            question: "Which property holds for all diagonal matrices?",
            options: ["Their determinant is always 1", "They are always singular", "Their inverse is always the identity matrix", "Their rank is equal to the number of non-zero entries on the diagonal"],
            correctAnswer: "Their rank is equal to the number of non-zero entries on the diagonal"
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

export default Chap3quiz;
