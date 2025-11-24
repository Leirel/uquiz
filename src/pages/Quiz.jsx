import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questions from "../data/questions.json";
import { RankingContext } from "../context/RankingContext";

export default function Quiz() {
    const { nickname } = useParams();
    const navigate = useNavigate();
    const { addRanking } = useContext(RankingContext);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answerCounts, setAnswerCounts] = useState(0);

    const currentQuestion = questions[currentIndex];

    const handleNext = () => {
        if (selectedOption === null) {
            alert("선택지를 선택해주세요.");
            return;
        }

        const isCorrect = selectedOption === currentQuestion.answer;
        const newCount = answerCounts + (isCorrect ? 1 : 0);

        if (currentIndex === questions.length - 1) {
            addRanking(nickname, newCount);
            navigate(`/results/${encodeURIComponent(nickname)}`, { state: { score: newCount } });
            return;
        }

        setAnswerCounts(newCount);
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
    };

    return (
        <div
            className="container"
            style={{
                padding: 24,
                maxWidth: 420,
                margin: "0 auto",
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
        >
            <h2 style={{ marginBottom: 10, textAlign: "center" }}>Uquiz?</h2>

            <p style={{ fontWeight: 600, textAlign: "center" }}>
                문제 {currentIndex + 1} / {questions.length}
            </p>

            <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: 18, fontWeight: 600 }}>{currentQuestion.question}</p>

                <div style={{ marginTop: 14 }}>
                    {currentQuestion.options.map((opt, idx) => {
                        const isSelected = selectedOption === idx;

                        return (
                            <div
                                key={idx}
                                onClick={() => setSelectedOption(idx)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "14px 16px",
                                    marginBottom: 10,
                                    borderRadius: 10,
                                    border: isSelected ? "2px solid #1E6BFF" : "1px solid #ddd",
                                    background: isSelected ? "#E8F1FF" : "#f7f7f7",
                                    cursor: "pointer",
                                    transition: "0.2s",
                                }}
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    checked={isSelected}
                                    readOnly
                                    style={{ marginRight: 10 }}
                                />
                                <span>{opt}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button
                onClick={handleNext}
                style={{
                    marginTop: 24,
                    width: "100%",
                    padding: "14px 0",
                    background: "#387bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    fontSize: 16,
                    cursor: "pointer",
                    fontWeight: 600
                }}
            >
                {currentIndex === questions.length - 1 ? "결과 보기" : "다음"}
            </button>
        </div>
    );
}
