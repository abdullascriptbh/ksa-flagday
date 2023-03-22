import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/screens/Home";
import Details from "./components/screens/Details";
import Splash from "./components/screens/Splash";
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash">
				<Stack.Screen
					name="Splash"
					component={Splash}
					options={{
						animation: "fade",
						animationDuration: 1000,
						headerShown: false,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="Home"
					options={{
						animation: "fade",
						animationDuration: 1000,
						headerShown: false,
						gestureEnabled: false,
					}}
					component={Home}
				/>
				<Stack.Screen
					name="Details"
					options={{
						animation: "fade",
						animationDuration: 1000,
						headerShown: false,
						gestureEnabled: true,
					}}
					component={Details}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
