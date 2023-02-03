import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { MovieScreen } from '../screens/MovieScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { TVScreen } from '../screens/TVScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Movies App"
       
        component={TabStack}
       
        options={{
          headerStyle: {
            backgroundColor: '#132136',
          },
          headerTintColor: 'white',
       
        }}
      />
      
      <Stack.Screen
        name="Movie Details"
        component={MovieDetailScreen}
      />
    
    </Stack.Navigator>
  );
};

export const TabStack = () => {
  return (
    <Tab.Navigator>
      
      <Tab.Screen name="Movie" component={MovieScreen} />
      
      <Tab.Screen name="Search" component={SearchScreen} />
      
      <Tab.Screen name="TV" component={TVScreen} />
    
    </Tab.Navigator>
  );
};
