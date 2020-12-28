const PreviousAnswerFeedback = ({ outcome, previousQuestion }) => {
  switch (outcome) {
    case "correct": {
      return <h2 className="feedback-correct">Your answer was correct.</h2>;
    }
    case "wrong": {
      return (
        <h2 className="feedback-wrong">
          The correct answer was:
          <br />
          {previousQuestion["Romaji"]}
        </h2>
      );
    }
    default: {
      return <h2>Translate this sign to Romaji...</h2>;
    }
  }
};
export default PreviousAnswerFeedback;
