// import { ProfileProvider } from '@/context/ProfileProvider'
import { Stack } from 'expo-router';
import { createContext } from 'react';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const Context = createContext(null);

export default function ProfileLayout() {
  return (
    <Context.Provider value={null}>
      <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="about" />
      </Stack>
    </Context.Provider>
  );
}
