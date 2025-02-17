import { Stack } from "expo-router";
import { WebSocketProvider } from "./components/WebSocket";

const App = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
};
export default function RootLayout() {
    return (
        <WebSocketProvider>
            <App />
        </WebSocketProvider>
    );
}
