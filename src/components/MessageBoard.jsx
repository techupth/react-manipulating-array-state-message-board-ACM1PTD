import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [messageTexts, setMessageTexts] = useState('');

  const handleNewMessageTexts = (event) => {
    setMessageTexts(event.target.value)
  }

  const handleNewMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(messageTexts);
    setMessage(newMessage);
  }

  const handleDeleteMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex, 1);
    setMessage(newMessage);
  }




  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleNewMessage}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleNewMessageTexts}
            value={messageTexts}
          />
        </label>
        <button className="submit-message-button" type="submit">Submit</button>
      </form>
      <div className="board">
        {message.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => handleDeleteMessage(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
