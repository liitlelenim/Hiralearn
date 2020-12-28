import "./OptionsMenu.scss";

const OptionsView = ({ display, setKanaToLearn, kanaToLearn }) => {
  if (display) {
    return (
      <div className="options-view app-window">
        <h2>Settings</h2>
        <form>
          <label htmlFor="kana-choose">
            Which alphabet do you want to learn?
          </label>
          <select
            id="kana-choose"
            onChange={(e) => setKanaToLearn(e.target.value)}
            value={kanaToLearn}
          >
            <option>Hiragana</option>
            <option>Katakana</option>
          </select>
        </form>
      </div>
    );
  } else {
    return null;
  }
};
export default OptionsView;
