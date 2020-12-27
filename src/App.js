import "./app.scss";
import { useEffect, useState } from "react";
import { randomKana } from "./GuessingMechanics/kana.js";
import Header from "./Header.js";
import SignDisplayer from "./GuessDisplayedComponents/SignDisplayer.js";
import GuessingManager from "./GuessDisplayedComponents/GuessingManager.js";
import PreviousAnswerFeedback from "./GuessDisplayedComponents/PreviousAnswerFeedback.js";
import OptionsView from "./OptionsMenu/OptionsView.js";

const App = () => {
  const [correctAnswersAmount, setCorrectAnswersAmount] = useState(0);
  const [wrongAnswersAmount, setWrongAnswersAmount] = useState(0);
  const [previousAnswer, setPreviousAnswer] = useState({
    outcome: "",
    kana: undefined,
  });
  const [displaySettingsWindow, setDisplayOfSettingsWindow] = useState(false);
  const [kanaToLearn, setKanaToLearn] = useState("Hiragana");
  const [currentQuestion, setCurrentQuestion] = useState(
    randomKana(kanaToLearn)
  );
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
  const toggleSettingsWindow = () => {
    setDisplayOfSettingsWindow(!displaySettingsWindow);
    document
      .querySelector(".settings-btn")
      .setAttribute("toggle", displaySettingsWindow);
  };
  useEffect(() => {
    setCorrectAnswersAmount(0);
    setWrongAnswersAmount(0);
    setCurrentQuestion(randomKana());
  }, [kanaToLearn]);
  return (
    <div>
      <Header toggleSettingsWindow={toggleSettingsWindow} />
      <main>
        <div className="guessing-container app-window">
          <SignDisplayer sign={currentQuestion[kanaToLearn]} />
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
        <OptionsView
          display={displaySettingsWindow}
          setKanaToLearn={setKanaToLearn}
          kanaToLearn={kanaToLearn}
        />
      </main>
      <footer>Site created by Jakub Błaszczyk, 2020</footer>
    </div>
  );
};

export default App;
