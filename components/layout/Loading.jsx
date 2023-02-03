import { Heading, HStack, Spinner } from 'native-base';

export const Loading = () => {
  return (
    <HStack space={2} justifyContent="center">
    
      <Spinner/>
    
      <Heading color="#008080" fontSize="md">
    
        Loading
    
      </Heading>
    
    </HStack>
  );
};
