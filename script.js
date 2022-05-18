

(()=>{
    let possibilities = [
        {
            'user' : '0',
            'computer': '0',
            'winner' : 'Tie'
        },
    ]
    let userChoiceBtns = document.querySelectorAll('.user-choice');
    userChoiceBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            let usersChoice = btn.value;
            let computerChoice = Math.floor(Math.random()*5);
            if (usersChoice == computerChoice){
                console.log('Tie');
            }

        })
    })

})();