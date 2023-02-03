import { TV_CATEGORIES } from '../../utils/constants';
import { ListContainer } from '../containers/ListContainer';

export const TVScreen = ({ navigation }) => {
  return (
   
    <ListContainer type="tv"
      navigation={navigation}
      categories={TV_CATEGORIES}
    
    />
  );
};
