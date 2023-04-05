import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffledEmojisList} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const emojiClicked = () => {
    shuffledEmojisList(id)
  }
  return (
    <li>
      <button type="button" className="emoji" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
