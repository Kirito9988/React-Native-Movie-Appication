import { ListItem } from '../list-items/ListItem';

export const TvCard = ({ tv, navigation }) => {
  return (
    <ListItem id={tv.id}
   
    popularity={tv.popularity}
   
    title={tv.name}
   
    releaseDate={tv.first_air_date}
   
    uri={tv.poster_path == null || tv.poster_path == undefined ? 'https://dummyimage.com/900x900/878787/ffffff&text=No+Poster+found' :  `https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
   
    onDetailPress={() => {
   
      navigation.navigate('Movie Details', { itemId: tv.id,
   
        itemType: 'tv',
   
        itemName: tv.name,
   
      });
   
    }}
   
    />
  );
};
