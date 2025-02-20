import {
  View,
  Image,
  ImageBackground,
  BackgroundImage,
  Text,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Bio() {
  return (
    <View style={styles.body}>
      <View style={styles.contain}>
        <ImageBackground
          source={require("../assets/Main/spooderman.jpg")}
          style={styles.spiderman}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.gradient}
          />
        </ImageBackground>
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../assets/Main/jomps.jpg")}
          style={styles.jomps}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.spacing}>
          <Text style={styles.left}>Name: </Text>
          <Text style={[styles.right, styles.name]}>Junefree Yamson</Text>
        </View>
        <View style={styles.spacing}>
          <Text style={styles.left}>Username: </Text>
          <Text style={[styles.right, styles.uname]}>Jompers_</Text>
        </View>
        <View style={styles.spacing}>
          <Text style={styles.left}>Age: </Text>
          <Text style={[styles.right, styles.age]}>21</Text>
        </View>
        <View style={[styles.spacing, styles.lastline]}>
          <Text style={styles.left}>From: </Text>
          <Text style={[styles.right, styles.from]}>
            Medina, Misamis, Oriental
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, backgroundColor: "#121212" },
  spiderman: {
    flex: 1,
  },
  profile: { position: "absolute", left: "33.5%", top: 110, elevation: 10 },
  jomps: {
    width: 135,
    height: 135,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: "#00E5FF",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
  },
  contain: {
    height: "25%",
  },
  main: {
    top: 80,
    marginHorizontal: 20,
    height: 200,
  },
  left: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  right: {
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
    fontSize: 18,
  },
  spacing: {
    flexDirection: "row",
    marginBottom: 15,
    borderTopWidth: 2,
    borderTopColor: "white",
  },
  lastline: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    paddingBottom: 15,
  },
  name: { left: 60 },
  uname: { left: 25 },
  age: { left: 80 },
  from: { left: 70 },
});
