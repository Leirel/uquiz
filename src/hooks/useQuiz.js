import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questions from "../data/questions.json";
import { RankingContext } from "../context/RankingContext";

export function useQuiz() {
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
        const newScore = answerCounts + (isCorrect ? 1 : 0);

        if (currentIndex === questions.length - 1) {
            addRanking(nickname, newScore);
            navigate(`/results/${nickname}`, { state: { score: newScore } });
            return;
        }

        setAnswerCounts(newScore);
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
    };

    return {
        currentIndex,
        selectedOption,
        setSelectedOption,
        currentQuestion,
        handleNext,
        questions,
    };
}
