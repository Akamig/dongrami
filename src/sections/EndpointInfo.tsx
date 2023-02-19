import {
  Box,
  Circle,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Play } from '../assets/icons';
import { useEndpoints, useLastIndex, useTempEndpoint } from '../store/endpoint';

type EndpointInfoSectionProps = {
  url: string;
};

export function EndpointInfoSecion({ url }: EndpointInfoSectionProps) {
  const { isOpen, onToggle } = useDisclosure();
  const endpoints = useEndpoints();
  const tempEndpoint = useTempEndpoint();
  const endpoint = (
    tempEndpoint ? [...endpoints, tempEndpoint] : endpoints
  ).find((e) => e.value === url);

  const lastIndex = useLastIndex();

  if (!endpoint) {
    return null;
  }

  const open = isOpen ? 'block' : 'none';

  const indexDiff = endpoint.lastIndex
    ? lastIndex - endpoint.lastIndex
    : -Infinity;
  const status = indexDiff !== -Infinity && indexDiff < 16;

  return (
    <Box mt="3">
      <Flex alignItems="center" gap="2">
        <Icon
          as={Play}
          onClick={onToggle}
          transition="transform 0.2s ease-in-out"
          transform={isOpen ? 'rotate(90deg)' : undefined}
          _hover={{
            bgColor: 'gray.100',
          }}
          display={['block', 'block', 'block', 'block', 'none']}
        />
        <Heading as="h3" size="md">
          Endpoint Info
        </Heading>
        <Circle bgColor={status ? 'green.500' : 'red.500'} size="3" />
      </Flex>
      <Grid
        display={[open, open, open, open, 'grid']}
        ml={['6', '6', '6', '6', 0]}
        mt="1"
        gap="1"
        templateColumns="auto 1fr"
        alignItems="start"
      >
        <GridItem>
          <Heading as="h4" size="sm" lineHeight="24px">
            URL
          </Heading>
        </GridItem>
        <GridItem>
          <Link href={endpoint.value} size="sm" wordBreak="break-all">
            {endpoint.value}
          </Link>
        </GridItem>
        <GridItem>
          <Heading as="h4" size="sm" lineHeight="24px">
            Health
          </Heading>
        </GridItem>
        <GridItem>
          <Text size="sm" color={status ? 'green.500' : 'red.500'}>
            {status ? 'Healthy ' : 'Unhealthy '}
            {indexDiff === -Infinity ? '(Not responsive)' : `(${indexDiff})`}
          </Text>
        </GridItem>
        <GridItem>
          <Heading as="h4" size="sm" lineHeight="24px">
            Last Block Index
          </Heading>
        </GridItem>
        <GridItem>
          <Text size="sm">{endpoint.lastIndex || 'N/A'}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
