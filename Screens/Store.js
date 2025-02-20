import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function Store() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.body}>
      {/* Header */}

      <View style={styles.Header}>
        <View style={styles.searchcontain}>
          <MaterialIcons
            name="gamepad"
            size={31}
            color="#616161"
            style={styles.gamepad}
          />
          <Text style={styles.searchtext}>GAMERANT</Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="#9D9D9D"
          style={styles.dot}
        />
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/Main/jomps.jpg")}
            style={styles.profile}
          />
        </Pressable>
      </View>

      {/* FEATURED */}

      <View style={styles.featured}>
        <ImageBackground
          source={require("../assets/Main/God-of-war.jpg")}
          style={styles.gow}
          imageStyle={styles.gowroundcorner}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.gradient}
        />
        <Text style={styles.ftext}>Featured</Text>
        <Text style={styles.title}>GOD OF WAR</Text>
        <View style={styles.featuredbuttons}>
          <TouchableOpacity style={styles.buynow}>
            <Text style={styles.buynowtext}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detail}>
            <Text style={styles.detailstext}>DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#888",
          marginVertical: 20,
          opacity: 0.5,
          width: "85%",
          alignSelf: "center",
        }}
      />

      {/* ADS */}

      <View style={styles.ads}>
        <TouchableOpacity
          style={{
            backgroundColor: "#00BCD4",
            marginVertical: 10,
            marginHorizontal: 5,
            height: 50,
            borderRadius: 7,
            alignItems: "center",
            justifyContent: "center",
            elevation: 5,
          }}
        >
          <Text
            style={{
              color: "#1E1E1E",
              fontWeight: "900",
              fontSize: 18,
              letterSpacing: 0.5,
            }}
          >
            NEW RELEASE
          </Text>
        </TouchableOpacity>
        <View style={styles.adrow}>
          <TouchableOpacity
            style={{
              backgroundColor: "#00BCD4",
              marginLeft: 5,
              marginRight: 5,
              height: 50,
              width: "47.5%",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
            }}
          >
            <Text style={{ color: "#1E1E1E", fontWeight: "900", fontSize: 16 }}>
              MOST POPULAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#00BCD4",
              marginRight: 5,
              marginLeft: 5,
              height: 50,
              width: "47.5%",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: "#1E1E1E",
                fontWeight: "900",
                fontSize: 16,
              }}
            >
              BEST SELLER
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Spiderman Banner */}

      <View style={styles.banner}>
        <ImageBackground
          source={require("../assets/Main/spooderman.jpg")}
          style={styles.banners}
          imageStyle={{ borderRadius: 6 }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.gradient}
          />
          <View style={styles.bannerContent}>
            <Text style={styles.bannertext}>Spiderman: Remastered</Text>
          </View>
        </ImageBackground>
      </View>

      {/* Lists of Games */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContainer}
      >
        <View style={styles.gamelist}>
          <ImageBackground
            source={require("../assets/Main/MHW.jpg")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                1
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/Main/Cuphead.png")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                2
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/Main/Miles-Morales.jpg")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                3
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/Main/GTA5.png")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                4
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/Main/God_of_War_Ragnarök.jpg")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                5
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/Main/Tekken-8.jpg")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                6
              </Text>
            </View>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/Main/It_Takes_Two.png")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                7
              </Text>
            </View>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/Main/Red_Dead_Redemption_II.jpg")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                8
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/Main/Elden-Ring.jpg")}
            style={styles.games}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={styles.gamegradient}
            />
            <View
              style={{
                backgroundColor: "#1E1E1E",
                height: 32,
                width: 32,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                9
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

      {/* GTA V Banner */}

      <View style={styles.bannerGTA}>
        <ImageBackground
          source={require("../assets/Main/GTAV.jpg")}
          style={styles.banners}
          imageStyle={{ borderRadius: 6 }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,1)", "transparent"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.gradient}
          />
          <View style={styles.GTAbannerContent}>
            <Text style={styles.GTAbannertext}>Grand Theft Auto V</Text>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#888",
          marginVertical: 20,
          opacity: 0.5,
          width: "85%",
          alignSelf: "center",
        }}
      />

      {/* ADS */}

      <TouchableOpacity
        style={{
          backgroundColor: "#00BCD4",
          marginVertical: 10,
          marginHorizontal: 5,
          height: 50,
          borderRadius: 7,
          alignItems: "center",
          justifyContent: "center",
          elevation: 5,
        }}
      >
        <Text
          style={{
            color: "#1E1E1E",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          OVERWHELMINGLY POSITIVE
        </Text>
      </TouchableOpacity>

      {/* TLOU Banner */}

      <View style={[styles.bannerGTA, styles.TLOU]}>
        <ImageBackground
          source={require("../assets/Main/TLOU2.jpg")}
          style={styles.banners}
          imageStyle={{ borderRadius: 6 }}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "transparent"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.gradient}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },

  //Header

  Header: {
    flexDirection: "row",
    height: 83,
  },

  searchcontain: {
    backgroundColor: "#1E1E1E",
    flexDirection: "row",
    marginTop: 14,
    height: 54,
    borderRadius: 5,
    marginLeft: 7,
    alignItems: "center",
    padding: 10,
    width: 295,
    marginRight: 3,
  },
  gamepad: {
    marginRight: 7,
  },
  searchtext: {
    color: "#9D9D9D",
    fontWeight: "bold",
    fontSize: 14,
  },
  magnifyingglass: {
    marginLeft: "auto",
  },
  dot: {
    marginTop: 29,
    marginRight: 4,
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 3,
    marginTop: 19,
  },

  //Featured

  featured: {
    height: 420,
    width: 390,
    borderRadius: 5,
    marginTop: 7,
    overflow: "hidden",
  },
  gow: {
    flex: 1,
    height: 420,
    width: 390,
  },
  ftext: {
    color: "#00BCD4",
    marginLeft: 22,
    marginVertical: 2,
    fontSize: 22,
  },
  featcontain: {
    flex: 1,
    ...StyleSheet.absoluteFill,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 17,
    marginBottom: 12,
    fontSize: 25,
  },
  featuredbuttons: {
    flexDirection: "row",
  },
  buynowtext: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 17,
  },
  detailstext: {
    color: "white",
  },
  gowroundcorner: {
    borderRadius: 7,
  },
  buynow: {
    backgroundColor: "#00BCD4",
    marginLeft: 16,
    marginBottom: 23,
    marginRight: 15,
    height: 33,
    width: 114,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  detail: {
    backgroundColor: "rgba(58, 58, 58, 0.8)",
    height: 33,
    width: 87,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    elevation: 4,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "35%",
  },

  //ADS
  ads: {
    width: "100%",
    height: "130",
  },
  adrow: {
    flexDirection: "row",
  },

  //Banners

  banner: {
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: "hidden",
    width: 380,
    height: 140,
    elevation: 5,
    marginVertical: 13,
    elevation: 5,
  },
  bannerGTA: {
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: "hidden",
    width: 380,
    height: 170,
    elevation: 5,
    marginVertical: 13,
    elevation: 5,
  },
  banners: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  bannerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  GTAbannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 7,
  },
  bannertext: {
    color: "white",
    textDecorationLine: "underline",
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 20,
    textAlign: "center",
  },
  GTAbannertext: {
    color: "white",
    textDecorationLine: "underline",
    fontWeight: "900",
    letterSpacing: 0.4,
    fontSize: 20,
  },
  TLOU: {
    elevation: 5,
    marginBottom: 100,
  },

  //Game lists

  gamelist: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  games: {
    width: 150,
    height: 220,
    margin: 10,
    elevation: 10,
  },
  gamegradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
