# 🕹️ Detona Ralph - Game JS

Este é um projeto de um jogo de "clique no alvo" inspirado no personagem Detona Ralph. O objetivo é acertar o Ralph o maior número de vezes possível dentro do tempo limite, agora com suporte para múltiplos jogadores e sistema de vidas.

## 🚀 Novas Funcionalidades

Nesta versão atualizada, implementei mecânicas avançadas para tornar o jogo mais competitivo e desafiador:

-   **❤️ Sistema de Vidas (HP):** O jogador começa com 3 vidas (x3). Cada clique errado (fora do Ralph) subtrai uma vida. Se as vidas chegarem a zero, o turno do jogador acaba imediatamente.
-   **👥 Modo Multiplayer (Turnos):** Suporte para até 3 jogadores locais. O jogo alterna automaticamente entre os jogadores (P1, P2 e P3) assim que o tempo acaba ou as vidas se esgotam.
-   **🏆 Ranking em Tempo Real:** Um painel que exibe a pontuação de todos os jogadores, destacando visualmente quem é o jogador ativo da rodada.
-   **⏱️ Gerenciamento de Estado:** Refatoração do código para utilizar um objeto `state` centralizado, facilitando a manutenção e escalabilidade.

## 🛠️ Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica e containers de jogo.
-   **CSS3:** Layout responsivo (Flexbox), animações de transição e efeitos visuais de "active player".
-   **JavaScript (ES6+):** Lógica de engine, manipulação de DOM, intervalos (`setInterval`) e gerenciamento de turnos.

## 🎮 Como Jogar

1.  O **Jogador 1** inicia a partida com 20 segundos e 3 vidas.
2.  Clique no Ralph sempre que ele aparecer em um quadrado verde para ganhar 1 ponto.
3.  Cuidado: clicar em um quadrado vazio remove uma vida!
4.  Após o fim do turno do P1, o **Jogador 2** assume, seguido pelo **Jogador 3**.
5.  Ao final de todas as rodadas, o ranking mostrará quem foi o grande vencedor.

Desenvolvido por: Carlos Melo.