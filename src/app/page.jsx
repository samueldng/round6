// "use client";  // Adicionando a diretiva no topo, para indicar que é um componente de cliente

import React from 'react';
import GameBoard from '../components/GameBoard'; // Usando caminho relativo

export default function Home() {
  return (
    <main>
      <GameBoard />
    </main>
  );
}
