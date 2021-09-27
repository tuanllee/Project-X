
import { NextPage } from 'next';
import { AppLayout } from '../../../components/Layout';
import { Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex, Box, Button, Input, Stack } from '@chakra-ui/react';
import Link from 'next/dist/client/link';
import React from 'react';
const AppHome: NextPage = () => {
  return (
    <AppLayout>
      

      <FormControl id="username" >
      <Flex minHeight='75vh' width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            

            <FormControl isRequired mt={4}>
              <FormLabel>First Name</FormLabel>
              <Input type="text" placeholder="John" />
            
            
            </FormControl>

            <FormControl isRequired mt={2}>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" placeholder="Smith" />
            </FormControl>


            <FormControl isRequired mt={2}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="email@school.edu" />
            </FormControl>
            
            <FormControl isRequired mt={2}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>

            
            
            <Button mt={4} width="full" type="submit" variant="solid">
              Submit
            </Button>

            <Link href="../app" passHref>
                <Button mt={2} as="a" width="full" variant="ghost">
                  Back
                </Button>
            </Link>


            
          </form>
        </Box>
      </Box>
    </Flex>

      </FormControl>
    </AppLayout>

    
  );

};

export default AppHome;
