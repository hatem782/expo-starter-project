import { Link, router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

import PageWrapper from "@/common/PageWrapper";

function Main() {
  return (
    <PageWrapper>
      <Text>Welcome</Text>
      <Link href="/users/1">Users</Link>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/users/[id]",
            params: { id: 2 },
          });
        }}
      >
        <Text>User 2</Text>
      </Pressable>
    </PageWrapper>
  );
}

export default Main;
