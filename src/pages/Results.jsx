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
            <h1>UQuiz?</h1>
            <h2>🎉 퀴즈 결과</h2>

            {typeof userScore === "number" ? (
                <p style={{ marginTop: 12 }}>
                    <strong>{nickname}</strong>님의 점수 : <strong>{userScore} / 10</strong>
                </p>
            ) : (
                <p style={{ marginTop: 12 }}>결과 정보를 불러올 수 없습니다.</p>
            )}

            <h3 style={{ marginTop: 20 }}>🏆 Top 랭킹</h3>

<table
    style={{
        width: "100%",
        marginTop: "12px",
        borderCollapse: "collapse",
        textAlign: "center",
        background: "#fafafa",
        borderRadius: "8px",
        overflow: "hidden",
    }}
>
    <thead style={{ background: "#eee" }}>
        <tr>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>순위</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>점수</th>
        </tr>
    </thead>

    <tbody>
        {sortedRankings.map((r, i) => (
            <tr key={`${r.nickname}-${i}`}>
                <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{i + 1}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{r.nickname}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                    {r.score} / 10
                </td>
            </tr>
        ))}
    </tbody>
</table>


            <div style={{ marginTop: 20 }}>
                <button onClick={() => navigate("/")}>다시하기</button>
            </div>
        </div>
    );
}
