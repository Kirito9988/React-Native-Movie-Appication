import { tmdbImageUrl } from '../../services/config';
import { ItemPageContainer } from './ItemPageContainer';

export const TvContainer = ({ tv }) => {
  return (
    <ItemPageContainer
  
    title={tv.name}
  
    description={tv.overview}
  
    popularity={tv.popularity}
  
    releaseDate={tv.first_air_date}
  
    photo={tmdbImageUrl + tv.poster_path}
  
    />
  
    );
};
