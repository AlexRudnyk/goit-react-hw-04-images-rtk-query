import { ColorRing } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ColorRing />
    </SpinnerWrapper>
  );
};
