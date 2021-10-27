import React from "react";

import { Button } from "./Button";
import { ButtonRow } from "./ButtonRow";

import Vouch from "../icons/vouch.svg";
import Avatar from "../icons/avatar.svg";
import Filter from "../icons/filter.svg";

export default {
  component: Button,
  title: "Components/Button",
};

const buttons = [
  { icon: Vouch, variant: "primary", label: "Vouch for new contact" },
  { icon: Vouch, variant: "secondary", label: "Vouch for new contact" },
  {
    iconPosition: "end",
    variant: "pill",
    label: "Vouch for new contact",
  },
  {
    label: "Red button",
    variant: "secondary",
    color: "red",
  },
  {
    variant: "secondary",
    label: "Green button",
    color: "green",
  },
];

const variants = [
  [
    { icon: Vouch, variant: "primary", label: "Vouch for new contact" },
    { icon: Avatar, variant: "primary", label: "Vouch for new contact" },
    { variant: "primary", label: "Loading", loading: true },
    {
      icon: Vouch,
      iconPosition: "end",
      label: "Vouch for new contact",
    },
  ],
  [
    { icon: Vouch, variant: "secondary", label: "Vouch for new contact" },
    { icon: Filter, variant: "secondary", label: "Show filters" },
    { variant: "secondary", label: "Loading", loading: true },
    {
      icon: Avatar,
      variant: "secondary",
      label: "Manage contact",
    },
  ],
  [
    { variant: "pill", label: "View all" },
    { variant: "pill", label: "View all", loading: true },
    {
      variant: "pill",
      label: "Voted",
      color: "red",
    },
    {
      variant: "pill",
      label: "Voted",
      color: "green",
    },
  ],
  [
    { variant: "secondary", color: "red", label: "Color Button" },
    { variant: "secondary", color: "green", label: "Color Button" },
    { variant: "secondary", color: "blue", label: "Color Button" },
  ],
  [
    { variant: "ethereum", label: "Ethereum Button" },
    { variant: "polygon", label: "Polygon Button" },
    { variant: "ethereum", loading: true, label: "Ethereum Button" },
    { variant: "polygon", loading: true, label: "Polygon Button" },
  ],
  [
    { icon: "vouch", variant: "lite", label: "Lite Button" },
    { icon: "arrow-left", variant: "lite", label: "Back to Overview" },
  ],
];

export const Primary = () => (
  <>
    {buttons.map((props) => (
      <ButtonRow mb="20px">
        <Button {...props} />
      </ButtonRow>
    ))}
  </>
);

export const Disabled = () => (
  <>
    {buttons.map((props) => (
      <ButtonRow mb="20px">
        <Button {...props} disabled />
      </ButtonRow>
    ))}
  </>
);

export const Variants = () => (
  <>
    {variants.map((buttons) => (
      <ButtonRow mb="20px">
        {buttons.map((props) => (
          <Button {...props} />
        ))}
      </ButtonRow>
    ))}
  </>
);

export const Links = () => (
  <>
    {buttons.map((props) => (
      <ButtonRow mb="20px">
        <Button as="a" {...props} href="http://union.finance" target="_blank" />
      </ButtonRow>
    ))}
  </>
);
