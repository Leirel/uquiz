import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    const handleStart = (e) => {
        e?.preventDefault?.();
        const name = nickname.trim();
        if (!name) {
            alert("낙네임을 입력해주세요.");
            return;
        }
        navigate(`/quiz/${encodeURIComponent(name)}`);
    };

    return (
        <div className="container" style={{ padding: 20 }}>
            <h1>UQuiz</h1>

            <form onSubmit={handleStart}>
                <input
                id="nickname"
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임을 입력하세요"
                maxLength={20}
                style={{ display: "block", margin: "8px 0", padding: "8px" }}
                />
                <button type="submit" style={{ padding: "8px 16px" }}>
                시작하기
                </button>
            </form>
        </div>
    );
}