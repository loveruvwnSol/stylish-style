import { IconButton } from "@chakra-ui/react";
import React from "react";

type EditIconButtonProps = {
  bg: string;
  ariaLabel: string;
  icon: any;
  onClick: () => void;
};

export const EditIconButton: React.FC<EditIconButtonProps> = ({
  bg,
  ariaLabel,
  icon,
  onClick,
}) => {
  return (
    <IconButton bg={bg} aria-label={ariaLabel} icon={icon} onClick={onClick} />
  );
};
