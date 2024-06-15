import { Box } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../molecules/Logo';
import UserIcon from '../atoms/UserIcon';
import UserName from '../atoms/UserName';
import SideBarItem from '../atoms/SideBarItem';
import { FiHome } from 'react-icons/fi';
import { TfiMenuAlt } from 'react-icons/tfi';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import LogoutBotton from '../atoms/LogoutBotton';
import { pbkdf2 } from 'crypto';

const Sidebar = () => {
  return (
    <Box
      width={250}
      height={700}
      backgroundColor={'#F2EAE0'}
      borderTopLeftRadius={50}
      borderBottomLeftRadius={50}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      padding={4}
    >
      <Box
        width='100%'
        textAlign='center'
      >
        <Box
          mb={10}
          mt={8}
        >
          <Logo />
        </Box>
        <UserIcon />
        <UserName />
      </Box>
      <Box
        flex={1}
        width='100%'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <Box>
            <SideBarItem
              menuIcon={FiHome}
              menuTitle={'Dashboard'}
            />
            <SideBarItem
              menuIcon={TfiMenuAlt}
              menuTitle={'Clothes'}
            />
            <SideBarItem
              menuIcon={RiShareForwardLine}
              menuTitle={'Share'}
            />
            <SideBarItem
              menuIcon={IoSettingsOutline}
              menuTitle={'Setting'}
            />
            <Box>
              <LogoutBotton />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
