import { AspectRatio,Box,Center,HStack,Image,Text} from 'native-base';

export const ItemPageContainer = ({title,photo,description,popularity,releaseDate}) => {
  return (
    <Box flex={2} paddingX={15}>
      
      <Center mt={8}>
       
        <Text fontSize={24} fontWeight="bold">
       
          {title}
       
        </Text>
    
        <AspectRatio w="70%" mt={2} ratio={1}>
    
          <Image resizeMode="cover"
              source={{
              uri: photo,
            }}
            alt={`${title} poster`}
    
    />
    
        </AspectRatio>
    
      </Center>
     
      <Text mt={3} color="#808080" alignContent="center">
     
        {description}
     
      </Text>
     
      <HStack mt={7} space={2}>
     
        <Text color={"1e1e1e"}>Popularity: {popularity}</Text>
     
        <Text>|</Text>
     
        <Text color={"1e1e1e"}>Release Date: {releaseDate}</Text>
     
      </HStack>
    
    </Box>
  );
};
