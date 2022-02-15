import { StyleSheet,Dimensions } from "react-native";


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get('window').width,
    justifyContent: "space-between",
    padding: 10,

  },
  leftContainer: { flexDirection: "row" },
  midContainer: { justifyContent: "space-around"},
  avatar: {
    height: 60,
    width: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: "grey",

  },
  time: {
    fontSize: 14,
    color: "grey",
    // marginRight:100
  
  },
});

export default styles;
