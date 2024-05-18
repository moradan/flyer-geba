import { MouseEventHandler } from "react";

export default function Boton({
  caption,
  identifier,
  clickHandler,
  disabled = false,
}: {
  caption: string;
  identifier: string;
  clickHandler?: MouseEventHandler;
  disabled?: boolean;
}) {
  return (
    <button
      id={identifier}
      onClick={clickHandler}
      type="button"
      className="btn btn-outline-light col-12"
      disabled={disabled}
    >
      {caption}
    </button>
  );
}
