import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Quiz() {
    const { nickname } = useParams();
    const navigate = useNavigate();

    const finishQuiz = () => {
        navigate(`/results/${encodeURIComponent(nickname)}`);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>{nickname}의 퀴즈</h2>
            <p>퀴즈 내용이 여기에 표시됩니다.(예시 페이지)</p>

            <button onClick={finishQuiz}>결과 보기</button>
        </div>
    );
}