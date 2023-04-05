import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  let realScore
  if (topScore === -Infinity) {
    realScore = 0
  } else {
    realScore = topScore
  }
  return (
    <div className="navbar">
      <div className="left-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="right-container">
        <p className="para">Score: {score}</p>
        <p className="para">Top Score: {realScore}</p>
      </div>
    </div>
  )
}

export default NavBar
