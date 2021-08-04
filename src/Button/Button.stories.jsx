import React from "react";

import { Button } from "./Button";
import { ButtonRow } from "./ButtonRow";

export default {
  component: Button,
  title: "Components/Button",
};

const buttons = [
  { icon: "vouch", variant: "primary", label: "Vouch for new contact" },
  { icon: "vouch", variant: "secondary", label: "Vouch for new contact" },
  {
    icon: "vouch",
    variant: "secondary",
    rounded: true,
    label: "Vouch for new contact",
  },
  { icon: "vouch", variant: "floating", label: "Vouch for new contact" },
  {
    icon: "chevron",
    iconPosition: "end",
    variant: "pill",
    label: "Vouch for new contact",
  },
];

const variants = [
  [
    { icon: "vouch", variant: "primary", label: "Vouch for new contact" },
    { icon: "link", variant: "primary", label: "Vouch for new contact" },
  ],
  [
    { icon: "vouch", variant: "secondary", label: "Vouch for new contact" },
    { icon: "arrow-left", variant: "secondary", label: "Back to Overview" },
    { variant: "secondary", label: "Cancel" },
  ],
  [
    {
      icon: "manage",
      variant: "secondary",
      rounded: true,
      label: "Manage contact",
    },
    {
      icon: "proposal",
      variant: "secondary",
      rounded: true,
      label: "Make proposal",
    },
    {
      icon: "proposal",
      variant: "primary",
      rounded: true,
      label: "copy",
    },
    {
      icon: "check",
      variant: "secondary",
      rounded: true,
      label: "for",
      color: "green",
    },
  ],
  [
    { icon: "chevron", iconPosition: "end", variant: "pill", label: "Manage" },
    { variant: "pill", label: "View all" },
    {
      icon: "no",
      iconPosition: "end",
      variant: "pill",
      label: "Voted",
      color: "red",
    },
  ],
  [{ icon: "vouch", variant: "floating", label: "Vouch for someone" }],
  [
    { icon: "metamask", variant: "secondary", label: "Metamask" },
    { icon: "walletconnect", variant: "secondary", label: "WalletConnect" },
  ],
  [
    { icon: "twitter", variant: "secondary", rounded: true },
    { icon: "telegram", variant: "secondary", rounded: true },
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
