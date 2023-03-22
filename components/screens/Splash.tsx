import { View, StyleSheet } from "react-native";

import React, { useEffect, useRef, useState } from "react";

import LottieView from "lottie-react-native";

const Splash = ({ navigation }: any) => {
	const animation = useRef(null);
	const [animationLoaded, setAnimationLoaded] = useState(false);
	const ref = useRef(null);

	const onAnimationFinish = () => {
		setAnimationLoaded(true);
	};

	useEffect(() => {
		if (animationLoaded) {
			navigation.navigate("Home");
		}
	}, [animationLoaded, navigation]);

	return (
		<View style={styles.root}>
			<LottieView
				ref={(animation) => {
					ref.current = animation;
				}}
				style={styles.lottieView}
				source={require("../../assets/lottie/BYfY5tPZH3.json")}
				autoPlay
				loop={false}
				onAnimationFinish={onAnimationFinish}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.0)",
	},
	lottieView: {
		height: "auto",
		width: 700,
	},
});

export default Splash;
