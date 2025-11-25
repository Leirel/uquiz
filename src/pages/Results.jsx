import React from "react";
import { useNavigate } from "react-router-dom";
import { useResults } from "../hooks/useResults";

export default function Results() {
    const navigate = useNavigate();
    let { nickname, userScore, sortedRankings } = useResults();

    // 비정상 접근 시 기본값
    if (!userScore) userScore = 0;

    return (
        <div className="container" style={{ padding: 20 }}>
            <h2>🎉 퀴즈 결과</h2>

            <p style={{ marginTop: 12 }}>
                <strong>{nickname}</strong>님의 점수는{" "}
                <strong>{userScore}</strong>점입니다.
            </p>

            <h3 style={{ marginTop: 20 }}>🏆 Top 랭킹</h3>

            <table
                style={{
                    width: "100%",
                    marginTop: 12,
                    borderCollapse: "collapse",
                    background: "#f7f7f7",
                    borderRadius: 8,
                    overflow: "hidden"
                }}
            >
                <thead>
                    <tr style={{ background: "#eee" }}>
                        <th style={{ padding: 10 }}>순위</th>
                        <th>ID</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedRankings.map((r, i) => (
                        <tr key={i} style={{ textAlign: "center" }}>
                            <td style={{ padding: 10 }}>{i + 1}</td>
                            <td>{r.nickname}</td>
                            <td>{r.score} / 10</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button
                onClick={() => navigate("/")}
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
                다시하기
            </button>
        </div>
    );
}
