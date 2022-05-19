

(()=>{
    let possibilities = [
        {
            'user' : '0',
            'computer': '2',
        },
        {
            'user' : '0',
            'computer': '3',
        },
        {
            'user' : '1',
            'computer': '0',
        },
        {
            'user' : '1',
            'computer': '4',
        },
        {
            'user' : '2',
            'computer': '3',
        },
        {
            'user' : '2',
            'computer': '1',
        },
        {
            'user' : '3',
            'computer': '1',
        },
        {
            'user' : '3',
            'computer': '4',
        },
        {
            'user' : '4',
            'computer': '0',
        },
        {
            'user' : '4',
            'computer': '2',
        },
    ];
    let rockPaperArr = ['Rock' , 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let computerChoiceTag = document.getElementById('computerChoice');
    let userScoreTag = document.getElementById('userScore');
    let computerScoreTag = document.getElementById('compScore');
    let winnerTag = document.getElementById('winner');
    let userScore = 0;
    let computerScore = 0;
    winnerTag.innerText = `Start Playing!`
    userScoreTag.innerText = `Your score : ${userScore}\/5`;
    computerScoreTag.innerText = `Computer's score : ${computerScore}\/5`;
    let userWin = false;
    let userChoiceBtns = document.querySelectorAll('.user-choice');
    userChoiceBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            let usersChoice = btn.value;
            let computerChoice = Math.floor(Math.random()*5);
            computerChoiceTag.innerText = rockPaperArr[computerChoice];
            //console.log(computerChoice)
            if (usersChoice == computerChoice){
                console.log(rockPaperArr[computerChoice])
                console.log('Tie');
                winnerTag.innerHTML=`Tie`;
            }else {
                let found = possibilities.find(({user , computer})=> user == usersChoice && computer == computerChoice);
                if (found == undefined){
                    console.log(rockPaperArr[computerChoice])
                    console.log('computer wins')
                    computerScore++;
                }else {
                    console.log(rockPaperArr[computerChoice])
                    console.log('user wins')
                    userScore++;
                    userWin = true;
                }
                displayTheWinner()
            }

        })
    })
    const displayTheWinner = ()=> {
        if (userScore == 5 || computerScore == 5){
            if(userScore > computerScore){
                winnerTag.innerHTML=`You are the Final winner! The scores are reset now!`;
                userScore = 0 ;
                computerScore = 0;
                userScoreTag.innerText = `Your score : ${userScore}\/5`;
                computerScoreTag.innerText = `Computer's score : ${computerScore}\/5`;
                userWin = false;
            }else{
                winnerTag.innerHTML=`Computer is the Final winner! The scores are reset now!`;
                userScore = 0 ;
                computerScore = 0;
                userScoreTag.innerText = `Your score : ${userScore}\/5`;
                computerScoreTag.innerText = `Computer's score : ${computerScore}\/5`;
                userWin = false;
            }
        }else if (userWin==true){
            winnerTag.innerHTML=`This round's winner is YOU!`;
            userScoreTag.innerText = `Your score : ${userScore}\/5`;
            computerScoreTag.innerText = `Computer's score : ${computerScore}\/5`;
            userWin = false;
        }else {
            winnerTag.innerHTML=`This round's winner is Computer!`;
            userScoreTag.innerText = `Your score : ${userScore}\/5`;
            computerScoreTag.innerText = `Computer's score : ${computerScore}\/5`;
        }
    }

})();