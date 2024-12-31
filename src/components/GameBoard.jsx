"use client";  // Adicionando a diretiva no topo

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const GameBoard = () => {
  const [bombs, setBombs] = useState([]);
  const [players] = useState(['IAGO', 'JONIUTON', 'FRANCIMAR', 'SAMUEL']);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [playerMoves, setPlayerMoves] = useState({
    IAGO: 5,
    JONIUTON: 5,
    FRANCIMAR: 5,
    SAMUEL: 5
  });
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [eliminatedPlayers, setEliminatedPlayers] = useState([]);
  const [activePlayers, setActivePlayers] = useState(['IAGO', 'JONIUTON', 'FRANCIMAR', 'SAMUEL']);

  useEffect(() => {
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setBombs([shuffled[0], shuffled[1]]);
  }, []);

  const redistributeMoves = (eliminatedPlayer, remainingMoves) => {
    const newPlayerMoves = { ...playerMoves };
    delete newPlayerMoves[eliminatedPlayer];

    const remainingPlayers = activePlayers.filter(p => p !== eliminatedPlayer);
    const movesPerPlayer = Math.floor(remainingMoves / remainingPlayers.length);
    const extraMoves = remainingMoves % remainingPlayers.length;

    remainingPlayers.forEach((player, index) => {
      newPlayerMoves[player] += movesPerPlayer + (index < extraMoves ? 1 : 0);
    });

    return newPlayerMoves;
  };

  const handleNumberClick = (number) => {
    if (gameOver || clickedNumbers.includes(number)) return;

    const player = activePlayers[currentPlayer];
    if (playerMoves[player] <= 0) return;

    setClickedNumbers([...clickedNumbers, number]);
    const newPlayerMoves = { ...playerMoves };
    newPlayerMoves[player]--;

    if (bombs.includes(number)) {
      const remainingMoves = newPlayerMoves[player];
      const newEliminatedPlayers = [...eliminatedPlayers, player];
      const newActivePlayers = activePlayers.filter(p => p !== player);

      setEliminatedPlayers(newEliminatedPlayers);
      setActivePlayers(newActivePlayers);
      setPlayerMoves(redistributeMoves(player, remainingMoves));

      if (newEliminatedPlayers.length >= 2) {
        setGameOver(true);
      } else {
        setCurrentPlayer((prev) => (prev + 1) % activePlayers.length);
      }
    } else {
      setPlayerMoves(newPlayerMoves);
      setCurrentPlayer((prev) => (prev + 1) % activePlayers.length);
    }
  };

  const getPlayerStatus = (player) => {
    if (eliminatedPlayers.includes(player)) return 'bg-red-900 opacity-75';
    if (player === activePlayers[currentPlayer]) return 'bg-pink-600';
    return 'bg-gray-700';
  };

  const resetGame = () => {
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setBombs([shuffled[0], shuffled[1]]);
    setClickedNumbers([]);
    setGameOver(false);
    setEliminatedPlayers([]);
    setActivePlayers(['IAGO', 'JONIUTON', 'FRANCIMAR', 'SAMUEL']);
    setCurrentPlayer(0);
    setPlayerMoves({
      IAGO: 5,
      JONIUTON: 5,
      FRANCIMAR: 5,
      SAMUEL: 5
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <Card className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">
          Squid Game - Virada
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {players.map((player) => (
            <div key={player} className={`p-4 rounded-lg ${getPlayerStatus(player)}`}>
              <div className="font-bold">{player}</div>
              <div>
                {!eliminatedPlayers.includes(player) && `Chances: ${playerMoves[player]}`}
                {eliminatedPlayers.includes(player) && ' (Eliminado)'}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number)}
              disabled={clickedNumbers.includes(number) || gameOver}
              className={`h-16 rounded-lg text-2xl font-bold transition-all
                ${clickedNumbers.includes(number) ? 'bg-gray-600 opacity-50' : 'bg-pink-600 hover:bg-pink-700'}
                ${gameOver && bombs.includes(number) ? 'bg-red-600' : ''}`}
            >
              {number}
            </button>
          ))}
        </div>

        {eliminatedPlayers.length > 0 && (
          <div className="text-2xl text-center text-red-500 mb-4 animate-pulse">
            Eliminados: {eliminatedPlayers.join(', ')}
            {gameOver && ' - Fim de Jogo!'}
          </div>
        )}

        {gameOver && (
          <div className="text-xl text-center text-green-500 mb-4">
            Sobreviventes: {activePlayers.join(', ')}
          </div>
        )}

        <button
          onClick={resetGame}
          className="w-full bg-pink-600 hover:bg-pink-700 p-4 rounded-lg font-bold text-xl"
        >
          Reiniciar Jogo
        </button>
      </Card>
    </div>
  );
};

export default GameBoard;
