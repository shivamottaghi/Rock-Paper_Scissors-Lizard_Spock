

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
    let userWin = false;
    let userChoiceBtns = document.querySelectorAll('.user-choice');
    userChoiceBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            let usersChoice = btn.value;
            let computerChoice = Math.floor(Math.random()*5);
            console.log(computerChoice)
            if (usersChoice == computerChoice){
                console.log('Tie');
            }
        })
    })

})();