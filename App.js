import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Shopping from "./screens/Shopping";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="shopping"
        screenOptions={{
          title: "",
        }}
      >
        <Stack.Screen
          name="shopping"
          component={Shopping}
          options={{
            headerRight: () => (
              <AntDesign
                icons
                name="home"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
          options={{
            headerRight: () => (
              <Ionicons name="ios-cart-outline" size={24} color="black" />
            ),
          }}
        />
        <Stack.Screen
          name="payment"
          component={Payment}
          options={{
            headerRight: () => (
              <MaterialIcons name="payment" size={24} color="black" />
            ),
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
