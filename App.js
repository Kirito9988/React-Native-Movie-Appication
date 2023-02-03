import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { AppStack } from './components/stack/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
    
      <NavigationContainer>
    
        <AppStack />
    
      </NavigationContainer>
    
    </NativeBaseProvider>
  );
}
