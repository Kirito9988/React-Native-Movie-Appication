import { tmdbImageUrl } from '../../services/config';
import { ItemPageContainer } from './ItemPageContainer';

export const MovieContainer = ({ movie }) => {
  return (
    <ItemPageContainer
      title={movie.original_title}
     
      description={movie.overview}
     
      popularity={movie.popularity}
     
      releaseDate={movie.release_date}
     
      photo={tmdbImageUrl + movie.poster_path}
    
    />
  );
};
