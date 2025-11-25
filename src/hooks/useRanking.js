import { useEffect, useState } from "react";

export default function useRanking() {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        try {
            const raw = localStorage.getItem("rankings");
            if (raw) setRankings(JSON.parse(raw));
        } catch (e) {
            console.error("ranking load error:", e);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem("rankings", JSON.stringify(rankings));
        } catch (e) {
            console.error("ranking save error:", e);
        }
    }, [rankings]);

    const addRanking = (nickname, score) => {
        setRankings((prev) => {
            const exists = prev.find(
                (r) => r.nickname === nickname && r.score === score
            );
            if (exists) return prev;
            return [...prev, { nickname, score }];
        });
    };

    return { rankings, addRanking };
}
