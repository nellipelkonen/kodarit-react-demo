import React from "react";

export const ScoreBoard = ({ scores, isXChance}) => {
    const {xScore, oScore} = scores;
    
    return(
        <div className="scoreboard">
            <span className={`score x-score ${!isXChance && "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${isXChance && "inactive"}`}>O - {oScore}</span>
        </div>
    )
}
