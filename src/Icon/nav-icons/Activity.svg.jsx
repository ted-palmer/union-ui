import React from "react";

export function Activity({ color, className }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8357 24.4167C17.6746 24.6945 17.4433 24.9251 17.1649 25.0854C16.8866 25.2457 16.5711 25.3301 16.2499 25.3301C15.9287 25.3301 15.6132 25.2457 15.3349 25.0854C15.0565 24.9251 14.8252 24.6945 14.6641 24.4167M21.75 12.5C21.75 11.0413 21.1705 9.64236 20.1391 8.61091C19.1076 7.57946 17.7087 7 16.25 7C14.7913 7 13.3924 7.57946 12.3609 8.61091C11.3295 9.64236 10.75 11.0413 10.75 12.5C10.75 18.9167 8 20.75 8 20.75H24.5C24.5 20.75 21.75 18.9167 21.75 12.5Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

Activity.defaultProps = {
  color: "grey",
};
