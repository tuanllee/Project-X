import { Global } from '@emotion/react';
import React from 'react';
import Link from 'next/link';
import { Button, Heading, HStack, Spacer, useTheme, VStack } from '@chakra-ui/react';
import { GiCrossFlare } from 'react-icons/gi';

export const AppLayout: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <VStack alignItems="stretch" paddingTop={8} w="100%" maxW="1200px" marginX="auto">
      <HStack paddingX={4}>
        <GiCrossFlare size="36px" />
        <Heading>Preflight</Heading>
        <Spacer />
        <Link href="/" passHref>
          <Button as="a" size="sm" colorScheme="blue">
            Home
          </Button>
        </Link>
      </HStack>
      {children}
    </VStack>
  );
};
