import { View, Text, StyleSheet } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import React, { createContext, useEffect } from 'react';

export const unstable_settings = {
  initialRouteName: '(profile)',
};

const Loader = () => (
  <View style={[StyleSheet.absoluteFillObject, {backgroundColor: "#f0f", justifyContent: 'center', alignItems: 'center'}]}>
    <Text>Loading...</Text>
  </View>
);

const Context = createContext(null);

export default function UserLayout() {
  // const { isAuthenticated, isLoading } = useConvexAuth()
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <Loader />;

  if (!isAuthenticated) return <Redirect href="/" />;

  return (
    <Context.Provider value={null}>
      <Stack
        screenOptions={{
          headerTitleStyle: { fontSize: 16, fontFamily: 'SFProRoundedBold' },
          headerBackTitleStyle: { fontSize: 16, fontFamily: 'SFProRoundedSemibold' },
          headerBackTitle: 'Tilbage',
          contentStyle: { backgroundColor: 'white' },
        }}>
        {/* Tabs */}
        <Stack.Screen name="(profile)" options={{ headerShown: false, title: 'Tilbage' }} />

        {/* {/* Dashboard */}
        <Stack.Screen name="admin" options={{ headerShown: false }} />
      </Stack>
    </Context.Provider>
  );
}
