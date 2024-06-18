import { MouseEventHandler } from "react";

export default function Boton({
  variant,
  caption,
  identifier,
  clickHandler,
  disabled = false,
}: {
  variant?: string,
  caption: string,
  identifier: string,
  clickHandler?: MouseEventHandler,
  disabled?: boolean,
}) {
  return (
    <div className={variant}>
      <button
        id={identifier}
        onClick={clickHandler}
        type="button"
        className="btn btn-outline-light col-12"
        disabled={disabled}
      >
        {caption}
      </button>
    </div>
  );
}
