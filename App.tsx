import { ScreenContent } from './components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenContent title="React Native" path="App.tsx"/>

      <View className='flex items-center justify-center'>
        <Text className='text-2xl font-bold'>Remove it</Text>
        <Text className='text-2xl font-bold'>Hello</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
