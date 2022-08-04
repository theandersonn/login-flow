import PropTypes from 'prop-types';

import './styles.css';

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
