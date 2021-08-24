import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./label.scss";

export function Label({
  children,
  size,
  className,
  as,
  onClick,
  grey,
  color,
  style,
  ...props
}) {
  return React.createElement(
    as || "label",
    {
      className: cn("label", className, {
        [`label--${size}`]: size,
        [`text--grey${grey}`]: grey,
        [`text--${color}`]: color,
      }),
      style: { ...style, ...propsToStyles(props) },
      onClick,
      ...props,
    },
    children
  );
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["primary", "small"]),
};

Label.defaultProps = {
  size: "primary",
};
