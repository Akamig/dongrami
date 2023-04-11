import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { ChangeEvent, ReactElement } from 'react';
import { useActionState } from 'store/action';

type Props = {
  name: string;
  type: string;
  flatKey: string;
};

export function ActionParameter({ name, type, flatKey }: Props) {
  const [value, setValue] = useActionState(flatKey);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const checkInvalid = () => {
    if (type === 'Address') {
      return ethers.utils.isAddress(value);
    }
  };

  let Component: ReactElement | null = null;
  if (type === 'Address') {
    Component = <Input type="text" value={value} onChange={onChange} />;
  }

  return (
    <FormControl isInvalid={checkInvalid()}>
      <FormLabel>{name}</FormLabel>
      {Component}
    </FormControl>
  );
}
