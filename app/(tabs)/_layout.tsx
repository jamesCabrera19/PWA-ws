import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                headerStyle: {
                    backgroundColor: "#25292e",
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor: "#25292e",
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="sensors"
                options={{
                    title: "Sensors",
                    // href: null,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={
                                focused
                                    ? "information-circle"
                                    : "information-circle-outline"
                            }
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="sensor/[id]"
                options={{
                    href: null, // This hides the dynamic route from the tabs
                }}
            />
        </Tabs>
    );
}
