import { tmdbImageUrl } from '../../services/config';
import { ListItem } from '../list-items/ListItem';

export const MovieCard = ({ movie, navigation }) => {
  return (
    <ListItem id={movie.id}
             
    popularity={movie.popularity}
    
    title={movie.original_title}
    
    releaseDate={movie.release_date}
    
    uri={movie.poster_path == null || movie.poster_path == undefined ? 'https://dummyimage.com/900x900/878787/ffffff&text=No+Poster+found' : `${tmdbImageUrl}${movie.poster_path}`}
    
    onDetailPress={() => {
    
      navigation.navigate('Movie Details', {
    
        itemId: movie.id,
    
        itemType: 'movie',
    
        itemName: movie.original_title,
    
      });
    
    }}
    
    />
  );
};
