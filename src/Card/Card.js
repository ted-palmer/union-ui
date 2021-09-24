import React, { forwardRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Label } from "../Label";
import { Text } from "../Text";
import { propsToStyles } from "../spacing";

import "./card.scss";

export const Card = forwardRef(
  ({ variant, size, children, className, noGutter, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("card", className, {
          [`card--${size}`]: size,
          [`card--${variant}`]: variant,
          "card--noGutter": noGutter,
        })}
        style={propsToStyles(props)}
      >
        {children}
      </div>
    );
  }
);

function CardHeader({ title, subTitle, align }) {
  return (
    <div
      className={cn("card-header", {
        [`card-header--${align}`]: align,
      })}
    >
      <Text as="h1" size="large" grey={700} weight="medium" m={0}>
        {title}
      </Text>
      {subTitle && <Label as="h2">{subTitle}</Label>}
    </div>
  );
}

function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["center", "left", "right"]),
};

Card.propTypes = {
  variant: PropTypes.oneOf(["primary", "packed", "blue"]),
  size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
};
