import { MouseEventHandler } from "react";

export default function Boton({
  caption,
  identifier,
  clickHandler,
}: {
  caption: string;
  identifier: string;
  clickHandler?: MouseEventHandler;
}) {
  return (
    <button
      id={identifier}
      onClick={clickHandler}
      type="button"
      className="btn btn-outline-light col-12"
    >
      {caption}
    </button>
  );
}
