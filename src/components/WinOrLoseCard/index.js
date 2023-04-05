import './index.css'

const WinOrLoseCard = props => {
  const {score, winningStatus, backTOGame} = props
  const imageUrl = winningStatus
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const buttonClicked = () => {
    backTOGame()
  }
  return (
    <div className="winning-status-container">
      <div className="text-container">
        <h1 className="win-heading">
          {winningStatus ? 'You Won' : 'You Lose'}
        </h1>
        <p className="win-para">{winningStatus ? 'Best Score' : 'Score'}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="button" onClick={buttonClicked}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} className="image" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
