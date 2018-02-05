const startBtn = document.getElementById('startBtn')
const playBtn = document.getElementById('playBtn')
const nameForm = document.getElementById('nameForm')
const gameScreen = document.getElementById('gameScreen')
var name

gameScreen.style.display = 'none'


startBtn.addEventListener('click', function (event){
    event.preventDefault()

    name = document.getElementById('nameInput').value
    console.log(name)
    if(!name){
        alert("needs a name to proceed")
    }else{
        gameScreen.style.display = 'block'
        nameForm.style.display = 'none'
    }
})
playBtn.addEventListener('click', function(event){
    event.preventDefault()

    var playerChoice = document.getElementById('rps').value
    var cpuChoice = generateChoice();
    
    if(playerChoice == 'rock'){
        if(cpuChoice == 'rock'){
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; draw. <br/>')
        }else if(cpuChoice == 'paper'){
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; computer wins. <br/>')
        }else{
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; ' + name + ' wins. <br/>')
        }
    }else if(playerChoice == 'paper'){
        if(cpuChoice == 'paper'){
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; draw. <br/>')
        }else if(cpuChoice == 'scissors'){
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; computer wins. <br/>')
        }else{
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; ' + name + ' wins. <br/>')
        }
    }else{
        if(cpuChoice == 'scissors'){
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; draw. <br/>')
        }else if(cpuChoice == 'rock'){
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; computer wins. <br/>')
        }else{
            $('#outputList').append('Computer chose ' + cpuChoice + ', ' + name + ' chose ' + playerChoice + '; ' + name + ' wins. <br/>')
        }
    }
})

function generateChoice(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)]
}