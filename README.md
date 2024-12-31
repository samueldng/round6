# Documentação do Componente `GameBoard`

## Descrição

O componente `GameBoard` implementa a lógica de um jogo inspirado no "Campo Minado", com uma temática do "Squid Game". O objetivo do jogo é evitar escolher números que contenham bombas, enquanto os jogadores têm chances limitadas para tentar evitar a eliminação.

### Funcionalidade:
- **Escolha de Números**: Cada jogador escolhe um número e verifica se ele contém uma bomba.
- **Eliminação de Jogadores**: Se um jogador escolher um número que contenha uma bomba, ele é eliminado.
- **Redistribuição de Chances**: Quando um jogador é eliminado, suas chances restantes são redistribuídas entre os jogadores ativos.
- **Fim de Jogo**: O jogo termina quando dois jogadores são eliminados.

## Estrutura do Código

### Diretiva `use client`

```jsx
"use client"; // Diretiva que marca o componente para ser executado no lado do cliente

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
