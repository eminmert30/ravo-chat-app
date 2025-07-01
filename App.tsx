import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { useEffect } from "react";

// Push notification izni al ve token'ı kaydet
async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Bildirim izni verilmedi!");
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  await AsyncStorage.setItem("expoPushToken", token);
  // Burada token'ı backend'e gönderebilirsin
  console.log("[Push] Expo push token:", token);
  return token;
}

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  return (
    <SocketProvider>
      <AppNavigator />
    </SocketProvider>
  );
}
