const choices = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultMessage = document.getElementById('resultMessage');
const playAgainButton = document.getElementById('playAgain');


function getComputerChoice() 
{
  const choices = ['🪨 Rock', '📄 Paper', '✂️ Scissors'];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function getResult(playerChoice, computerChoice) 
{
  switch (true) 
  {
    case (playerChoice === computerChoice):
        return 'It\'s a tie!';
    case (playerChoice === '🪨 Rock' && computerChoice === '✂️ Scissors'):
    case (playerChoice === '📄 Paper' && computerChoice === '🪨 Rock'):
    case (playerChoice === '✂️ Scissors' && computerChoice === '📄 Paper'):
        return 'You win!';
    default:
        return 'You lose!';
  }
}

function handleChoice(playerChoice) 
{
  const computerChoice = getComputerChoice();

  playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;

  const result = getResult(playerChoice, computerChoice);
  resultMessage.textContent = result;

  playAgainButton.style.display = 'block';
}

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.textContent;
    handleChoice(playerChoice);
  });
});

playAgainButton.addEventListener('click', () => {
 
  playerChoiceDisplay.textContent = '';
  computerChoiceDisplay.textContent = '';
  resultMessage.textContent = '';

  playAgainButton.style.display = 'none';
});
