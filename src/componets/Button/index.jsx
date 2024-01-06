import { StyledButton } from "./style.js";
import PropTypes from "prop-types";

export const Button = ({ label, url }) => {
  return (
    //  <StyledButton>
    //     <a href={url}>{label}</a>
    //  </StyledButton>
    <StyledButton href={url}>{label}</StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
