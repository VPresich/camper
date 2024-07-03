import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({
  children,
  width,
  variant,
  onClick,
  ...props
}) {
  return (
    <button
      className={clsx(
        css.btn,
        variant === "color" && css.color,
        variant === "transparent" && css.transparent
      )}
      style={{ width: width }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
