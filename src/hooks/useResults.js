import { useLocation, useParams } from "react-router-dom";
import { useContext, useMemo } from "react";
import { RankingContext } from "../context/RankingContext";

export function useResults() {
    const { nickname } = useParams();
    const location = useLocation();
    const { rankings } = useContext(RankingContext);

    const stateScore = location.state?.score;

    const userScore =
        stateScore ??
        rankings.find((r) => r.nickname === nickname)?.score;

    const sortedRankings = useMemo(
        () => [...rankings].sort((a, b) => b.score - a.score),
        [rankings]
    );

    return { nickname, userScore, sortedRankings };
}
