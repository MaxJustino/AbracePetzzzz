import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "../screens/sign-in";
import SignUp from "../screens/sign-up";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="sign-in"
				component={SignIn}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Feather name="home" color={color} size={size} />
					),
					tabBarLabel: "Login",
				}}
			/>

			<Tab.Screen
				name="sign-up"
				component={SignUp}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Feather name="user-plus" color={color} size={size} />
					),
					tabBarLabel: "Criar conta",
				}}
			/>
		</Tab.Navigator>
	);
}
