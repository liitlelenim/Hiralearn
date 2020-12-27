const Header = (props) => {
  return (
    <header>
      <button
        className="settings-btn"
        onClick={() => {
          props.toggleSettingsWindow();
        }}
      ></button>
    </header>
  );
};
export default Header;
