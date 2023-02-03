import { AntDesign } from '@expo/vector-icons';
import {Button,CheckIcon,FormControl,HStack,Icon,Input,SearchIcon,Select,Stack} from 'native-base';
import { useEffect, useState } from 'react';

export const SearchForm = ({ onSubmit, page }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchType, setSearchType] = useState('multi');
  const [showError, setShowError] = useState(false);

  const submit = () => {
    if (searchTerm) {
      onSubmit(searchTerm, searchType);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  useEffect(() => {
    console.log(page);
    if (page !== 1) {
      submit();
    }
  }, [page]);
  return (
    <>
      <FormControl isRequired isInvalid={showError}>
       
        <Stack>
       
          <FormControl.Label>
       
            Search Movie/TV Show Name
       
          </FormControl.Label>
       
          <Input
            type="text"
            placeholder="ie. James Bond etc"
            leftElement={
       
              <Icon
                as={
       
                  <AntDesign
                    style={{ paddingLeft: 10 }}
                    name="search1"
                    color="black"
                  />
                }
              />
            }
       
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
       
          <FormControl.ErrorMessage>
       
             Name is required
       
          </FormControl.ErrorMessage>
       
        </Stack>
      
      </FormControl>
      
      <HStack alignItems="flex-end" space={2}>
      
        <FormControl w="60%" isRequired>
      
          <FormControl.Label>
      
            Choose Search Type
      
          </FormControl.Label>
      
          <Select
            backgroundColor={'white'}
            alignItems="center"
            justifyContent={'center'}
            accessibilityLabel="Choose Category"
            placeholder="Choose Category"
            _selectedItem={{
              bg: '#008080',
              _text: {
                color: 'white',
              },
       
              endIcon: <CheckIcon size="7" color="white" />,
       
            }}
       
            onValueChange={(text) => {
              setSearchType(text);
              setSearchTerm('');
            }}
       
            selectedValue={searchType}
          >
       
            <Select.Item label="Movie" value="movie" />
       
            <Select.Item label="Multi" value="multi" />
       
            <Select.Item label="TV Series" value="tv" />
       
          </Select>
       
        </FormControl>
       
        <Button
          onPress={() => submit()}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
       
          }}
       
          flex={1}
          leftIcon={<SearchIcon />}
        >
          Search
       
        </Button>
      
      </HStack>
    </>
  );
};
