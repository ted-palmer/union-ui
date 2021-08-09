import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Label } from "../Label";

import "./bar.scss";

export function Bar({
  percentage,
  label,
  size,
  secondaryBar,
  marker,
  color,
  markerLabel,
}) {
  return (
    <div
      className={cn("bar", {
        [`bar--${size}`]: size,
        "bar--hasMarkerLabel": !!markerLabel,
      })}
    >
      {label && (
        <Label size="small" className="bar-label" as="p">
          {label}
        </Label>
      )}
      <div
        className={cn("bar__indicator", {
          [`bar__indicator--${color}`]: color,
        })}
      >
        <div
          className="bar__indicator__progress"
          style={{ width: `${percentage}%` }}
        />
        {secondaryBar && (
          <div className="bar__indicator__progress bar__indicator__progress--secondaryBar" />
        )}
        {marker && (
          <>
            <Label
              as="p"
              className="bar__indicator__markerLabel"
              style={{ left: `${marker}%` }}
            >
              {markerLabel}
            </Label>
            <div className="bar__indicator__marker" style={{ left: `${marker}%` }} />
          </>
        )}
      </div>
    </div>
  );
}

Bar.propTypes = {
  percentage: PropTypes.number,
  label: PropTypes.string,
  size: PropTypes.oneOf(["large", "primary"]),
  secondaryBar: PropTypes.bool,
  marker: PropTypes.number,
  color: PropTypes.string,
};

Bar.defaultProps = {
  size: "primary",
};
