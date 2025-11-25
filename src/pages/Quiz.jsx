import React from "react";
import { useQuiz } from "../hooks/useQuiz";

export default function Quiz() {
    const {
        currentIndex,
        selectedOption,
        setSelectedOption,
        currentQuestion,
        handleNext,
        questions,
    } = useQuiz();

    return (
        <div className="container" style={{ padding: 20 }}>
            <h2>UQuiz?</h2>

            <p style={{ marginTop: 12, fontWeight: 600 }}>
                문제 {currentIndex + 1} / {questions.length}
            </p>

            <p style={{ fontSize: 18, marginTop: 16 }}>
                {currentQuestion.question}
            </p>

            {/* 옵션 카드 스타일 */}
            <div style={{ marginTop: 12 }}>
                {currentQuestion.options.map((opt, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedOption(idx)}
                        style={{
                            padding: "12px 16px",
                            marginBottom: 10,
                            borderRadius: 10,
                            border: selectedOption === idx ? "2px solid #4a73ff" : "1px solid #ddd",
                            background: selectedOption === idx ? "#e8f0ff" : "#f7f7f7",
                            cursor: "pointer"
                        }}
                    >
                        {opt}
                    </div>
                ))}
            </div>

            <button
                onClick={handleNext}
                style={{
                    marginTop: 20,
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "#4a73ff",
                    color: "white",
                    border: "none",
                    fontSize: 16
                }}
            >
                {currentIndex === questions.length - 1 ? "결과 보기" : "다음"}
            </button>
        </div>
    );
}
