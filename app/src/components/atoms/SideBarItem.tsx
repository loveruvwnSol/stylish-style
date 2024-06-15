import { Box, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import React from 'react';

type SideBarItemProps = {
  menuIcon: IconType;
  menuTitle: string;
};

const SideBarItem: React.FC<SideBarItemProps> = ({ menuTitle, menuIcon }) => {
  return (
    <>
      <Box
        display={'flex'}
        alignItems={'center'}
        mb={10}
      >
        <Icon
          as={menuIcon}
          mr={2}
        ></Icon>
        <Text fontSize={16}>{menuTitle}</Text>
      </Box>
    </>
  );
};

export default SideBarItem;
