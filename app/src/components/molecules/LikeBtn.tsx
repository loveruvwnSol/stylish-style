import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { CiHeart } from "react-icons/ci";

type LikeBtnProps = {
  icon: IconType;
  fill: string;
};

const LikeBtn: React.FC<LikeBtnProps> = ({ icon, fill }) => {
  return (
    <Icon
      as={icon}
      fill={fill}
      color={"red"}
      boxSize={7}
      verticalAlign={"middle"}
    />
  );
};

export default LikeBtn;
