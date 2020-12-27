import { useEffect } from "react";
import "./GuessingManager.scss";
const GuessingManager = (props) => {
  useEffect(() => {
    window.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        document.querySelector("#submit-answer-btn").click();
      }
    });
  }, []);
  return (
    <div className="guessing-manager-container">
      <input
        autoComplete="off"
        id="answer-input"
        type="text"
        placeholder="your answer..."
      ></input>
      <button
        id="submit-answer-btn"
        onClick={() => {
          props.guess(document.querySelector("#answer-input"));
        }}
      >
        Submit answer
      </button>
      <div>
        <h2 className="correct-answers-amount">{props.correctAnswersAmount}</h2>
        <h2 className="wrong-answers-amount">{props.wrongAnswersAmount}</h2>
      </div>
    </div>
  );
};

export default GuessingManager;
