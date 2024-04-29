import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/sign-in";
import SignUp from "../screens/sign-up";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="sign-in" component={SignIn} />

			<Stack.Screen name="sign-up" component={SignUp} />
		</Stack.Navigator>
	);
}
