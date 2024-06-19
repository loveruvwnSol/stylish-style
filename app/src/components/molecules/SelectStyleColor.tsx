import React, { useState } from 'react';
import { Box, Select, Text } from '@chakra-ui/react';

type SelectStyleColorProps = {
  text: string;
};

const SelectStyleColor: React.FC<SelectStyleColorProps> = ({ text }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box mt={10}>
      <Text>{text}</Text>
      <Box
        borderBottom={'1px solid'}
        w={'140%'}
      >
        <Select
          w={'100%'}
          border={'none'}
          value={selectedValue}
          onChange={handleChange}
          _focus={{
            border: 'none',
            boxShadow: 'none',
          }}
          opacity={selectedValue ? '1' : '0.5'}
        >
          <option
            value=''
            selected
            hidden
          >
            color
          </option>
          <option value={'black'}>black</option>
          <option value={'blue'}>blue</option>
          <option value={'red'}>red</option>
          <option value={'yellow'}>yellow</option>
        </Select>
      </Box>
    </Box>
  );
};

export default SelectStyleColor;
