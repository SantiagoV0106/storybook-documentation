import PropTypes from "prop-types";
import "./button.css";

const Button = ({ label, variant, onClick }) => {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
};

export default Button;