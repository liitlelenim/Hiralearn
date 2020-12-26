import "./app.scss";
import { randomKana } from "./GuessingMechanics/kana.js";
import SignDisplayer from "./GuessDisplayedComponents/SignDisplayer.js";
import GuessingManager from "./GuessDisplayedComponents/GuessingManager.js";
import { useState } from "react";
import PreviousAnswerFeedback from "./GuessDisplayedComponents/PreviousAnswerFeedback.js";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(randomKana());
  const [correctAnswersAmount, setCorrectAnswersAmount] = useState(0);
  const [wrongAnswersAmount, setWrongAnswersAmount] = useState(0);
  const [previousAnswer, setPreviousAnswer] = useState({
    outcome: "",
    kana: undefined,
  });
  const guess = (inputEle) => {
    if (inputEle.value !== "") {
      if (
        currentQuestion["Romaji"].toLowerCase() === inputEle.value.toLowerCase()
      ) {
        setCorrectAnswersAmount(correctAnswersAmount + 1);
        setPreviousAnswer({ outcome: "correct", kana: currentQuestion });
      } else {
        setWrongAnswersAmount(wrongAnswersAmount + 1);
        setPreviousAnswer({ outcome: "wrong", kana: currentQuestion });
      }
      inputEle.value = "";
      setCurrentQuestion(randomKana());
      inputEle.focus();
    }
  };
  return (
    <main>
      <div className="guessing-container">
        <SignDisplayer sign={currentQuestion["Hiragana"]} />
        <PreviousAnswerFeedback
          outcome={previousAnswer.outcome}
          previousQuestion={previousAnswer.kana}
        />
        <GuessingManager
          guess={guess}
          correctAnswersAmount={correctAnswersAmount}
          wrongAnswersAmount={wrongAnswersAmount}
        />
      </div>
    </main>
  );
}

export default App;
