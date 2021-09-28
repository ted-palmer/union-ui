import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Label } from "../Label";

import "./input.scss";

export const Input = forwardRef(
  (
    {
      name,
      label,
      caption,
      placeholder,
      disabled,
      value,
      cta,
      suffix,
      onCaptionClick,
      onChange,
      type,
      error,
    },
    ref
  ) => {
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (event) => {
      setHasValue(event.target.value !== "");
      onChange && onChange(event);
    };

    return (
      <div className={cn("input-wrapper", { "input-wrapper--error": error })}>
        {label && (
          <Label className="input-label" for={name}>
            {label}
          </Label>
        )}
        <div className="input-wrapper__inner">
          <div
            className={cn("input", {
              "input--disabled": disabled,
              "input--has-value": hasValue,
            })}
          >
            <input
              ref={ref}
              type={type}
              name={name}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              placeholder={placeholder}
            />
            {suffix && <div className="input__suffix">{suffix}</div>}
          </div>
          {cta}
        </div>
        {(caption || error) && (
          <Label
            size="small"
            as="p"
            className={cn("input-caption", {
              "input-caption--clickable": !error && onCaptionClick,
            })}
            mt="4px"
            onClick={!error ? onCaptionClick : undefined}
          >
            {error || caption}
          </Label>
        )}
      </div>
    );
  }
);

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  cta: PropTypes.node,
  suffix: PropTypes.string,
  type: PropTypes.oneOf(["text", "number"]),
};

Input.defaultProps = {
  disabled: false,
  cta: null,
  type: "text",
};
