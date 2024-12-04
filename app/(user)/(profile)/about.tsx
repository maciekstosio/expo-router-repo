import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function About() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="(user)/(profile)/about.tsx" title="About" />
        <Link href="./">Go to index</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
