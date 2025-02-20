import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.imagecontainer}>
        <ImageBackground
          source={require("../assets/Main/spooderman.jpg")}
          style={styles.header}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.gradient}
          />
        </ImageBackground>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/Main/jomps.jpg")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.name}>
        <Text
          style={{ color: "white", fontWeight: 900, fontSize: 19 }}
          onPress={() => navigation.navigate("Bio")}
        >
          Junefree Yamson
        </Text>
        <Text style={{ color: "#808080", textAlign: "center" }}>Jompers_</Text>
      </View>

      {/* Phone and Email */}

      <View style={{ left: 20, top: 120 }}>
        <View style={{ flexDirection: "row", left: 20 }}>
          <FontAwesome6
            name="phone-volume"
            size={20}
            color="white"
            style={{ right: 5, marginBottom: 5 }}
          />
          <Text
            style={{
              color: "white",
              fontweight: "bold",
              fontSize: 17,
              marginLeft: 8,
              top: 2,
            }}
          >
            09624224861
          </Text>
        </View>
        <View style={{ flexDirection: "row", left: 20 }}>
          <MaterialIcons
            name="email"
            size={26}
            color="white"
            style={{ right: 7, top: 3 }}
          />
          <Text
            style={{
              color: "white",
              fontweight: "bold",
              marginTop: 5,
              fontSize: 17,
            }}
          >
            Jyamson30@gmail.com
          </Text>
        </View>
      </View>

      {/* Games Owned */}

      <View style={styles.owned}>
        <Text
          style={{
            fontWeight: 900,
            color: "white",
            fontSize: 16,
            marginTop: 10,
            marginBottom: 13,
            marginHorizontal: 20,
            alignSelf: "center",
          }}
        >
          GAMES OWNED
        </Text>
        <View style={styles.gow}>
          <Image
            source={require("../assets/Main/God-of-war.jpg")}
            style={styles.godofwar}
          />
          <View>
            <Text
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: 17,
                top: 10,
                left: 25,
              }}
            >
              God of War
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="bookmark"
                size={30}
                color="#808080"
                style={{ left: 28, top: 20 }}
              />
              <Text
                style={{ color: "#A1A1A1", left: 35, top: 14, fontSize: 16 }}
              >
                Achievements
              </Text>
              <Text style={{ top: 35, right: 63, color: "#808080" }}>7/54</Text>
            </View>
          </View>
        </View>
        {/* MHW */}
        <View style={styles.MHW}>
          <Image
            source={require("../assets/Main/MHW.jpg")}
            style={styles.godofwar}
          />
          <View>
            <Text
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: 17,
                top: 10,
                left: 25,
              }}
            >
              Monster Hunter World
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="bookmark"
                size={30}
                color="#808080"
                style={{ left: 28, top: 20 }}
              />
              <Text
                style={{ color: "#A1A1A1", left: 35, top: 14, fontSize: 16 }}
              >
                Achievements
              </Text>
              <Text style={{ top: 35, right: 63, color: "#808080" }}>
                73/100
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#121212",
  },
  imagecontainer: {
    height: "25%",
  },
  header: {
    flex: 1,
  },
  profileContainer: {
    position: "absolute",
    left: "10%",
    top: 150,
    elevation: 10,
  },
  profileImage: {
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
    height: "50%",
  },
  name: {
    position: "absolute",
    left: 220,
    top: 220,
  },
  owned: {
    padding: 10,
    height: 350,
    marginHorizontal: 20,
    backgroundColor: "#252525",
    borderRadius: 10,
    top: 150,
  },
  gow: {
    backgroundColor: "#363737",
    height: 100,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 10,
  },
  godofwar: {
    height: 75,
    width: 75,
    top: 11,
    left: 13,
    borderRadius: 3,
  },
  MHW: {
    marginTop: 10,
    backgroundColor: "#363737",
    height: 100,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 10,
  },
});
