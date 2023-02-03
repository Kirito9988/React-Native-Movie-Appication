import { Center,CheckIcon,FlatList,Select,VStack} from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { tmdbService } from '../../services/api';
import { MovieCard } from '../cards/MovieCard';
import { TvCard } from '../cards/TvCard';
import { Loading } from '../layout/Loading';


export const ListContainer = ({type,navigation,categories,}) => {
  const [category, setCategory] = useState(
    categories[0].value
  );
  const [list, setList] = useState([]);
  
  const [loading, setLoading] = useState(false);
  
  
  const loadItems = async () => {
    setLoading(true);
    const response = await tmdbService(
      type,
      category,
      '',
    );
    setList(response.data.results);
    setLoading(false);
  };
  useEffect(() => {
    loadItems();
  }, [category]);

  return (
    <VStack space={4} flex={1}>
      <Center mt={8}>
        <Select
          backgroundColor={'white'}
          alignItems="center"
          justifyContent={'center'}
          selectedValue={category}
          minWidth="300"
          _selectedItem={{
            bg: '#008080',
            _text: {
              color: 'white',
            },
            endIcon: <CheckIcon size="7" color="white" />,
          }}
          onValueChange={(itemValue) =>
            setCategory(itemValue)
          }
        >
          {categories.map((category, index) => {
            return (
              <Select.Item
                key={index}
                label={category.title}
                value={category.value}
              />
            );
          })}
        </Select>
      </Center>

      {loading ? (
        <Loading />
      ) : (
        
        <FlatList
          contentContainerStyle={{
            paddingBottom: 12,
          }}
          data={list}
          renderItem={({ item }) => (
            <>
              {type === 'movie' ? (
                <MovieCard
                  movie={item}
                  navigation={navigation}
                />
              ) : (
                <TvCard tv={item} navigation={navigation} />
              )}
            </>
          )}
        >

        </FlatList>
      )}
    
    </VStack>
  );
};
