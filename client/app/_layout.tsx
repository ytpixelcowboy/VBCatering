import { router, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "poppins": require('../assets/fonts/Poppins-Regular.ttf'),
    "poppins-md": require('../assets/fonts/Poppins-Medium.ttf'),
    "poppins-semibold": require('../assets/fonts/Poppins-SemiBold.ttf'),
    "poppins-bold": require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); 
      //router.replace("/(auth)/login");
    }
  }, [loaded]);

  return (
    <Stack>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='reservation' options={{ headerShown: false }} />
    </Stack>
  );
}
