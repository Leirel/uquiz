import React, { useContext, useMemo, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RankingContext } from "../context/RankingContext";

export default function Results() {
    const { nickname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { rankings, addRanking } = useContext(RankingContext);

    const stateScore = location.state?.score;

    useEffect(() => {
        if (typeof stateScore === "number") {
            addRanking(nickname, stateScore);
        }
    }, [stateScore, nickname, addRanking]);

    const userScore = stateScore ?? rankings.find((r) => r.nickname === nickname)?.score;

    const sortedRankings = useMemo(
        () => [...rankings].sort((a, b) => b.score - a.score),
        [rankings]
    );

    return (
        <div className="container" style={{ padding: 20 }}>
            <h2>🎉 퀴즈 결과</h2>

            {typeof userScore === "number" ? (
                <p style={{ marginTop: 12 }}>
                    <strong>{nickname}</strong>님의 점수는 <strong>{userScore}</strong>점입니다.
                </p>
            ) : (
                <p style={{ marginTop: 12 }}>결과 정보를 불러올 수 없습니다.</p>
            )}

            <h3 style={{ marginTop: 20 }}>🏆 Top 랭킹</h3>
            <ol style={{ textAlign: "left", marginTop: 8 }}>
                {sortedRankings.map((r, i) => (
                    <li key={`${r.nickname}-${i}`}>
                        {r.nickname} — {r.score}점
                    </li>
                ))}
            </ol>

            <div style={{ marginTop: 20 }}>
                <button onClick={() => navigate("/")}>다시하기</button>
            </div>
        </div>
    );
}
