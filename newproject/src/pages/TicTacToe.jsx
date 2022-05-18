import React from 'react';
import { useState, useEffect } from "react";
import Square from './Square';
const intialState=['', '', '', '', '', '', '', '', '',]

export const TicTacToe = () => {
    const [gameState, setGameState] = useState(intialState);
    const [isXChance, setIsXChance] = useState(false);
    
    const onSquareClick = (index) =>{
        let strings = Array.from(gameState);
        strings [index] = isXChance ? 'X' : 'O';
        setGameState(strings);
        setIsXChance(!isXChance);

        if (gameState[index] != ''){
            return
        }
    }

    useEffect(() => {
        const winner = checkWinner();
        if(winner){
            alert(`${winner} won the game!`)
            setGameState(intialState)
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    return (
        <div className='maincontent'>
            <div className='game'>
                <p className='gametitle'>Tic-Tac-Toe</p>
                <div className='row rowcenter'>
                    <Square className='b-bottom-right' state={gameState[0]} onClick = { () => onSquareClick(0)}/>
                    <Square className='b-bottom-right' state={gameState[1]} onClick = { () => onSquareClick(1)}/>
                    <Square className='b-bottom' state={gameState[2]} onClick = { () => onSquareClick(2)}/>
                </div>
                <div className='row rowcenter'>
                    <Square className='b-bottom-right' state={gameState[3]} onClick = { () => onSquareClick(3)}/>
                    <Square className='b-bottom-right' state={gameState[4]} onClick = { () => onSquareClick(4)}/>
                    <Square className='b-bottom' state={gameState[5]} onClick = { () => onSquareClick(5)}/>
                </div>
                <div className='row rowcenter'>
                    <Square className='b-right' state={gameState[6]} onClick = { () => onSquareClick(6)}/>
                    <Square className='b-right' state={gameState[7]} onClick = { () => onSquareClick(7)}/>
                    <Square state={gameState[8]} onClick = { () => onSquareClick(8)}/>
                </div>
                <button className='btn-clear btn-clear-game' onClick={()=>setGameState(intialState)}>Clear game</button>
            </div>
        </div>
    );
  }

  export default TicTacToe;