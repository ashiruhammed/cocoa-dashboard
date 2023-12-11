import React from "react";
import { IconType } from "react-icons";

function NavListComp({ Icon, label }: { Icon?: IconType; label: string }) {
  return (
    <li className="flex gap-2 items-center">
      {Icon && <Icon />} {label}
    </li>
  );
}

export default NavListComp;
