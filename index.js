const score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0, 
    ties : 0
   }

   updateScoreElement();

   function selectComputerMove (playerMove) {
        let computerMove = pickComputerMove();

            let result = '';

         if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                result = 'you lose.';
            } else if (computerMove === 'paper') {
                result = 'you win.';
            } else if (computerMove === 'scissors') {
                result = 'tie.';
            }

         }else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                result = 'you win.';
            }else if (computerMove === 'paper') {
                result = 'tie.';
            }else if (computerMove === 'scissors') {
                result = 'you lose.';
            }

         }else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
                result = 'tie.';
            } else if (computerMove === 'paper') {
                result = 'you lose.';
            } else if (computerMove === 'scissors') {
                result = 'you win.';
            }
         }

            if (result === 'you win.') {
                score.wins += 1;
            } else if (result === 'you lose.') {
                score.losses += 1;
            } else if (result === 'tie.') {
                score.ties += 1;
            }

            localStorage.setItem('score',JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-pick').innerHTML =
             `you
            <img src="${playerMove}-emoji.png" alt="" class="play-icon">
            <img src="${computerMove}-emoji.png" alt="" class="play-icon">
            computer`;
            document.querySelector('.js-result').innerHTML = result ;


    }

    function updateScoreElement() {
        document.querySelector('.js-score')
         .innerHTML = `wins:${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    }

     function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
        }
        return computerMove;
            }

