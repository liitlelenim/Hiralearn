const Header = ({ toggleSettingsWindow }) => {
  return (
    <header>
      <button
        className="settings-btn"
        onClick={() => {
          toggleSettingsWindow();
        }}
      ></button>
    </header>
  );
};
export default Header;
