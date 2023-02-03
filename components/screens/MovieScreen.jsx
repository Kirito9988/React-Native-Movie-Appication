import { MOVIE_CATEGORIES } from '../../utils/constants';
import { ListContainer } from '../containers/ListContainer';

export const MovieScreen = ({ navigation }) => {
  return (
    
    <ListContainer type="movie"
      navigation={navigation}
      categories={MOVIE_CATEGORIES}
    />
  );
};
