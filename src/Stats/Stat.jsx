import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Box } from "../Box";
import { Heading } from "../Heading";
import { Label } from "../Label";
import { Tooltip } from "../Tooltip";
import Info from "../icons/wireInfo.svg";

import "./stat.scss";

export function Stat({
  label,
  value,
  after,
  size,
  align,
  tooltip,
  tooltipProps,
  className,
  ...props
}) {
  return (
    <Box
      className={cn("stat", className, {
        [`stat--${size}`]: size,
        [`stat--${align}`]: align,
      })}
      direction="vertical"
      {...props}
    >
      <div className="stat__label">
        {typeof label === "string" ? (
          <>
            <Label as="p" m={0} weight="medium" size="small">
              {label}
              {tooltip && (
                <Tooltip content={tooltip} {...tooltipProps}>
                  <Info width="16px" />
                </Tooltip>
              )}
            </Label>
          </>
        ) : (
          label
        )}
      </div>
      <Heading className="stat__value" weight="medium" mb="3px">
        {value}
      </Heading>
      {after && (
        <div className="stat__after">
          {typeof after === "string" ? (
            <Label as="p" weight="medium" size="small" m={0}>
              {after}
            </Label>
          ) : (
            after
          )}
        </div>
      )}
    </Box>
  );
}

Stat.defaultProps = {
  size: "small",
};

Stat.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  after: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
