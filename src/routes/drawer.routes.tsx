import { Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./tab.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
	return (
		<Drawer.Navigator screenOptions={{ title: "" }}>
			<Drawer.Screen
				name="home"
				component={TabRoutes}
				options={{
					drawerIcon: ({ color, size }) => (
						<Feather name="home" color={color} size={size} />
					),
					drawerLabel: "Login",
				}}
			/>
				<Drawer.Screen
				name="cadastro"
				component={TabRoutes}
				options={{
					drawerIcon: ({ color, size }) => (
						<Feather name="user-plus" color={color} size={size} />
					),
					drawerLabel: "Cadastro",
				}}
			/>
			
		</Drawer.Navigator>
	);
}
