import { Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex, Box, Button, Input, Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/dist/client/link';
import React from 'react';
import { AppLayout } from '../../components/Layout';

const AppHome: NextPage = () => {
  return (
    <AppLayout>
      

      <FormControl id="username" >
      <Flex minHeight="75vh" width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="email@school.edu" />
            </FormControl>
            <FormControl isRequired mt={2}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>

            <Stack width="full"  direction="row" mt={4} spacing={4} align="center">
              <Button width="full" type="submit">
                Sign In
              </Button>
              <Link href="app/signup" passHref>
                <Button as="a" width="full">
                  Sign Up
                </Button>
              </Link>
            </Stack>

            <Button mt ={4} width="full"  type="submit" >
              Sign in with Github
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>

      </FormControl>
    </AppLayout>

    
  );
};

export default AppHome;
//export { getServerSideProps } from '../../components/Chakra';
