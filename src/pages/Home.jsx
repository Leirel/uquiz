import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    const handleStart = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        const name = nickname.trim();
        if (!name) {
            alert("닉네임을 입력해주세요.");
            return;
        }
        navigate(`/quiz/${encodeURIComponent(name)}`);
    };

    return (
        <div className="container" style={{ padding: 20 }}>
            <h1>UQuiz?</h1>

            <form onSubmit={handleStart} style={{ marginTop: 20 }}>
                <input
                    id="nickname"
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="닉네임을 입력하세요"
                    maxLength={20}
                    style={{
                        width: "100%",
                        padding: "14px 18px",
                        fontSize: 18,
                        borderRadius: 12,
                        border: "1px solid #ccc",
                        boxSizing: "border-box",
                        marginBottom: 16
                    }}
                />
                <button type="submit" style={{ padding: "8px 16px" }}>
                    시작하기
                </button>
            </form>
        </div>
    );
}
