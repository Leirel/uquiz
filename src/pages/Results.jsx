import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Results() {
    const { nickname } = useParams();

    return (
        <div style={{ padding: 20 }}>
            <h2>{nickname}의 퀴즈 결과</h2>
            <p>퀴즈 결과가 여기에 표시됩니다.(예시 페이지)</p>
            
            <Link to="/">처음으로</Link>
        </div>
    );
}