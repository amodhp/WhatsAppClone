import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  //   console.log(chatRoom.users[1].imageUri)
  const user = chatRoom.users[1];
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id, name: user.name });
  };
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
