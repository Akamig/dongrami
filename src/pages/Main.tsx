import { TransferSection } from 'sections/TransferSection';
import { AddressSection } from '../sections/Address';

export function MainPage() {
  return (
    <>
      <AddressSection />
      <TransferSection />
    </>
  );
}
