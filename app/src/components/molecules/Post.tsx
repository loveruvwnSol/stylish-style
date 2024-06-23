import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Heading } from '@chakra-ui/react';
import UserIcon from '../atoms/UserIcon';
import PostDay from '../atoms/PostDay';
import BrandName from '../atoms/BrandName';
import LikeBtn from './LikeBtn';
import LikeCnt from '../atoms/LikeCnt';
import PostText from '../atoms/PostText';
import { useUser } from '../../hooks/useUser';

const Post = () => {
  const [{ user }] = useUser();

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      mt={5}
    >
      <Card
        w={600}
        maxH={550}
      >
        <Box>
          <CardHeader>
            <Flex>
              <Flex
                flex='1'
                gap='4'
                alignItems='center'
                flexWrap='wrap'
              >
                <UserIcon
                  width={'10'}
                  m={'0'}
                />
                <Heading size='sm'>{user?.name}</Heading>
              </Flex>
              <PostDay day='2024/06/21' />
            </Flex>
          </CardHeader>
          <CardBody
            display={'flex'}
            justifyContent={'center'}
          >
            <Box //写真
              border={'1px solid lightgray'}
              w={550}
              h={250}
            >
              仮写真
            </Box>
          </CardBody>
          <CardFooter
            flexWrap='wrap'
            pt={-20}
          >
            <Box
              display={'flex'}
              gap={8}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
              >
                <Box mb={4}>
                  <BrandName name='UNIQRO' />
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                >
                  <LikeBtn />
                  <LikeCnt cnt={'11'} />
                </Box>
              </Box>
              <PostText text={'この服超可愛い❤️すっごいお気に入りです！！'} />
            </Box>
          </CardFooter>
        </Box>
      </Card>
    </Box>
  );
};

export default Post;
