import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./input.scss";

export function Input({
  name,
  label,
  caption,
  placeholder,
  disabled,
  value,
  cta,
  suffix,
  onMaxClick,
  onChange,
}) {
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (event) => {
    setHasValue(event.target.value !== "");
    onChange && onChange(event);
  };

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" for={name}>
          {label}
        </label>
      )}
      <div className="input-wrapper__inner">
        <div
          className={cn("input", {
            "input--disabled": disabled,
            "input--has-value": hasValue,
          })}
        >
          <input
            name={name}
            disabled={disabled}
            onChange={handleChange}
            value={value}
          />
          {placeholder && (
            <div className="input__placeholder">{placeholder}</div>
          )}
          {suffix && <div className="input__suffix">{suffix}</div>}
          {onMaxClick && <button className="input__max-button">Max.</button>}
        </div>
        {cta}
      </div>
      {caption && <div className="input-caption">{caption}</div>}
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  cta: PropTypes.node,
  onMaxClick: PropTypes.func,
  suffix: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  cta: null,
};
