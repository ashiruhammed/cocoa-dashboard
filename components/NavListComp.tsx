import React from "react";
import { IconType } from "react-icons";

function NavListComp({
  Icon,
  label,
  className,
}: {
  Icon?: IconType;
  label: string;
  className?: string;
}) {
  return (
    <li
      className={[
        "flex gap-2 items-center cursor-pointer hover:text-[#69330D]",
        className,
      ].join(" ")}>
      {Icon && <Icon />} {label}
    </li>
  );
}

export default NavListComp;
