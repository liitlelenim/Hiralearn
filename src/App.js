import "./app.scss";
import { randomKana } from "./GuessingMechanics/kana.js";
import SignDisplayer from "./GuessDisplayedComponents/SignDisplayer.js";
import GuessingManager from "./GuessDisplayedComponents/GuessingManager.js";
import { useEffect, useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(randomKana());
  const [correctAnswersAmount, setCorrectAnswersAmount] = useState(0);
  const [wrongAnswersAmount, setWrongAnswersAmount] = useState(0);
  const guess = (inputEle) => {
    if (inputEle.value !== "") {
      if (
        currentQuestion["Romaji"].toLowerCase() === inputEle.value.toLowerCase()
      ) {
        setCorrectAnswersAmount(correctAnswersAmount + 1);
      } else {
        setWrongAnswersAmount(wrongAnswersAmount + 1);
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
