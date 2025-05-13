import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <Stack>
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
    </Stack>
  );
}
