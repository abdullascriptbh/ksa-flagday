import { View, Text, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Animated, { FadeIn } from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Details = ({ navigation }: any) => {
	let [fontloaded] = useFonts({
		"Tajawal-Bold": require("../../assets/fonts/Tajawal/Tajawal-Bold.ttf"),
	});
	if (fontloaded) {
		return (
			<>
				<Animated.View
					entering={FadeIn.duration(800).delay(500)}
					style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 30, marginTop: 100, width: "100%" }}
				>
					<Image source={require("../../assets/original-a24615bc164ede4bbb9d6ce427d7ca07.webp")} style={{ width: 380, height: 200, borderRadius: 10 }} />
				</Animated.View>
				<Animated.View
					entering={FadeIn.duration(800).delay(800)}
					style={{
						marginHorizontal: 30,
						marginTop: 50,
						flexDirection: "row",
						justifyContent: "flex-end",
					}}
				>
					<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 25, color: "#1C613E", textAlign: "center" }}>يوم العلم</Text>
				</Animated.View>
				<Animated.View
					entering={FadeIn.duration(800).delay(800)}
					style={{
						marginHorizontal: 30,
						marginTop: 10,
						flexDirection: "row",
						justifyContent: "flex-end",
					}}
				>
					<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "#A2A2A2", textAlign: "right", lineHeight: 20 }}>
						ونص الأمر الملكي على أن تجديد يوم العلم جاء "انطلاقا من قيمة العلم الوطني الممتدة عبر تاريخ الدولة السعودية منذ تأسيسها في عام 1139 هجرية الموافق 1727 ميلادية
						والذي يرمز بشهادة التوحيد التي تتوسطه إلى رسالة السلام والإسلام التي قامت عليها هذه الدولة المباركة ويرمز بالسيف إلى القوة والأنفة وعلو الحكمة والمكانة".
					</Text>
				</Animated.View>
				<Animated.View
					entering={FadeIn.duration(800).delay(800)}
					style={{
						marginHorizontal: 30,
						marginTop: 30,
						flexDirection: "row",
						justifyContent: "flex-end",
					}}
				>
					<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 25, color: "#1C613E", textAlign: "center" }}>قصة العلم</Text>
				</Animated.View>
				<Animated.View
					entering={FadeIn.duration(800).delay(800)}
					style={{
						marginHorizontal: 30,
						marginTop: 10,
						flexDirection: "column",
						justifyContent: "flex-end",
					}}
				>
					<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, color: "#A2A2A2", textAlign: "right", lineHeight: 20 }}>
						عرف العلم بأصالته وعراقته حيث بدأت قصته مع تأسيس الدولة السعودية عام 1139هـ/ 1727م، وهو امتداد للإرث العربي والإسلامي في استخدام الراية والعلم كإحدى مظاهر
						الدولة،
					</Text>
					<Text style={{ marginTop: 20, fontFamily: "Tajawal-Bold", fontSize: 18, color: "#A2A2A2", textAlign: "right", lineHeight: 20 }}>
						ومنذ ذلك التاريخ وحتى وقتنا الحاضر والعلم لونه أخضر وتتوسطه عبارة التوحيد لا إله إلا الله محمد رسول الله
					</Text>
				</Animated.View>
				<Animated.View
					entering={FadeIn.duration(800).delay(1200)}
					style={{
						marginHorizontal: 30,
						marginTop: 40,
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "baseline",
					}}
				>
					<Text style={{ fontFamily: "Tajawal-Bold", fontSize: 18, marginHorizontal: 10, color: "#1C613E" }}>مشاركة الحدث</Text>
					<Entypo name="share-alternative" size={24} color="#1C613E" />
				</Animated.View>
				<Animated.View
					entering={FadeIn.duration(800).delay(1000)}
					style={{
						marginHorizontal: 100,
						marginTop: 20,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "baseline",
					}}
				>
					<MaterialCommunityIcons name="snapchat" size={24} color="#1C613E" />
					<MaterialCommunityIcons name="web" size={24} color="#1C613E" />
					<Feather name="twitter" size={24} color="#1C613E" />
					<AntDesign name="instagram" size={24} color="#1C613E" />
				</Animated.View>
			</>
		);
	} else {
		return null;
	}
};

export default Details;
