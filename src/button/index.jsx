import "./button.css";

function Button({ colorText, text }) {
  return (
    <button
      className="button"
      style={{ color: colorText, borderColor: colorText }}
    >
      {text}
    </button>
  );
}

export default Button;
