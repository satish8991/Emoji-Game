/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    isGameOn: true,
    winningStatus: false,
    idList: [],
    score: 0,
    scoreList: [],
    emojisList: this.props,
  }

  updateEmojisList = id => {
    const {emojisList, idList, score} = this.state
    if (score === 12) {
      this.setState({winningStatus: true})
    }
    this.setState({emojisList})
    if (idList.includes(id)) {
      this.setState(prevState => ({
        idList: [],
        scoreList: [...prevState.scoreList, prevState.score],
        isGameOn: false,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        idList: [...prevState.idList, id],
      }))
    }
  }

  gameOnContainer = () => {
    const {emojisList} = this.props
    return (
      <ul className="emoji-container">
        {emojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            shuffledEmojisList={this.updateEmojisList}
          />
        ))}
      </ul>
    )
  }

  backTOGame = () => {
    this.setState({isGameOn: true, score: 0})
  }

  render() {
    const {emojisList} = this.props
    const {score, scoreList, isGameOn, winningStatus} = this.state
    emojisList.sort(() => Math.random() - 0.5)
    const topScore = Math.max(...scoreList)
    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} />
        {isGameOn ? (
          this.gameOnContainer()
        ) : (
          <WinOrLoseCard
            score={score}
            winningStatus={winningStatus}
            backTOGame={this.backTOGame}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
