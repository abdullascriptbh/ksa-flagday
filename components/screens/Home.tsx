import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Animated, { FadeInRight, FadeInLeft, SlideInDown } from "react-native-reanimated";
const Home = ({ navigation }: any) => {
	let [fontloaded] = useFonts({
		"Tajawal-Bold": require("../../assets/fonts/Tajawal/Tajawal-Bold.ttf"),
	});
	if (fontloaded) {
		return (
			<ImageBackground style={[styles.screenWrapper]} imageStyle={styles.backgroundStyle} source={require("../../assets/original-7748a2aa5fc476fc0e0e473bcbfd0cf2.webp")}>
				<View style={[styles.ViewOverlay, { justifyContent: "center" }]}>
					<Animated.View entering={FadeInRight.duration(800).delay(500)} style={{ justifyContent: "center", alignItems: "flex-end", paddingRight: 30 }}>
						<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 40, color: "white" }}>يوم العلم</Text>
						<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 40, color: "white" }}>السعودي</Text>
					</Animated.View>
					<Animated.View entering={FadeInLeft.duration(800).delay(500)} style={{ flexDirection: "row", justifyContent: "flex-end", paddingRight: 30, paddingTop: 20 }}>
						<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 15, color: "white" }}>#يوم_العلم</Text>
						<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 15, color: "white", paddingLeft: 15 }}>11 مارس</Text>
					</Animated.View>
					<Animated.View
						entering={SlideInDown.duration(800).delay(500)}
						style={{
							flexDirection: "column",
							// backgroundColor: "#efefef",
							position: "absolute",
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
							bottom: 100,
							// height: 200,
						}}
					>
						<View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 43, color: "white", textAlign: "center", paddingHorizontal: 23 }}>٠٣</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 43, color: "white", textAlign: "center", paddingHorizontal: 6 }}>:</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 43, color: "white", textAlign: "center", paddingHorizontal: 23 }}>٠٩</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 43, color: "white", textAlign: "center", paddingHorizontal: 6 }}>:</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 43, color: "white", textAlign: "center", paddingHorizontal: 23 }}>١٥</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 43, color: "white", textAlign: "center", paddingHorizontal: 6 }}>:</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 43, color: "white", textAlign: "center", paddingHorizontal: 23 }}>٢٨</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								justifyContent: "center",
								alignContent: "center",
								alignItems: "center",
								paddingVertical: 15,
								paddingBottom: 20,
							}}
						>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "white", textAlign: "center", paddingHorizontal: 22 }}>أيام</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "white", textAlign: "center", paddingHorizontal: 10 }}></Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "white", textAlign: "center", paddingHorizontal: 22 }}>ساعات</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "white", textAlign: "center", paddingHorizontal: 10 }}></Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "white", textAlign: "center", paddingHorizontal: 22 }}>دقائق</Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "white", textAlign: "center", paddingHorizontal: 10 }}></Text>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "white", textAlign: "center", paddingHorizontal: 22 }}>ثواني</Text>
						</View>
						<TouchableOpacity
							style={{ padding: 20, borderRadius: 30, width: 400, backgroundColor: "#1C613E" }}
							onPress={() => {
								navigation.navigate("Details");
							}}
						>
							<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "white", textAlign: "center" }}>اعرف اكثر</Text>
						</TouchableOpacity>
					</Animated.View>
				</View>
			</ImageBackground>
		);
	} else {
		return null;
	}
};

const styles = StyleSheet.create({
	screenWrapper: {
		flex: 1,
		position: "relative",
	},
	backgroundStyle: {
		resizeMode: "cover",
		position: "absolute",
	},
	ViewOverlay: {
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, .8)",
	},
});

export default Home;
