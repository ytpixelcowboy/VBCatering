import { router, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import { Platform, StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "poppins": require('../assets/fonts/Poppins-Regular.ttf'),
    "poppins-md": require('../assets/fonts/Poppins-Medium.ttf'),
    "poppins-semibold": require('../assets/fonts/Poppins-SemiBold.ttf'),
    "poppins-bold": require('../assets/fonts/Poppins-Bold.ttf'),
  });



  useEffect(() => {
    /*
    if (Platform.OS == "web") {
      router.replace("/(auth)/login")
      return;
    }
    */

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <Stack>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(client)' options={{ headerShown: false }} />
      <Stack.Screen name='(admin)' options={{ headerShown: false }} />
    </Stack>
  );
}
