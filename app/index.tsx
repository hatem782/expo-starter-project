import { Link, router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

function Main() {
  return (
    <View>
      <Text>Welcome</Text>
      <Link href="/users/1">Users</Link>
      <Pressable
        onPress={() => {
          router.push("/users/2");
        }}
      >
        <Text>User 2</Text>
      </Pressable>
    </View>
  );
}

export default Main;
