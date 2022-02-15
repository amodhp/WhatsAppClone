import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
const InputBox = () => {

    const onMicrophonePress=()=>{
        console.log("Microphone")
    }
    const onSendPress=()=>{
        console.warn(`Sending :${message}`)
        setMessage('')
    }
  const [message, setMessage] = useState("");
  const onPress=()=>{
      if (!message){
          onMicrophonePress();
      }else{
          onSendPress();
      }
      }
  
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        {/* <FontAwesome5 name="laugh-beam" size="24" color="grey" /> */}
        <TextInput
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type a Message"
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          ) : (
            <MaterialIcons name="send" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
