import React, { createContext, useEffect, useState } from "react";

export const RankingContext = createContext({
    rankings: [],
    addRanking: () => { },
});

export function RankingProvider({ children }) {
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
            const exists = prev.find((r) => r.nickname === nickname && r.score === score);
            if (exists) return prev;
            return [...prev, { nickname, score }];
        });
    };

    return (
        <RankingContext.Provider value={{ rankings, addRanking }}>
            {children}
        </RankingContext.Provider>
    );
}
