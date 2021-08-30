import React, { useState, useRef, useEffect } from "react";

import { Button } from "../Button";

import "./context-menu.scss";

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        typeof callback === "function"
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export function ContextMenu({ items }) {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useOutsideAlerter(ref, () => {
    setOpen(false);
  });

  const toggleOpen = () => setOpen((x) => !x);

  return (
    <div className="context-menu-wrapper">
      <div className="context-menu-button" onClick={toggleOpen}>
        <span />
        <span />
        <span />
      </div>
      {open && (
        <div className="context-menu" ref={ref}>
          {items.map(({ label, ...item }) => (
            <div className="context-menu__item" {...item}>
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
