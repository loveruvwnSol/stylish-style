import { extendTheme } from '@chakra-ui/react';

// カスタムテーマの作成
const theme = extendTheme({
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'transparent',
            borderColor: 'black',
            _before: {
              content: '""',
              display: 'block',
              pos: 'absolute',
              top: '50%',
              left: '5%',
              transform: 'translate(-50%, -60%) rotate(45deg)',
              width: '5px',
              height: '10px',
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: '0 1px 1px 0',
            },
            _hover: {
              bg: 'transparent',
            },
          },
        },
      },
    },
  },
});

export default theme;
