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
        <div className="container" style={{ padding: 20 }}>
            <h2>{nickname}의 퀴즈</h2>
            <p style={{ marginTop: 12, fontWeight: 600 }}>
                문제 {currentIndex + 1} / {questions.length}
            </p>

            <div style={{ marginTop: 16 }}>
                <p style={{ fontSize: 18 }}>{currentQuestion.question}</p>

                <div style={{ textAlign: "left", marginTop: 12 }}>
                    {currentQuestion.options.map((opt, idx) => (
                        <div key={idx} style={{ margin: "8px 0" }}>
                            <label style={{ cursor: "pointer" }}>
                                <input
                                    type="radio"
                                    name="option"
                                    checked={selectedOption === idx}
                                    onChange={() => setSelectedOption(idx)}
                                />{" "}
                                {opt}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleNext} style={{ marginTop: 20 }}>
                {currentIndex === questions.length - 1 ? "결과 보기" : "다음"}
            </button>
        </div>
    );
}
