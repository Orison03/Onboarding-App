import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import onlineImage from "../assets/Images/cart.png";

const Cart = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 px-5 bg-white">
      {/* header */}
      <View className="px-5">
        <Text className="text-xl uppercase text-start py-3 font-bold">
          add to cart
        </Text>
        <Text className="leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque
          deserunt, nesciunt sed repellat eligendi alias consequatur recusandae
          fuga quos voluptatum similique nisi quis id! Rerum expedita mollitia
          similique odio delectus ratione temporibus fugit amet suscipit minus!
          Quaerat, illum doloremque.
        </Text>
      </View>
      {/* Image and button */}
      <View className="px-5">
        <Image
          source={onlineImage}
          className="h-[50%] w-[100%] my-3 object-contain"
        />
        <TouchableOpacity className="bg-purple-600 rounded-lg my-3">
          <Text
            className="text-center text-white py-4 text-lg capitalize font-medium"
            onPress={() => navigation.navigate("payment")}
          >
            next
          </Text>
        </TouchableOpacity>
      </View>
      {/* footer */}
      <View className="flex-row justify-between items-center px-5">
        <TouchableOpacity onPress={() => navigation.navigate("shopping")}>
          <Text>previous</Text>
        </TouchableOpacity>
        <View className="flex-row space-x-1">
          <View className="w-5 h-5 bg-gray-100 rounded-full"></View>
          <View className="w-7 h-5 bg-purple-600 rounded-full"></View>
          <View className="w-5 h-5 bg-gray-100 rounded-full"></View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("payment")}>
          <Text>skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
