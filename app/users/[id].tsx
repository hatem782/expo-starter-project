import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function UserById() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>User Page {id}</Text>
    </View>
  );
}

export default UserById;
