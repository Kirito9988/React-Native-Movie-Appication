import {AspectRatio,Box,Button,HStack,Image,Text,VStack} from 'native-base';

export const ListItem = ({uri,title,popularity,releaseDate,onDetailPress}) => {
  return (
    <Box
      marginY={2}
      marginX={4}
      borderBottomColor="#808080"
      borderBottomWidth="1"
      paddingBottom={5}
    >
      <HStack space={2}>
        
        <AspectRatio w="40%" ratio={1}>
        
          <Image
            source={{
              uri,
            }}
            alt={`${title} poster`}
          />
      
        </AspectRatio>
      
        <VStack flex={1}>
      
          <Text fontWeight="bold">{title}</Text>
      
          <Text>Popularity: {popularity}</Text>
      
          <Text>Release Date: {releaseDate}</Text>
      
          <Button
            bg="#008080"
            width="80%"
            onPress={onDetailPress}
          >
            More Details
      
          </Button>
      
        </VStack>
      
      </HStack>
   
    </Box>
  );
};
