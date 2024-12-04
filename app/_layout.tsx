import { Stack } from 'expo-router';
import { UnistylesProvider } from 'react-native-unistyles';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(user)',
};

export default function RootLayout() {
  return (
    <UnistylesProvider>
      <Stack
        screenOptions={{
          headerBackTitle: '(user)',
        }}>
        <Stack.Screen
          name="(user)"
          options={{
            title: 'Tilbage',
            headerShown: false,
            gestureEnabled: false,
            animation: 'none',
          }}
        />
      </Stack>
    </UnistylesProvider>
  );
}
