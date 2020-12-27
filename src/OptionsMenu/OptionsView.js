import "./OptionsMenu.scss";

const OptionsView = (props) => {
  if (props.display) {
    return (
      <div className="options-view app-window">
        <h2>Settings</h2>
        <form>
          <label htmlFor="kana-choose">
            Which alphabet do you want to learn?
          </label>
          <select
            id="kana-choose"
            onChange={(e) => props.setKanaToLearn(e.target.value)}
            value={props.kanaToLearn}
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
