const state = {
    // Visualização
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeaft: document.querySelector("#time-leaft"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives"),
        playerCards: document.querySelectorAll(".player-card"),
    },
    // Valores
    value: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 20,
        curretLife: 3,
    },
    // Ações
    actions: {
        timeId: null,
        countDownTimerId: null,
    },
    // Multiplayer
    multiplayer: {
        currentPlayerIndex: 0,
        totalPlayers: 3,
    }
};

function playSound() {
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2;
    audio.play();
}

function countDown() {
    state.value.curretTime--;
    state.view.timeLeaft.textContent = state.value.curretTime;

    if (state.value.curretTime <= 0) {
        alert("O tempo acabou para o Jogador " + (state.multiplayer.currentPlayerIndex + 1));
        nextPlayer();
    }
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.value.hitPosition = randomSquare.id;
}

function nextPlayer() {
    // Para o jogo atual
    clearInterval(state.actions.timeId);
    clearInterval(state.actions.countDownTimerId);

    // Se ainda houver jogadores
    if (state.multiplayer.currentPlayerIndex < state.multiplayer.totalPlayers - 1) {
        state.multiplayer.currentPlayerIndex++;

        // Reset de valores para o próximo
        state.value.curretTime = 20;
        state.value.curretLife = 3;
        state.value.result = 0;

        // Atualiza Visual
        state.view.score.textContent = 0;
        state.view.lives.textContent = "x3";
        state.view.timeLeaft.textContent = 20;

        // Troca o card ativo no ranking
        state.view.playerCards.forEach(card => card.classList.remove("active"));
        state.view.playerCards[state.multiplayer.currentPlayerIndex].classList.add("active");

        alert("Agora é a vez do Jogador " + (state.multiplayer.currentPlayerIndex + 1));
        initIntervals();
    } else {
        alert("Game Over para todos! Verifiquem o Ranking.");
    }
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.value.hitPosition) {
                state.value.result++;
                state.view.score.textContent = state.value.result;
                state.value.hitPosition = null;
                playSound();

                // Atualiza o card de ranking
                const activeCard = state.view.playerCards[state.multiplayer.currentPlayerIndex];
                activeCard.querySelector("span").textContent = `P${state.multiplayer.currentPlayerIndex + 1}: ${state.value.result} pontos`;
            } else {
                // Diminui a vida se errar o clique
                state.value.curretLife--;
                state.view.lives.textContent = "x" + state.value.curretLife;

                if (state.value.curretLife <= 0) {
                    alert("Você perdeu todas as vidas!");
                    nextPlayer();
                }
            }
        });
    });
}

function initIntervals() {
    state.actions.timeId = setInterval(randomSquare, state.value.gameVelocity);
    state.actions.countDownTimerId = setInterval(countDown, 1000);
}

function initialize() {
    addListenerHitBox();
    initIntervals();
}

initialize();