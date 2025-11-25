import React from "react";
import { useHome } from "../hooks/useHome";

export default function Home() {
    const { nickname, setNickname, handleStart } = useHome();

    return (
        <div className="container" style={{ padding: 20 }}>
            <h1>UQuiz?</h1>

            <form onSubmit={handleStart}>
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="닉네임을 입력하세요"
                    maxLength={20}
                    style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        boxSizing: "border-box"
                    }}
                />

                <button
                    type="submit"
                    style={{
                        marginTop: 12,
                        width: "100%",
                        padding: "12px 16px",
                        background: "#4a73ff",
                        color: "white",
                        border: "none",
                        borderRadius: 8,
                        fontSize: 16
                    }}
                >
                    시작하기
                </button>
            </form>
        </div>
    );
}
