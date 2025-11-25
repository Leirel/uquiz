import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useHome() {
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    const handleStart = (e) => {
        if (e?.preventDefault) e.preventDefault();
        const name = nickname.trim();
        if (!name) {
            alert("닉네임을 입력해주세요.");
            return;
        }
        navigate(`/quiz/${encodeURIComponent(name)}`);
    };

    return { nickname, setNickname, handleStart };
}
