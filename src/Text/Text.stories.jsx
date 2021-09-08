import React from "react";

import { Text } from "./Text";
import { Label } from "../Label";

export default {
  component: Text,
  title: "Components/Text",
};

export const All = () => (
  <>
    <Text>The quick brown fox jumps over a lazy dog.</Text>
    <Text size="large">The quick brown fox jumps over a lazy dog.</Text>
  </>
);

export const Weights = () => (
  <>
    <Text weight="regular" grey={700}>
      The quick brown fox jumps over a lazy dog.
    </Text>
    <Text weight="medium" grey={700}>
      The quick brown fox jumps over a lazy dog.
    </Text>
  </>
);

export const Greys = () => (
  <>
    {Array(7)
      .fill(100)
      .map((n, i) => (
        <Text grey={n * (i + 1)}>
          The quick brown fox jumps over a lazy dog.
        </Text>
      ))}
  </>
);

export const Colors = () => (
  <>
    {["blue", "green", "white", "red", "grey", "black", "orange"].map(
      (color) => {
        return (
          <Text
            color={color}
            style={color === "white" && { backgroundColor: "black" }}
          >
            The quick brown fox jumps over a lazy dog
          </Text>
        );
      }
    )}
  </>
);
