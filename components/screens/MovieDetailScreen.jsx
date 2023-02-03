import {useEffect,useLayoutEffect,useState} from 'react';
import { tmdbService } from '../../services/api';
import { MovieContainer } from '../containers/MovieContainer';
import { TvContainer } from '../containers/TvContainer';
import { Loading } from '../layout/Loading';

export const MovieDetailScreen = ({route,navigation}) => {
  const { itemId, itemType, itemName } = route.params;
  const [item, setItem] = useState();
  useEffect(() => {(
    async () => {
      const response = await tmdbService(itemType, itemId);
    
      setItem(response.data);
    })
    ();
  }, 
  [itemId]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: itemName,
      headerBackTitle: 'Back to List',
    });
  }, [navigation]);

  return (
    <>
      {!item ? (
        
        <Loading />
      ) : (
        <>
         
          {itemType === 'movie' ? (
         
         <MovieContainer movie={item} />
          ) : (
         
            <TvContainer tv={item} />
          )}
        </>
      )}
    </>
  );
};
