import React from "react";
import { FlatList, Text, ImageBackground, Dimensions, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import ChatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/inputBox";

import background from "../assets/images/background.jpg";

const ChatRoomScreen = () => {
  const route = useRoute();
  // console.log(route.params.id)
  return (
    <ScrollView>
    <ImageBackground
      style={{ width: Dimensions.get("window").width }}
      source={background}
    >
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
    </ScrollView>
  );
};

export default ChatRoomScreen;
