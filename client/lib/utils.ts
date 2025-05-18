import { router } from "expo-router";

export const sleep = async() =>{
    setTimeout(()=>{
        router.replace("/(auth)/login");
        return true;
    }, 2000);
}