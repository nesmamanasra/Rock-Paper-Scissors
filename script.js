const selectionButtons = document.querySelectorAll('.selection')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTION =[
    {
        name : 'rock',
        emoji : '✊',
        beats : 'scissors'
    },
    {
        name : 'paper',
        emoji : '✋',
        beats : 'rock'
    },
    {
        name : 'scissors',
        emoji : '✌️',
        beats : 'paper'
    }
]

    selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
     const selectionName = selectionButton.dataset.selection
     const selection = SELECTION.find(selection => selection.name === selectionName)
       mackeSelection(selection)
    })
})


function mackeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection,computerSelection)
    const computerWinner = isWinner(computerSelection,selection)
    addSelctionReult(computerSelection,computerWinner)
    addSelctionReult(selection,yourWinner)
    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}
function addSelctionReult(selection,winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner)div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name
}

function randomSelection(){
    const randomIndex=Math.floor(Math.random()*SELECTION.length)
    return SELECTION[randomIndex]
}