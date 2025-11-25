import React from "react";
import { RankingContext } from "./RankingContext";
import useRanking from "../hooks/useRanking";

export function RankingProvider({ children }) {
    const { rankings, addRanking } = useRanking();

    return (
        <RankingContext.Provider value={{ rankings, addRanking }}>
            {children}
        </RankingContext.Provider>
    );
}
