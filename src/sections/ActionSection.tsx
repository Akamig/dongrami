import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { useLib9c } from 'hooks/useLib9c';
import { useState } from 'react';
import actionDefs from '../../actions.json';

export function ActionSection() {
  const lib9c = useLib9c();

  const [action, setAction] = useState<{ label: string; value: string } | null>(
    null
  );

  const actionTypes = Object.keys(actionDefs)
    .sort()
    .map((a) => ({
      label: a,
      value: a,
    }));

  if (!lib9c) {
    return (
      <Box>
        <Heading as="h2" size="lg">
          Create Action
        </Heading>
        <Text my="6" textAlign="center">
          Loading lib9c-wasm...
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      <Heading as="h2" size="lg">
        Create Action
      </Heading>
      <Box as="form">
        <FormControl mt="3" isRequired>
          <FormLabel>Action Type</FormLabel>
          <Select
            options={actionTypes}
            value={action}
            onChange={(e) => setAction(e)}
          />
        </FormControl>
        <Button mt="3" type="submit" w="full">
          Send
        </Button>
      </Box>
    </Box>
  );
}
