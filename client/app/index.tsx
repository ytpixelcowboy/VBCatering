import { sleep } from "@/lib/utils";
import { Link, router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {

  useEffect(()=>{
  
  },[])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/(auth)/login"} >Go To Auth</Link>
    </View>
  );
}
